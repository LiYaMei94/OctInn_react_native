import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {styles} from './style';
import DayItem from '../../components/dayItem/index';
import {memorialDay} from './data';

const year=['2018','2019'];
export default class MemorialDayPage extends Component{
    constructor(props){
        super(props);
        this.state={
          MemorialDayRightHeight:[]
        }
    }
    componentDidMount(){
    }
    render() {
      
        return (
          <ImageBackground style={{width:'100%',height:'100%'}} source={require('../../assets/images/MemorialDayBG7.jpg')}>
            <ScrollView style={styles.DayItemContainer} showsVerticalScrollIndicator={false} >
              {
                year.map((item,index)=>{
                  return <DayItem year={item} key={index} memorialDay={memorialDay}></DayItem>
                })
              }
            </ScrollView>
          </ImageBackground>
        );
    }
}


