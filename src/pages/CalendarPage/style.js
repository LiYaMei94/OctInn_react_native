import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {ScreenWidth,headerHeight,headerPaddingTop} from '../../assets/css/globalCss';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
    },
    iconFont:{
        fontFamily:"iconfont"
    },
    Calendar:{
        backgroundColor:'#fff',
        alignItems:"center",
    },
    contentItem:{
        backgroundColor:'#fff',
        marginTop:15,
        paddingBottom:20,
        width:ScreenWidth,
        elevation:-1,
    },
    contentItemHeader:{
        borderBottomColor:'#E3E3E3',
        height:40,
        borderBottomWidth:1,
        width:'100%',
        textAlign:"center",
        textAlignVertical:"center",
        fontSize:16,
        color:'#272727'
    },
    //导航栏
    navigationBar:{
        width:'100%',
        backgroundColor:"#fff",
        height:headerHeight,
        paddingTop:headerPaddingTop,
        position:"absolute",
        top:0,
        left:0,
        right:0,
        zIndex:10,
        borderBottomWidth:1,
        borderBottomColor:'#F7F7F7',
        marginBottom:10,
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:15,
        paddingRight:15,
        elevation:3
    },
    navigationBarItem:{
        marginRight:15
    },
    Laohuangli:{
        paddingLeft:20,
        paddingRight:20,
        paddingTop:15,
        paddingBottom:15
    },
    contentItemLine:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:10
    },
    week:{
        fontSize:30,
        marginLeft:15
    },
    LaohuangliLogo:{
        width:25,
        height:25,
        borderRadius:50,
        textAlignVertical:"center",
        textAlign:"center",
        color:"#fff",
        fontSize:14
    },
    LaohuangliText:{
        flex:1,
        paddingLeft:10,
        textAlignVertical:"center"
    },
    todayWeather:{
        //paddingLeft:20,
        paddingRight:20,
        flexDirection:"row",
        alignItems:"center"
    },
    WeatherLogo:{
        fontSize:14,
        lineHeight:24
    },
    
    
 });