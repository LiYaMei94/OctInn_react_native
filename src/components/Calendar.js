import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ImageBackground,
  TextInput,
  Keyboard,
  LayoutAnimation,
  UIManager
} from 'react-native';

import {CalendarList,LocaleConfig} from './reactNativeCalendars';
import LinearGradient from 'react-native-linear-gradient';
import {getLunarDate,getDay,CheckDate,getCurrentDate} from '../utils/dateUtil';
import {themeColor,ScreenWidth,ScreenHeight,headerHeight,headerPaddingTop} from '../assets/css/globalCss';
LocaleConfig.locales['fr'] = {
  monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
  monthNamesShort: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
  dayNames: ['周日','周一','周二','周三','周四','周五','周六'],
  dayNamesShort: ['日','一','二','三','四','五','六'],
  today: '今天'
};
LocaleConfig.defaultLocale = 'fr';

const spring = {
    duration: 400,
    update: {
        type: LayoutAnimation.Types.linear,
        springDamping: 0.5,
    },
};
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

//今天时间
const date=getCurrentDate();
const year=getCurrentDate().year;
const month=getCurrentDate().month;
const day=getCurrentDate().day;
const week =getCurrentDate().week;
const dateStr=year+'年'+month+'月'+day+'日';
let lunarDate=getCurrentDate().lunarDate;

export default class Calendar extends Component{
    static defaultProps={
        hideArrows:true,
        calendarHeight:420,
        calendarWidth:ScreenWidth,
        dayWidth:38,
        dayHeigth:38,
        isShowNavigationBar:false
    }
    constructor(props){
        super(props);
        this.state={
            currentShowDateStr:year+'-'+month+'-'+day,//要显示的日期
            currentShowDate:{
                year:year,
                month:month,
                day:day,
                dateStr:dateStr,
                week:week,
                lunarDate:getLunarDate(year+'-'+month+'-'+day).dateStr
            },
            currentDate:{
                dateStr:dateStr,
                week:week,
                year:year,
                month:month,
                day:day,
                lunarDate:lunarDate
            },
            isShowSearchDate:false,
            SearchDateTop:(ScreenWidth-headerHeight)/2,
            isSearch:false
        }
    }
    componentDidMount(){
    }
    componentWillMount() {
        //this.getCurrentDate()
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
    }
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    //调起键盘
    _keyboardDidShow(e) {
        let value=(ScreenHeight-e.endCoordinates.height-210)/2;//210SearchDate的高
        LayoutAnimation.configureNext(spring);
        this.setState({
            SearchDateTop:value,
        })
    }
    //关闭键盘
    _keyboardDidHide() {
        LayoutAnimation.configureNext(spring);
        this.setState({
            SearchDateTop:(ScreenWidth-headerHeight)/2,
        })
    }
    getCurrentDate(date){
        let dateStr=date.toString('yyyy-MM-dd');
        let lunarDate=getLunarDate(dateStr);
        this.setState({
            currentDate:{
                dateStr:dateStr.split('-')[0]+'年'+dateStr.split('-')[1]+'月'+dateStr.split('-')[2]+'日',
                week:getDay(dateStr),
                year:dateStr.split('-')[0],
                month:dateStr.split('-')[1],
                day:dateStr.split('-')[2],
                lunarDate:lunarDate
            }
        },()=>this.props.getNavigationBarData(this.state.currentDate))
    }
    //搜索日期弹窗显示与隐藏
    showSearchDate(){
        this.setState({
            isShowSearchDate:!this.state.isShowSearchDate,
        },()=>{
            //console.log(this.state.isShowSearchDate)
        })
    }
    inputValue(text,index){
        //console.log(text,index)
        let {currentShowDate}=this.state;
        currentShowDate[index]=text;
        this.setState({
            currentShowDate:currentShowDate
        },()=>{
            //console.log(currentShowDate)
        })
            
    }
    
