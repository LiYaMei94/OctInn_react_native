import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {headerRightMarginRight,themeColor,headerHeight} from '../../assets/css/globalCss';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F5F5F5',
        position:"relative"
    },
    headerRightButtonBox:{
        marginRight:headerRightMarginRight,
        width:50,
        justifyContent:"center",
        alignItems:'flex-end',
    },
    headerRightButton:{
        fontSize:18,
        color:'#fff'
    },
    top_container:{
        width:'100%',
        paddingTop:headerHeight+20,
        paddingBottom:40,
        alignItems:"center"
    },
    daysTitle:{
        color:"#fff",
        fontSize:20
    },
    DaysMatter:{
        width:'100%',
        justifyContent:"center",
        alignItems:"flex-start",
        flexDirection:"row",
        paddingTop:10,
        paddingBottom:15,
    },
    DaysMatterNum:{
        fontSize:70,
        fontWeight:"bold",
        color:"#fff"
    },
    DaysMatterText:{
        color:"#fff",
        fontSize:14,
        marginTop:13
    },
    currentDate:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:15
    },
    solarCalendar:{
        marginRight:10,
        fontSize:16,
        color:"#fff"
    },
    lunarCalendar:{
        fontSize:16,
        color:"#fff"
    },
    currentDateWeek:{
        color:"#fff",
        fontSize:18
    },
    //事件
    eventListContainer:{
        padding:10,
        paddingBottom:330
    },
    
 });