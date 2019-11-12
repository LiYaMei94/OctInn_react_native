import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {headerHeight,headerPaddingTop,headerRightMarginRight,themeColor,ScreenHeight} from '../../assets/css/globalCss';
export const styles = StyleSheet.create({
    container: {
        height:headerHeight,
        paddingTop:headerPaddingTop,
        borderBottomWidth:1,
        borderBottomColor:'#F7F7F7',
        marginBottom:10,
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:15,
        paddingRight:15
    },
    headerOperationButText:{
        width:70,
        alignItems:"center"
    },
    NavigationBarItemText:{
        width:'100%',
        fontSize:16
        
    },
    iconFont:{
        fontFamily:'iconfont'
    }
 });