import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  View
} from 'react-native';

export default class LoginPage extends Component{
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
            <Text>登录</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor:'white',
  },
  
});
