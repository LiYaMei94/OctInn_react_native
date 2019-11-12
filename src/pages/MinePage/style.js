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
    mineTop:{
        backgroundColor:'#fff',
        width:'100%',
        paddingLeft:30,
        paddingRight:30,
        paddingTop:65,
        paddingBottom:15,
        marginBottom:15,
        flexDirection:"row",
        alignItems:"center"
    },
    headerImg:{
        width:75,
        height:75,
        backgroundColor:"#DBDBDB",
        borderRadius:12,
    },
    userImg:{
        width:'100%',
        height:'100%',
        borderRadius:12
    },
    mineContent:{
        backgroundColor:'#fff',
        width:'100%'
    },
    mineLine:{
        width:'100%',
        paddingLeft:20,
        paddingRight:20,
        borderBottomColor:'#DBDBDB',
        borderBottomWidth: 1,
        height:50,
        flexDirection:"row",
        alignItems:"center"
    },
    lineText:{
        flex:1,
    },
    rightArrow:{
        width:70,
        height:'100%',
        textAlign:"right",
        textAlignVertical:"center"
    },
    
    
    
 });