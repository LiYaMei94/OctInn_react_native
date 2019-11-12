import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
const data =[0,1,2,3,4];
export default class EventItem  extends Component{
    static defaultProps={
        
    }
    render() {
        const {item,index}=this.props;
        return (
            <View style={[styles.DayItem,{borderBottomWidth:index!=data.length-1?1:0}]} key={index}>
                <View style={styles.dayItemLeft}>
                    <Text style={{fontSize:20}} ellipsizeMode='tail' numberOfLines={1}>周末</Text>
                    <View style={styles.dayDate}>
                        <Text style={[styles.text,{fontSize:14,}]}>2019-09-29</Text>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text style={[styles.text,{fontSize:12,marginRight:5}]}>乙亥年九月初一</Text>
                            <Text style={[styles.text,{fontSize:12}]}>星期日</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.dayItemRight}>
                    <Text style={styles.text}>还有</Text>
                    <Text style={{fontSize:24,marginRight:3,marginLeft:3}}>9</Text>
                    <Text style={styles.text}>天</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    DayItem:{
        borderBottomColor:"#F7F7F7",
        borderBottomWidth:1,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:10,
        paddingTop:10,
        backgroundColor:'#fff',
        flexDirection:"row",
        alignItems:"center"
    },
    dayItemLeft:{
        flex:2,
        
    },
    dayDate:{
        
    },
    dayItemRight:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"center"
    },
    text:{
        color:'#999'
    }
});
