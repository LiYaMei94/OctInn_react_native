import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar 
} from 'react-native';

export default class StatusBarScreen  extends Component{
    static defaultProps={
        barStyle:'light-content',//状态栏字体颜色
        hidden:false,//是否隐藏状态栏
    }
    render() {
        const {barStyle,hidden}=this.props;
        return <StatusBar
                    animated={true}
                    hidden={hidden}
                    androidtranslucent={true}
                    barStyle={barStyle}
                />;
    }
}

const styles = StyleSheet.create({
   
});
