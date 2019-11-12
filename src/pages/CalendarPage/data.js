/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-26 18:47:34
 * @LastEditTime: 2019-09-26 18:47:34
 * @LastEditors: your name
 */
import React, { Component } from 'react';
import {
  Alert,
} from 'react-native';
import {horoscope_list,laohuangli} from '../../network/api';
const weatherKey = 'ede618bbdfe67ab7f4d22558c12f0ad7';
const ChinaCalendarKey = 'c18aec5d6c41cb971544cb2c7c919b9f';
const baiduAK = '7d23xGmMmVSaORGuq0G5G4Y7QvTMLfZh';
let horoscopeData=[
  {
    name:'白羊座',
    colorStr:'#C42D3E',
    datetimeInterval:"3.21-4.19",
    indexObj:{
      "综合指数": "89%", /*综合指数*/
      "健康指数": "95%", /*健康指数*/
      "爱情指数": "80%",/*爱情指数*/
      "财运指数": "84%",/*财运指数*/
      "工作指数": "80%"/*工作指数*/
    },
    "color": "古铜色", /*幸运色*/
    "number": 8,/*幸运数字*/
    "QFriend": "处女座",/*速配星座*/
    "summary": `有些思考的小漩涡，可能让你忽然的放空，生活中许多的细节让你感触良多，五味杂陈，常常有时候就慢动作定格，想法在某处冻结停留，陷入一阵自我对话的沉思之中，这个时候你不喜欢被打扰或询问，也不想让某些想法曝光，个性变得有些隐晦。`,/*今日概述*/
    img:require('../../assets/images/constellation/Aries.png')
  },
  {
    name:'金牛座',
    colorStr:'#FCC5D8',
    datetimeInterval:'4.20-5.20',
    indexObj:{
      "综合指数": "80%", /*综合指数*/
      "健康指数": "84%", /*健康指数*/
      "爱情指数": "80%",/*爱情指数*/
      "财运指数": "95%",/*财运指数*/
      "工作指数": "34%"/*工作指数*/
    },
    "color": "古铜色", /*幸运色*/
    "number": 8,/*幸运数字*/
    "QFriend": "处女座",/*速配星座*/
    "summary": `有些思考的小漩涡，可能让你忽然的放空，生活中许多的细节让你感触良多，五味杂陈，
    常常有时候就慢动作定格，想法在某处冻结停留，陷入一阵自我对话的沉思之中，这个时候你不喜欢被打扰
    或询问，也不想让某些想法曝光，个性变得有些隐晦。`,/*今日概述*/
    img:require('../../assets/images/constellation/Taurus.png')
  },
  {
    name:'双子座',
    colorStr:'#FFE588',
    datetimeInterval:'5.21-6.21',
    indexObj:{
      "综合指数": "89%", /*综合指数*/
      "健康指数": "95%", /*健康指数*/
      "爱情指数": "80%",/*爱情指数*/
      "财运指数": "84%",/*财运指数*/
      "工作指数": "80%"/*工作指数*/
    },
    "color": "古铜色", /*幸运色*/
    "number": 8,/*幸运数字*/
    "QFriend": "处女座",/*速配星座*/
    "summary": `有些思考的小漩涡，可能让你忽然的放空，生活中许多的细节让你感触良多，五味杂陈，
    常常有时候就慢动作定格，想法在某处冻结停留，陷入一阵自我对话的沉思之中，这个时候你不喜欢被打扰
    或询问，也不想让某些想法曝光，个性变得有些隐晦。`,/*今日概述*/
    img:require('../../assets/images/constellation/Gemini.png')
  },
  {
    name:'巨蟹座',
    colorStr:'#88C381',
    datetimeInterval:'6.22-7.22',
    indexObj:{
      "综合指数": "89%", /*综合指数*/
      "健康指数": "95%", /*健康指数*/
      "爱情指数": "80%",/*爱情指数*/
      "财运指数": "84%",/*财运指数*/
      "工作指数": "80%"/*工作指数*/
    },
    img:require('../../assets/images/constellation/Cancer.png')
  },
  {
    name:'狮子座',
    colorStr:'#D99D2B',
    datetimeInterval:'7.23-8.22',
    indexObj:{
      "综合指数": "89%", /*综合指数*/
      "健康指数": "95%", /*健康指数*/
      "爱情指数": "80%",/*爱情指数*/
      "财运指数": "84%",/*财运指数*/
      "工作指数": "80%"/*工作指数*/
    },
    img:require('../../assets/images/constellation/Leo.png')
  },
  {
    name:'处女座',
    colorStr:'#B9B4B9',
    datetimeInterval:'8.23-9.22',
    indexObj:{
      "综合指数": "89%", /*综合指数*/
      "健康指数": "95%", /*健康指数*/
      "爱情指数": "80%",/*爱情指数*/
      "财运指数": "84%",/*财运指数*/
      "工作指数": "80%"/*工作指数*/
    },
    img:require('../../assets/images/constellation/virgo.png')
  },
  {
    name:'天秤座',
    colorStr:'#A1524B',
    datetimeInterval:'9.23-10.23',
    indexObj:{
      "综合指数": "89%", /*综合指数*/
      "健康指数": "95%", /*健康指数*/
      "爱情指数": "80%",/*爱情指数*/
      "财运指数": "84%",/*财运指数*/
      "工作指数": "80%"/*工作指数*/
    },
    img:require('../../assets/images/constellation/libra.png')
  },
  {
    name:'天蝎座',
    colorStr:'#BC8ACF',
    datetimeInterval:'10.24-11.22',
    indexObj:{
      "综合指数": "89%", /*综合指数*/
      "健康指数": "95%", /*健康指数*/
      "爱情指数": "80%",/*爱情指数*/
      "财运指数": "84%",/*财运指数*/
      "工作指数": "80%"/*工作指数*/
    },
    img:require('../../assets/images/constellation/Scorpio.png')
  },
  {
    name:'射手座',
    colorStr:'#B3E0F7',
    datetimeInterval:'11.23-12.21',
    indexObj:{
      "综合指数": "89%", /*综合指数*/
      "健康指数": "95%", /*健康指数*/
      "爱情指数": "80%",/*爱情指数*/
      "财运指数": "84%",/*财运指数*/
      "工作指数": "80%"/*工作指数*/
    },
    img:require('../../assets/images/constellation/Sagittarius.png')
  },
  {
    name:'摩羯座',
    colorStr:'#2E491E',
    datetimeInterval:'12.22-1.19',
    indexObj:{
      "综合指数": "89%", /*综合指数*/
      "健康指数": "95%", /*健康指数*/
      "爱情指数": "80%",/*爱情指数*/
      "财运指数": "84%",/*财运指数*/
      "工作指数": "80%"/*工作指数*/
    },
    img:require('../../assets/images/constellation/Capricorn.png')
  },
  {
    name:'水瓶座',
    colorStr:'#BD6F4B',
    datetimeInterval:'1.20-2.18',
    indexObj:{
      "综合指数": "89%", /*综合指数*/
      "健康指数": "95%", /*健康指数*/
      "爱情指数": "80%",/*爱情指数*/
      "财运指数": "84%",/*财运指数*/
      "工作指数": "80%"/*工作指数*/
    },
    img:require('../../assets/images/constellation/Aquarius.png')
  },
  {
    name:'双鱼座',
    colorStr:'#ffffff',
    datetimeInterval:'2.19-3.20',
    indexObj:{
      "综合指数": "89%", /*综合指数*/
      "健康指数": "95%", /*健康指数*/
      "爱情指数": "80%",/*爱情指数*/
      "财运指数": "84%",/*财运指数*/
      "工作指数": "80%"/*工作指数*/
    },
    img:require('../../assets/images/constellation/Pisces.png')
  }
]
function getHoroscopeData(){
  for(var i=0;i<horoscopeData.length;i++){
    const value={consName:horoscopeData[i].name,type:'today',key:'98432cbe1bf6ca696eb2ace9293a55e4'}
    horoscope_list(value).then(res=>{
      //console.log(res)
      if(res.error_code==0){
        return settleHoroscopeData(res)
      }else{
        return horoscopeData=[];
      }
    })
  }
  
  
}
function settleHoroscopeData(res){
  for(var i=0;i<horoscopeData.length;i++){
    if(horoscopeData[i].name==res.name){
      horoscopeData[i].summary=res.summary;
      horoscopeData[i].QFriend=res.QFriend;
      horoscopeData[i].color=res.color;
      horoscopeData[i].number=res.number;
      horoscopeData[i].indexObj["综合指数"]=res.all;
      horoscopeData[i].indexObj["健康指数"]=res.health;
      horoscopeData[i].indexObj["爱情指数"]=res.love;
      horoscopeData[i].indexObj["财运指数"]=res.money;
      horoscopeData[i].indexObj["工作指数"]=res.work;
    }
  }
  //console.log(horoscopeData)
  return horoscopeData;
  
}

