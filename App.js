

import React, {Component} from 'react';
import {YellowBox, StyleSheet, StatusBar, View,DeviceEventEmitter } from 'react-native';

import { createAppContainer} from 'react-navigation';

//引入路由文件
import { router } from './src/router/index';
const initialRouteName = "bottomTabNavigator";
const AppContainer = createAppContainer(router);
export default class App extends React.Component {
  constructor(props){
    super(props);
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
    //DeviceEventEmitter.emit('updateCurrentRouteName', { currentRouteName: initialRouteName });
  }
  componentDidMount(){
    //DeviceEventEmitter.addListener('updateCurrentRouteName', ({ ...currentRouteName }) => {
      //console.log("MAIN ", currentRouteName) // Perform update
    //})
  }
  render() {
    return (
      <AppContainer  />
    );
  }
}

const styles = StyleSheet.create({
  
});
