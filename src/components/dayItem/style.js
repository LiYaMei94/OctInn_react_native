import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {ScreenWidth,headerHeight,headerPaddingTop} from '../../assets/css/globalCss';
export const styles = StyleSheet.create({
    MemorialDayItem:{
        paddingBottom:30
    },
    MemorialDay:{
        flexDirection:"row",
        //paddingBottom:15,
        //borderWidth:1
    },
    MemorialDayLeft:{
        width:40,
        height:'100%',
        alignItems:"center",
    },
    MemorialDayRight:{
        flex:1,
    },
    dot1:{
        width:20,
        height:20,
        borderRadius:50,
        backgroundColor:"rgba(169,130,65,0.4)",
        justifyContent:"center",
        alignItems:"center"
    },
    dot2:{
        width:11,
        height:11,
        backgroundColor:"rgba(169,130,65,0.6)"
    },
    line:{
        width:1,
        height:'100%',
        backgroundColor:"rgba(169,130,65,0.6)",
        //marginTop:20
    },
    MemorialDayDate:{
        flexDirection: 'row',
        alignItems:"center",
        marginBottom:10,
        marginTop:-3
    },
    MemorialDayContent:{
        width:'100%',
        backgroundColor:"rgba(255,255,255,0.6)",
        borderRadius:10,
        padding: 15,
        marginBottom:15
    },
    MemorialDayTitle:{
        fontSize:22
    },
    MemorialDaysMatter:{
        flexDirection: 'row',
        alignItems:"center"
    }
    
    
 });