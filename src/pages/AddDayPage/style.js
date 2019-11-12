import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {headerRightMarginRight,themeColor,ScreenHeight,ScreenWidth} from '../../assets/css/globalCss';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F5F5F5',
        //paddingTop:15,
        position:"relative"
    },
    Calendar:{
        backgroundColor:'#fff',
        width:ScreenWidth-30,
        height:450,
        marginRight:"auto",
        marginLeft:"auto",
        position:"relative",
        alignItems:"center",
        borderRadius:12,
        paddingRight:20,
        paddingLeft:16
    },
    headerRightButtonBox:{
        marginRight:headerRightMarginRight,
        width:50,
        justifyContent:"center",
        alignItems:'flex-end',
    },
    headerRightButton:{
        fontSize:18,
        color:'#009285'
    },
    item_container:{
        paddingLeft:20,
        paddingRight:20,
        backgroundColor:'#fff',
        marginBottom:15
    },
    item_Line:{
        flexDirection:"row",
        width:"100%",
        paddingTop:7,
        paddingBottom:7,
        borderBottomColor:'#eee',
    },
    item_Line_key:{
        flex:1,
        fontSize:14,
        textAlignVertical:"center",
        textAlign:"left"
    },
    item_Line_value:{
        flex:1,
        alignItems:"flex-end",
        justifyContent:"center"
    },
    item_Line_value_text:{
        color:'#B1B1B1',
        fontSize:14,
    },
    calendarContainer:{
        width:'100%',
        height:ScreenHeight,
        backgroundColor:"rgba(0,0,0,0.4)",
        position:"absolute",
        top:0,
        left:0,
        right:0,
        paddingTop:80
        
    }
 });