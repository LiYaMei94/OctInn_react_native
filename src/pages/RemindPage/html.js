import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  View
} from 'react-native';

export default class RemindPage extends Component{
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
            <Text>提醒</Text>
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
