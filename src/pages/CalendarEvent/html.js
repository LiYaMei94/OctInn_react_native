import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  View,
  TouchableHighlight,
  FlatList
} from 'react-native';
import StatusBarScreen from '../../components/StatusBar';
import {headerHeight,headerPaddingTop,ScreenWidth,themeColor} from '../../assets/css/globalCss';
import {styles} from './style';
import {getDiffDate,getDay} from '../../utils/dateUtil';
import LinearGradient  from 'react-native-linear-gradient';
import NavigationBar from '../../components/navigationBar/index';
import EventItem from '../../components/eventItem';
const data=[0,1,2,3,4,5,6,7];
export default class AddDayPage extends Component{
    constructor(props){
        super(props);
        this.state={
            day:{
                dateString:"2019-09-24",
                day:24,
                month:9,
                timestamp:1569283200000,
                week:"星期二",
                year:2019,
                DaysMatter:{
                    dayNum:6,
                    diff:518400000,
                    text:'已过去'
                }
            }
            //day:JSON.parse(this.props.navigation.getParam('day','{}'))
        }
    }
    componentDidMount(){
        this.updataDay();
    }
    updataDay(){
        const {day}=this.state;
        let week=getDay(day.dateString);
        let DaysMatter=getDiffDate(day.dateString);
        day.week=week;
        day.DaysMatter=DaysMatter;
        this.setState({
            day:day
        })
    }
    eventList({item}){
        return <EventItem></EventItem>
    }
    goAddDayPage(){
        this.props.navigation.push('AddDayPage',{day:this.state.day})
    }
    render() {
        const {day}=this.state;
        //console.log(day)
        return (
          <View style={styles.container}>
            <StatusBarScreen barStyle={'light-content'}></StatusBarScreen>
            <NavigationBar 
                isHeaderLeftImg={true}
                headerRightText='添加'
                headerTitle=''
                headerRigthPress={this.goAddDayPage.bind(this)}
                headerRightTextColor='#fff'
                navigation={this.props.navigation}
                optionStyle={{position:"absolute",top:0,right:0,left:0,backgroundColor:"rgab(0,0,0,0)",zIndex:1,borderBottomWidth:0}}
                ></NavigationBar>
              <LinearGradient style={styles.top_container}  
                start={{x: 0.25, y: 0.25}}
                end={{x: 0.75, y: 0.75}} 
                //locations={[0.23,0.63,1]}
                colors={['#345063', '#8D7E77','#57616A']}>
                <Text style={styles.daysTitle}>距今天{day.DaysMatter?day.DaysMatter.text:''}</Text>
                <View style={styles.DaysMatter}>
                    {/*<Text style={styles.DaysMatterText}>{day.DaysMatter?day.DaysMatter.text:''}</Text>*/}
                    <Text style={styles.DaysMatterNum}> {day.DaysMatter?day.DaysMatter.dayNum:''} </Text>
                    <Text style={styles.DaysMatterText}>天</Text>
                </View>
                <View style={styles.currentDate}>
                    <Text style={styles.solarCalendar}>{day.dateString}</Text>
                    <Text style={styles.lunarCalendar}>乙亥年8月二五</Text>
                </View>
                <Text style={styles.currentDateWeek}>{day.week}</Text>
              </LinearGradient>
              <View style={styles.eventListContainer}>
                <FlatList
                    showsVerticalScrollIndicator={false} 
                    data={data}
                    renderItem={this.eventList}
                    keyExtractor={(index)=>index+''}
                ></FlatList>
              </View>
          </View>
        );
    }
}

