import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  View,
  TouchableHighlight,
  FlatList,
  Switch,
} from 'react-native';
import {headerHeight,headerPaddingTop,ScreenWidth,themeColor,globalStyle} from '../../assets/css/globalCss';
import {styles} from './style';
import {getDiffDate,getDay} from '../../utils/dateUtil';
import LinearGradient  from 'react-native-linear-gradient';
import Calendar from '../../components/Calendar/html';
import NavigationBar from '../../components/navigationBar/index';
import StatusBarScreen from '../../components/StatusBar';
import Picker from 'react-native-picker';
export default class AddDayPage extends Component{
    constructor(props){
        super(props);
        this.state={
            isCalendar:false,
            isLunarData:false,
            repeatText:'不重复'
        }
    }
    componentDidMount(){
      //console.log(ScreenWidth)
    }
    selectDate(){
        this.setState({
            isCalendar:true
        })
    }
    
    headerRigthPress(){

    }
    createData() {
        const that = this;
        let arr1 = ['周', '月', '年', '天'];
        let rightArr = [];
        let leftArr = [];
        for (let i = 0; i < arr1.length; i++) {
            rightArr.push(arr1[i] + '重复');
        }
        for (let i = 0; i < 100; i++) {
            leftArr.push(i == 0 ? '每' : '每' + i);
        }
        Picker.init({
            pickerData: [leftArr, rightArr],
            selectedValue: [0, 0],
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            pickerTitleText: '选择重复类型',
            pickerConfirmBtnColor: [83, 205, 255, 1],
            pickerCancelBtnColor: [151, 151, 151, 1],
            pickerBg: [255, 255, 255, 1],
            pickerToolBarBg: [255, 255, 255, 1],
            onPickerConfirm: data => {
                that.setState({
                    repeatText: data[0] + data[1],
                    repeatModalVisible: false
                })
            },
            onPickerCancel: data => {
                that.setState({
                    repeatText: '不重复',
                    repeatModalVisible: false
                })
            },
            onPickerSelect: data => {
                that.setState({
                    repeatText: data[0] + data[1]
                })
            }
        });
        Picker.show();
    }
    render() {
        const {isCalendar,isLunarData,repeatText}=this.state;
        //console.log(isCalendar)
        return (
            <View style={styles.container}>
                <StatusBarScreen barStyle={'dark-content'}></StatusBarScreen>
                <NavigationBar navigation={this.props.navigation} headerRigthPress={this.headerRigthPress.bind(this)}></NavigationBar>
                <View style={styles.item_container}>
                    <TextInput
                        style={[styles.TextInput,{borderBottomColor:'#eee',borderBottomWidth:1}]}
                        allowFontScaling={false}
                        clearButtonMode='while-editing'
                        placeholder='请输入记录日期的标题（必填）'
                        selectionColor={themeColor}
                    ></TextInput>
                    <TextInput
                        multiline={true}
                        style={styles.TextInput}
                        allowFontScaling={false}
                        clearButtonMode='while-editing'
                        placeholder='写下此时此刻的心情吧！（非必填）'
                        selectionColor={themeColor}
                    ></TextInput>
                </View>
                <View style={styles.item_container}>
                    <TouchableHighlight
                        onPress={this.selectDate.bind(this)}
                        underlayColor='transparent'
                        style={[styles.item_Line,{borderBottomWidth:1}]}
                    >
                        <View style={styles.item_Line}>
                            <Text style={styles.item_Line_key}>选择时间</Text>
                            <View style={styles.item_Line_value}>
                                <Text style={styles.item_Line_value_text}>2019年9月23日</Text>
                                <Text style={styles.item_Line_value_text}>乙亥年八月二五日</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <View style={[styles.item_Line,{borderBottomWidth:1}]}>
                        <View style={styles.item_Line}>
                            <Text style={styles.item_Line_key}>按农历时间计算</Text>
                            <View style={styles.item_Line_value}>
                                <Switch 
                                    onValueChange={()=>this.setState({isLunarData:!this.state.isLunarData})}
                                    value={isLunarData}
                                ></Switch>
                            </View>
                        </View>
                    </View>
                    <TouchableHighlight
                        onPress={()=>{
                            this.createData();
                            this.setState({
                                repeatModalVisible: true
                            })
                        }}
                        underlayColor='transparent'
                        style={[styles.item_Line,{borderBottomWidth:1}]}
                    >
                        <View style={styles.item_Line}>
                            <Text style={styles.item_Line_key}>重复</Text>
                            <View style={[styles.item_Line_value,{flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}]}>
                                <Text>{repeatText}</Text>
                                <Text style={[styles.item_Line_value_text,globalStyle.iconFont,{fontSize:24}]}>{'\ue656'}</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <View style={[styles.item_Line,{borderBottomWidth:1}]}>
                        <View style={styles.item_Line}>
                            <Text style={styles.item_Line_key}>选择标记样式</Text>
                            <View style={styles.item_Line_value}>
                                
                            </View>
                        </View>
                    </View>
                </View>
                {/**日历 */}
                {
                    isCalendar?<View style={styles.calendarContainer}>
                        <Calendar 
                        hideArrows={false} 
                        calendarHeight={340} 
                        calendarWidth={300}
                        dayWidth={36}
                        dayHeigth={36}
                        style={styles.Calendar}
                        ></Calendar>
                    </View>:null 
                }
            </View>
        );
    }
}


