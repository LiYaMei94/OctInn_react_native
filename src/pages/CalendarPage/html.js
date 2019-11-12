/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 15:51:29
 * @LastEditTime: 2019-10-08 12:04:24
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  KeyboardAvoidingView,
  View,
  FlatList,
  ImageBackground,
  ScrollView,
  Image
} from 'react-native';
import {ScreenWidth} from '../../assets/css/globalCss';
import {styles} from './style';
import Calendar from '../../components/Calendar/html';
import {horoscope_list} from '../../network/api';
import {getHoroscope,getCurrentDate,getDay} from '../../utils/dateUtil';
import {horoscopeData,getHoroscopeData,getLaoHuangLi,getWeather} from './data';
import LinearGradient  from 'react-native-linear-gradient';
import HoroscopeItem from '../../components/horoscopeItem';
import EventItem from '../../components/eventItem';
const date=getCurrentDate();
const horoscope=date.horoscope;
const data =[0,1,2,3,4];
export default class CalendarPage extends Component{
    constructor(props){
        super(props);
        this.state={
          horoscopeArr:horoscopeData,//getHoroscopeData()
          isShowHeader:false,
          currentDate:{},
          LaoHuangliData:getLaoHuangLi(date.dateStr),
          weatherData:getWeather()
        }
    }
    componentDidMount(){
      
      
    }

    horoscopeItem({item}){
      //console.log(item)
      return (
        <HoroscopeItem item={item}></HoroscopeItem>
      )
    }
    //导航栏日期
    getNavigationBarData(date){
      this.setState({
        currentDate:date
      })
      //console.log(date)
    }
    render() {
      let {horoscopeArr,isShowHeader,currentDate,LaohuangliData,weatherData}=this.state;
      //console.log(weatherData)
        return (
          <View style={styles.container}>
            {
              isShowHeader?
              <View style={styles.navigationBar}>
                  <View style={styles.navigationBarItem}>
                      <Text style={{fontSize:18,}}>{currentDate.year}</Text>
                      <Text style={{fontSize:14,}}>{JSON.stringify(currentDate)!='{}'?currentDate.lunarDate.year:''}</Text>
                  </View>
                  <View style={[styles.navigationBarItem,{flexDirection:"row",}]}>
                      <Text style={{fontSize:32,}}>{currentDate.month}月</Text>
                      {/*<Text style={[styles.iconFont,{fontSize:30,height:45,textAlignVertical:"center"}]}>{'\ue656'}</Text>*/}
                  </View>
              </View>:null
            }
            <ScrollView 
              onScroll={(event)=>{
                let falg=false;
                if(event.nativeEvent.contentOffset.y>55){
                  falg=true;
                }else{
                  falg=false;
                }
                this.setState({
                  isShowHeader:falg
                })
              }}
              showsVerticalScrollIndicator={false} 
              style={styles.container}>
                <Calendar 
                  style={[styles.Calendar,{height:isShowHeader?370:460,}]} 
                  navigation={this.props.navigation}
                  calendarHeight={380} 
                  calendarWidth={320}
                  getNavigationBarData={this.getNavigationBarData.bind(this)}
                  isShowNavigationBar={isShowHeader}
                  calendarHeight={isShowHeader?350:420}
                  ></Calendar>
                {
                  LaohuangliData?
                  <View style={[styles.contentItem,styles.Laohuangli]}>
                    <View style={styles.contentItemLine}>
                      <View>
                        <Text style={{fontSize:20}}>{LaohuangliData.yangli.split('-')[0]+'年'+LaohuangliData.yangli.split('-')[1]+'月'+LaohuangliData.yangli.split('-')[2]+'日'}</Text>
                        <Text style={{fontSize:14}}>{LaohuangliData.yinli}</Text>
                      </View>
                      <Text style={styles.week}>{getDay(date.dateStr)}</Text>
                    </View>
                    {/**天气预报 */}
                    <View style={styles.todayWeather}>
                      <View style={{flexDirection:"row",alignItems:"flex-start",position:"relative"}}>
                        <Text style={{fontSize:80}}>{weatherData.realtime.temperature}</Text>
                        <Text style={[styles.iconFont,{fontSize:40,marginTop:15}]}>{'\ue6bd'}</Text>
                        <Text style={{position:"absolute",right:5,bottom:15}}>{weatherData.realtime.info}</Text>
                      </View>
                      <View style={{flex:1,paddingLeft:20}}>
                        <Text style={[styles.WeatherLogo]}>{weatherData.realtime.direct} {weatherData.realtime.power}</Text>
                        <Text style={[styles.WeatherLogo]}>空气质量：{weatherData.realtime.humidity}</Text>
                        <Text style={[styles.WeatherLogo]}>湿度：{weatherData.realtime.humidity}</Text>
                      </View>
                    </View>
                    {/**忌宜 */}
                    <View style={styles.contentItemLine}>
                      <Text style={[styles.LaohuangliLogo,{backgroundColor:"#4B913D"}]}>宜</Text>
                      <Text style={styles.LaohuangliText}>{LaohuangliData.yi}</Text>
                    </View>
                    <View style={styles.contentItemLine}>
                      <Text style={[styles.LaohuangliLogo,{backgroundColor:"#ED0E0F"}]}>忌</Text>
                      <Text style={styles.LaohuangliText}>{LaohuangliData.ji}</Text>
                    </View>
                  </View>:null
                }
                {
                  horoscopeArr?
                  <View style={[styles.contentItem]} >
                    <Text style={styles.contentItemHeader}>今日运势</Text>
                    <FlatList
                      scrollEnabled={true}
                      pagingEnabled={true}
                      pageSize={1}
                      data={horoscopeArr}
                      keyExtractor={(item,index)=> index+''}
                      horizontal={true}
                      renderItem={this.horoscopeItem}
                      showsHorizontalScrollIndicator={false}
                    ></FlatList>
                  </View>:null
                }
                <View style={[styles.contentItem]} >
                    {/*<Text style={styles.contentItemHeader}>今日事件</Text>*/}
                    {
                      data.map((item,index)=>{
                          return <EventItem key={index} item={item} index={index}></EventItem>
                      })
                  }
                </View>
            </ScrollView>
          </View>
        );
    }
}