//老黄历
function getLaoHuangLi(date){
  const value={date:date,key:ChinaCalendarKey};
  return {
    "id": "1657",
    "yangli": date,
    "yinli": "甲午(马)年八月十八",
    "wuxing": "井泉水 建执位",
    "chongsha": "冲兔(己卯)煞东",
    "baiji": "乙不栽植千株不长 酉不宴客醉坐颠狂",
    "jishen": "官日 六仪 益後 月德合 除神 玉堂 鸣犬",
    "yi": "祭祀 出行 扫舍 馀事勿取 祭祀 出行 扫舍 馀事勿取 祭祀 出行 扫舍 馀事勿取",
    "xiongshen": "月建 小时 土府 月刑 厌对 招摇 五离",
    "ji": "诸事不宜"
  }
    //console.log(value)
    /*horoscope_list(value).then(res=>{
      console.log(res)
      if(res.error_code==0){
        return res
      }else{
        return {};
      }
  })*/
}

//天气月报
//获取天气
function getWeather() {
  let city = '';
  return {
    "city": "北京",
    "realtime": {
        "temperature": "24",
        "humidity": "82",
        "info": "阴",
        "wid": "02",
        "direct": "西北风",
        "power": "3级",
        "aqi": "80"
    },
    "future": [
        {
            "date": "2019-02-22",
            "temperature": "21/27℃",
            "weather": "小雨转多云",
            "wid": {
                "day": "07",
                "night": "01"
            },
            "direct": "北风转西北风"
        },
        {
            "date": "2019-02-23",
            "temperature": "22/21℃",
            "weather": "多云转阴",
            "wid": {
                "day": "01",
                "night": "02"
            },
            "direct": "北风转东北风"
        },
        {
            "date": "2019-02-24",
            "temperature": "26/22℃",
            "weather": "多云",
            "wid": {
                "day": "01",
                "night": "01"
            },
            "direct": "东北风转北风"
        },
        {
            "date": "2019-02-25",
            "temperature": "25/22℃",
            "weather": "小雨转多云",
            "wid": {
                "day": "07",
                "night": "01"
            },
            "direct": "东北风"
        },
        {
            "date": "2019-02-26",
            "temperature": "25/21℃",
            "weather": "多云转小雨",
            "wid": {
                "day": "01",
                "night": "07"
            },
            "direct": "东北风"
        }
    ]
  }
  /*getCityLocation()
  .then(res => {
      city = res.address;
      //console.log('获取当前位置', res.address);
      fetchfu(`http://apis.juhe.cn/simpleWeather/query?city=${city.substr(0, city.length - 1)}&key=${weatherKey}`).then((res) => {
          console.log('天气预报')
          console.log(res.result)
          if (res.error_code == 0) {
              
          } else {
              
          }
      })
  })
  .catch(err => {
      //logWarn('获取失败' + err);
  });*/
}

//获取城市定位信息
function getCityLocation() {
  return new Promise((resolve, reject) => {
    fetchfu(`https://api.map.baidu.com/location/ip?ip=&ak=${baiduAK}&coor=bd09ll`)
      .then((res) => {
          //console.log(res)
          if (res.status == 0) {
              resolve(res.content)
          } else {
              reject(res.status);
          }
      })
      .catch((error) => {
          reject(error.status);
      })
  });
};
function fetchfu(url) {
  return new Promise((resolve, reject) => {
      fetch(url)
      .then((response) => {
          return response.json();
      })
      .then((responseData) => {
        //console.log(responseData)
          resolve(responseData);
      })
      .catch((error) => {
          reject(error);
      })
  })
}
module.exports={
  getHoroscopeData,
  horoscopeData,
  getLaoHuangLi,
  getWeather
}