    //搜索
    searchDate(){
        let {currentShowDate}=this.state;
        let dateStr=currentShowDate.year+'-'+currentShowDate.month+'-'+currentShowDate.day;
        let isQualifiedDate=CheckDate(dateStr);
        if(isQualifiedDate){
            this.setState({
                currentShowDateStr:currentShowDate.year+'-'+currentShowDate.month+'-'+currentShowDate.day,//要显示的日期
                isShowSearchDate:false,
                isSearch:true
            },()=>{
                console.log(this.state.currentShowDateStr)
            })
        }
    }
    //返回当前月份
    goBackCurrenMonth(){
        this.setState({
            currentShowDateStr:year+'-'+month+'-'+day,//要显示的日期
            isSearch:true
        },()=>{
            console.log(this.state.currentShowDateStr)
        })
    }
    render() {
        const {currentDate,isShowSearchDate,SearchDateTop,currentShowDateStr,currentShowDate,isSearch}=this.state;
        const {navigation,hideArrows,calendarHeight,calendarWidth,dayWidth,dayHeigth,isShowNavigationBar}=this.props;
        //console.log(currentShowDate)
        return (
            <View style={this.props.style}>
                {
                    !hideArrows?
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerOperationButText}>已选择</Text>
                        <View style={styles.showSelectData}>
                            <Text>2019年9月24日</Text>
                            <Text>乙亥年</Text>
                        </View>
                        <TouchableHighlight
                            style={styles.headerOperationBut}
                            underlayColor='transparent'
                        >
                            <Text style={[styles.headerOperationButText,{textAlign:"right"}]}>回到今天</Text>
                        </TouchableHighlight>
                    </View>:
                    hideArrows&&!isShowNavigationBar?
                    <ImageBackground style={styles.CalendarPage_header} 
                        source={require('../assets/images/headerTop.png')}>

                        <TouchableHighlight
                            underlayColor='transparent'
                            style={[styles.headerLine,{marginTop:8}]}
                            onPress={this.showSearchDate.bind(this)}
                        >
                             <View style={{flexDirection:"row"}}>
                                <Text style={{fontSize:46,textAlignVertical:"top",height:52,}}>{currentDate.month}</Text>
                                <Text style={{fontSize:30,textAlignVertical:"bottom",height:52,}}>{JSON.stringify(currentDate)!='{}'?'月':''}</Text>
                                {/*<Text style={{fontFamily:'iconfont',fontSize:20,textAlignVertical:"center",height:65,}}>{JSON.stringify(currentDate)!='{}'?'\ue656':''}</Text>*/}
                            </View>
                        </TouchableHighlight>
                        <View style={styles.headerLine}>
                            <Text style={styles.lineText}>{currentDate.year} </Text>
                            <Text style={styles.lineText}> {JSON.stringify(currentDate)!='{}'?currentDate.lunarDate.year:''}</Text>
                        </View>
                        {
                            /*month!=currentDate.month?
                            <TouchableHighlight
                                underlayColor='transparent'
                                style={{position:"absolute",left:30,bottom:10,borderColor:'#666',borderWidth:1,paddingLeft:6,paddingRight:6}}
                                onPress={this.goBackCurrenMonth.bind(this)}
                            >
                                <Text style={[styles.lineText,{fontSize:17}]}>返回{month}月</Text>
                            </TouchableHighlight>:null*/
                        }
                        {/*<TouchableHighlight
                            underlayColor='transparent'
                            style={[styles.headerLine,{marginTop:20}]}
                            onPress={this.showSearchDate.bind(this)}
                        >
                            <Text style={styles.lineText}>搜索日期</Text>
                        </TouchableHighlight>*/}
                    </ImageBackground>:null
                }
                <View style={hideArrows?{marginTop:isShowNavigationBar?20:110,zIndex:-1}:{}}>
                    <CalendarList
                        current={currentShowDateStr}//最初可见月份
                        isSearch={isSearch}
                        //minDate={'2021-01-01'}//可以选择的最短日期，minDate之前的日期将显示为灰色
                        //maxDate={'2012-05-30'}//可以选择的最大日期，maxDate之后的日期将显示为灰色
                        style={!hideArrows?{paddingLeft: 25,paddingRight: 25,}:{}}
                        horizontal={true}
                        pagingEnabled={true}
                        calendarWidth={calendarWidth}
                        calendarHeight={calendarHeight}
                        onDayPress={(day) => {
                            //console.log(day)
                            navigation.push('CalendarEvent',{day:JSON.stringify(day)})
                        }}
                        //onDayLongPress={(day) => {console.log('selected day', day)}}
                        //onMonthChange={(month) => {console.log('month changed', month)}}
                        scrollChange={(month)=>this.getCurrentDate(month)}
                        hideArrows={hideArrows}//是否隐藏月份导航箭头
                        //renderArrow={(direction) => (<Arrow />)}//自定义箭头
                        hideExtraDays={false}//是否在当前月份显示其他月份日期
                        disableMonthChange={true}//如果hideArrows = false且hideExtraDays = false，则在点击灰色时不要切换月份
                        firstDay={1}//如果firstDay = 1周从星期一开始。请注意，dayNames和dayNamesShort仍应从星期日开始
                        hideDayNames={false}//是否隐藏周一到周天
                        showWeekNumbers={false}//在左侧显示周数
                        onPressArrowLeft={substractMonth => substractMonth()}//点击左边箭头
                        onPressArrowRight={addMonth => addMonth()}//点击右边箭头
                        dayWidth={dayWidth}
                        dayHeigth={dayHeigth}
                        markingType={'custom'}//自定义标记样式
                        markedDates={{
                            '2019-10-01': {
                            customStyles: {
                                container: {
                                backgroundColor: 'green'
                                },
                                text: {
                                color: 'black',
                                fontWeight: 'bold'
                                },
                            },
                            },
                            '2019-09-29': {
                            customStyles: {
                                container: {
                                backgroundColor: 'white',
                                elevation: 2
                                },
                                text: {
                                color: 'blue'
                                },
                            }
                            }
                        }}
                    />
                </View>
                {
                    !hideArrows?
                    <View style={styles.operationContainer}>
                        <TouchableHighlight
                            style={styles.operationBut}
                            underlayColor='transparent'
                        >
                            <Text style={styles.operationButText}>取消</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.operationBut}
                            underlayColor='transparent'
                        >
                            <Text  style={styles.operationButText}>确定</Text>
                        </TouchableHighlight>
                    </View>:null
                }
                {
                    isShowSearchDate?
                    <TouchableHighlight 
                        onPress={this.showSearchDate.bind(this)}
                        underlayColor='transparent'
                        style={styles.SearchDateContianer}>
                        <View style={[styles.SearchDate,{top:SearchDateTop}]}>
                            <LinearGradient style={styles.SearchDateHeader} 
                                start={{x: 0, y: 0}}
                                end={{x: 1, y: 0}} 
                                locations={[0.1,0.75,1]}
                                colors={['#8D7E77','#345063','#57616A']}>
                                <Text style={{fontSize:34,color:"#fff",marginRight:30}}>今天是</Text>
                                <View style={{alignItems:"flex-end"}}>
                                    <Text style={{color:"#fff",fontSize:16,marginBottom:3}}>{currentShowDate.dateStr}</Text>
                                    <Text style={{color:"#fff",fontSize:14}}>{JSON.stringify(currentShowDate)!='{}'?currentShowDate.lunarDate:''}</Text>
                                </View>
                            </LinearGradient>
                            <View style={styles.SearchDateCenter}>
                                <TextInput style={styles.TextInput} placeholder={'请输入月，例如：'+month} selectionColor={themeColor}
                                    keyboardType='numeric'
                                    maxLength={2}
                                    onChangeText={(text)=>this.inputValue(text,'month')}
                                ></TextInput>
                            </View>
                            <TouchableHighlight
                                underlayColor='transparent'
                                style={styles.SearchDateCenter}
                                onPress={this.searchDate.bind(this)}
                            >
                                <LinearGradient style={styles.SearchDateButton} 
                                    start={{x: 0, y: 0}}
                                    end={{x: 1, y: 0}} 
                                    locations={[0.1,0.75,1]}
                                    colors={['#8D7E77','#345063','#57616A']}>
                                    <Text style={{color:"#fff",fontSize:16,marginBottom:3}}>确定</Text>
                                </LinearGradient>
                            </TouchableHighlight>
                        </View>
                    </TouchableHighlight>
                    :null
                }
            </View>
        );
    }
}
/*
 <TextInput style={styles.TextInput} placeholder={'请输入年，例如：'+year} selectionColor={themeColor}
                                    keyboardType='numeric'
                                    maxLength={4}
                                    onChangeText={(text)=>this.inputValue(text,'year')}
                                ></TextInput>
                                 <TextInput style={styles.TextInput} placeholder={'请输入日，例如：'+day} selectionColor={themeColor}
                                    keyboardType='numeric'
                                    maxLength={2}
                                    onChangeText={(text)=>this.inputValue(text,'day')}
                                ></TextInput>
*/
const styles = StyleSheet.create({
    //日期选择的header
    headerContainer:{
        width:'100%',
        height:60,
        borderBottomColor:"#eAeAeA",
        borderBottomWidth:1,
        flexDirection: 'row',
        alignItems:"center"
    },
    headerOperationButText:{
        width:70,
    },

    showSelectData:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    operationContainer:{
        flexDirection: 'row',
        width:ScreenWidth-30,
        height:50,
        position:"absolute",
        left:0,
        bottom:0,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    operationBut:{
        marginRight:20
    },
    operationButText:{
        color:themeColor,
        fontSize:16
    },
    //日历页的header
    CalendarPage_header:{
        width:'100%',
        height:160,
        position:"absolute",
        justifyContent:"flex-end",
        paddingBottom:10
    },
    headerLine:{
        flexDirection:"row",
        justifyContent:"flex-end",
        //alignItems:"flex-end",
        paddingLeft:30,
        paddingRight:30,
    },
    lineText:{
        fontSize:16,
    },
    //日期搜索
    SearchDateContianer:{
        width:ScreenWidth,
        height:ScreenHeight,
        position:'absolute',
        backgroundColor:"rgba(0,0,0,0.4)",
        top:0,
        left:0,
        right:0,
        alignItems:"center",
        elevation:1
    },
    SearchDate:{
        width:'80%',
        backgroundColor:'#fff',
        borderRadius:16,
        paddingBottom:20,
        position:"absolute",
        height:210
    },
    SearchDateHeader:{
        width:'100%',
        height:80,
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
        justifyContent:"flex-end",
       alignItems:"center",
        paddingRight:20,
        flexDirection:"row"
    },
    SearchDateCenter:{
        width:'100%',
        paddingRight:20,
        paddingLeft: 20,
    },
    TextInput:{
        backgroundColor:'#EAEAEA',
        width:'100%',
        height:40,
        marginTop:15
    },
    SearchDateButton:{
        width:'100%',
        height:40,
        marginTop:15,
        justifyContent:"center",
        alignItems:"center"
    },
    
});
