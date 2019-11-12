/*
 * @Author: your name
 * @Date: 2019-09-19 15:48:38
 * @LastEditTime: 2019-10-24 18:04:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\OctInnReactNative\src\router\index.js
 */
import React, { Component } from 'react';
import { Easing, Animated,Text,StyleSheet,DeviceEventEmitter  } from "react-native";
import {  } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator,createMaterialTopTabNavigator  } from 'react-navigation-tabs';
import {headerHeight,headerPaddingTop,routeActiveTintColor,routeInactiveTintColor} from '../assets/css/globalCss';


//路由文件
import AddDayPage from '../pages/AddDayPage/html';
import CalendarPage from '../pages/CalendarPage/html';
import MemorialDayPage from '../pages/MemorialDayPage/html';
import MinePage from '../pages/MinePage/html';
import RemindPage from '../pages/RemindPage/html';
import LoginPage from '../pages/LoginPage/html';
import CalendarEvent from '../pages/CalendarEvent/html';
//路由组件
import Tab from '../components/tabbar';

//底部tabbar的图标
const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let iconName;
    if (routeName === '日历') {
        iconName = '\ue670';
    } else if (routeName === '纪念日') {
        iconName = '\ue65f';
    }else if (routeName === '新增日子') {
        iconName = '';
        //iconName = '\ue624';
    }else if (routeName === '提醒') {
        iconName = '\ue639';
    }else {
        iconName = '\ue60b';
    }
    return <Text style={[styles.iconStyle,{color:tintColor}]}>{iconName}</Text>;
};

//底部tab的标题样式
const tabTitleStyle={
    headerStyle: {
        height: headerHeight,
        paddingTop: headerPaddingTop,
    },
    headerTintColor: '#666',
    headerTitleStyle:{
        fontSize:16,
        width:'100%',
        textAlign:"center",
        fontWeight: 'normal',
        marginLeft: 0,
    }
}

//底部tabbar
const TabNavigator = createMaterialTopTabNavigator(
    {
        /**/日历: createStackNavigator(
            {
                CalendarPage: {
                    screen: CalendarPage,
                    navigationOptions: {
                        header: null,
                    },
                },
            }
        ),
        纪念日: createStackNavigator(
            {
                MemorialDayPage: {
                    screen: MemorialDayPage,
                    navigationOptions: {
                        header: null,
                    },
                }
            }
        ),
        新增日子: createStackNavigator(
            {
                AddDayPage: {
                    screen: AddDayPage,
                    navigationOptions: {
                        header: null,
                    },
                }
            }
        ),
        提醒: createStackNavigator(
            {
                RemindPage: {
                    screen: RemindPage,
                    navigationOptions: {
                        header: null,
                    },
                }
            }
        ),
        我的: createStackNavigator(
            {
                MinePage: {
                    screen: MinePage,
                    navigationOptions: {
                        header: null,
                    },
                }
            }
        ),
    },
    {
        defaultNavigationOptions: ({ navigation }) => (
            {
                tabBarIcon: ({ focused, tintColor }) =>getTabBarIcon(navigation, focused, tintColor),
            }
        ),
        tabBarPosition:'bottom',
        tabBarComponent:Tab,
        swipeEnabled:false,
        tabBarOptions: {
            showIcon:true,
            activeTintColor: routeActiveTintColor,
            inactiveTintColor: routeInactiveTintColor,
            style: {
                backgroundColor: '#ffffff',
                borderTopColor: "#eeeeee"
            },
            iconStyle:{
                height:18,
                justifyContent:"center",
                alignItems:"center"
            },
            labelStyle: {
                fontSize: 12,
            },
            tabStyle: {//选项卡的样式对象
                paddingBottom:0,
                paddingTop:5,
            },
            indicatorStyle:{//选项卡指示器的样式对象（选项卡底部的行）
                backgroundColor: 'transparent',
                height:0
            }
        },
    }
);

//创建全局导航器createStackNavigator
export const router = createStackNavigator(
    {
        bottomTabNavigator: {
            screen: TabNavigator,
            navigationOptions: {
                header: null,
            },
        },
        LoginPage:LoginPage,
        AddDayPage:AddDayPage,
        CalendarEvent:CalendarEvent,
    },
    {
        initialRouteName: "bottomTabNavigator",
        mode: 'modal',
        headerMode:'screen',
        defaultNavigationOptions: {
            header: null,
            headerStyle: {
                height: headerHeight,
                paddingTop: headerPaddingTop
            },
            headerTitleStyle: {
                fontWeight: 'normal',
                fontSize:16
            },
            headerTintColor: '#666',
        },
    }
)

const styles = StyleSheet.create({
    iconStyle:{
        fontFamily: "iconfont",
        fontSize: 23,
    }
})