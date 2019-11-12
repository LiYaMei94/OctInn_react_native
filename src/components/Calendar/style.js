import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {themeColor,ScreenWidth,ScreenHeight,headerHeight,headerPaddingTop} from '../../assets/css/globalCss';
export const styles = StyleSheet.create({
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
