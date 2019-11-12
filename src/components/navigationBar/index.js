import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import {styles} from './style';
import {headerHeight,headerPaddingTop,routeActiveTintColor,routeInactiveTintColor} from '../../assets/css/globalCss';
export default class NavigationBar extends Component{
    static defaultProps={
        backgroundColor:'#fff',
        headerRightTextColor:"#009285",
        isHeaderLeftImg:false,
        headerLeftText:'取消',
        headerRightText:'保存',
        headerTitle:'添加新日子',
        optionStyle:{}
    }
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
    }
    render() {
        const {
            backgroundColor,
            headerRightTextColor,
            isHeaderLeftImg,
            headerLeftText,
            headerRightText,
            headerTitle,
            navigation,
            optionStyle
        }=this.props;
        return (
            <View style={[styles.container,{backgroundColor:backgroundColor},optionStyle]}>
                <TouchableHighlight
                    style={styles.NavigationBarItem}
                    underlayColor='transparent'
                    onPress={()=>navigation.goBack()}
                >   
                    <View>
                        {
                            isHeaderLeftImg?
                            <Text style={[styles.NavigationBarItem,styles.iconFont,{textAlign:"left",fontSize:24,color:'#fff'}]}>{'\ue74a'}</Text>
                            :<Text style={[styles.NavigationBarItemText,{textAlign:"left"}]}>{headerLeftText}</Text>
                        }
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={[styles.NavigationBarItem,{flex:1}]}
                    underlayColor='transparent'
                >
                    <Text style={[styles.NavigationBarItemText,{textAlign:"center",fontSize:16}]}>{headerTitle}</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.NavigationBarItem}
                    underlayColor='transparent'
                    onPress={()=>this.props.headerRigthPress()}
                >
                    <Text style={[styles.NavigationBarItemText,{textAlign:"right",color:headerRightTextColor}]}>{headerRightText}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}


