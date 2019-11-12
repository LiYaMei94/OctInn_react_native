import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

import {styles} from './style';
export default  class MinePage extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
    }
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.mineTop}>
              <TouchableHighlight
                style={styles.headerImg}
              >
                <Image  style={styles.userImg} source={require('../../assets/images/header.jpeg')}></Image>
              </TouchableHighlight>
              <Text style={{fontSize:20,flex:1,textAlign:"right"}}>登录/注册</Text>
            </View>
            <View style={styles.mineContent}>
              <View style={styles.mineLine}>
                <Text style={styles.lineText}>我的积分</Text>
                <Text style={[styles.iconFont,styles.rightArrow]}>{'\ue74b'}</Text>
              </View>
              <View style={styles.mineLine}>
                <Text style={styles.lineText}>我的签名</Text>
                <Text style={[styles.iconFont,styles.rightArrow]}>{'\ue74b'}</Text>
              </View>
              <View style={styles.mineLine}>
                <Text style={styles.lineText}>我的任务</Text>
                <Text style={[styles.iconFont,styles.rightArrow]}>{'\ue74b'}</Text>
              </View>
              <View style={styles.mineLine}>
                <Text style={styles.lineText}>我的贺卡</Text>
                <Text style={[styles.iconFont,styles.rightArrow]}>{'\ue74b'}</Text>
              </View>
            </View>
        </View>
        );
    }
}
