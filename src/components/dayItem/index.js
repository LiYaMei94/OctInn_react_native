import React, { Component } from 'react';
import {
  Text,
  View,
  NativeModules,
  LayoutAnimation,
  UIManager
} from 'react-native';
import {styles} from './style';
import {unique} from '../../utils/util';

const spring = {
    duration: 400,
    update: {
        type: LayoutAnimation.Types.linear,
        springDamping: 0.5,
    },
};
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
export default class DayItem extends Component{
    constructor(props){
        super(props);
        this.state={
            MemorialDayRightHeight:[],
            dot2Size:11
        }
    }
    componentDidMount(){
        this.timer=setInterval(()=>{
            LayoutAnimation.configureNext(spring);
            if(this.state.dot2Size<11){
                this.state.dot2Size=this.state.dot2Size+2
            }else if(this.state.dot2Size>2){
                this.state.dot2Size=this.state.dot2Size-2
            }
            this.setState({
                dot2Size:this.state.dot2Size
            })
        },450)
    }
    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }
    render() {
        const {MemorialDayRightHeight,dot2Size}=this.state;
        const {memorialDay,year}=this.props;
        return (
            <View style={styles.MemorialDayItem}>
                <View style={styles.MemorialDayYear}>
                    <Text style={{fontSize:22,marginBottom:10}}>{year}年</Text>
                    {
                        memorialDay[year].map((item,index)=>{
                            return(
                                <View style={styles.MemorialDay} key={index}>
                                    <View style={styles.MemorialDayLeft}>
                                        <View style={styles.dot1}>
                                        <View style={[styles.dot1,styles.dot2,{width:dot2Size,height:dot2Size}]}></View>
                                        </View>
                                        <View style={[styles.line,{height:(MemorialDayRightHeight[index]?MemorialDayRightHeight[index]-20:135)}]}></View>
                                    </View>
                                    <View style={styles.MemorialDayRight}
                                        onLayout={(e)=>{
                                        NativeModules.UIManager.measure(e.target, (x, y, width, height, pageX, pageY)=>{
                                            this.state.MemorialDayRightHeight.push(Math.ceil(height))
                                            this.setState({
                                                MemorialDayRightHeight:unique(this.state.MemorialDayRightHeight)
                                            })
                                        })
                                        }}
                                    >
                                    <View style={styles.MemorialDayDate}>
                                        <Text style={{fontSize:20}}>{item.date.split('-')[1]}月{item.date.split('-')[2]}日</Text>
                                        <Text style={{fontSize:12,marginLeft:0}}>({item.lunarDate.substr(item.lunarDate.length-4)})</Text>
                                        <Text style={{fontSize:14,marginLeft:5}}> {item.week}</Text>
                                    </View>
                                    <View style={styles.MemorialDayContent}>
                                        <Text style={styles.MemorialDayTitle}>{item.name}</Text>
                                        <View style={styles.MemorialDaysMatter}>
                                            <Text>{item.daysMatter.logo}</Text>
                                            <Text style={{fontSize:24,color:'#A98241'}}>{item.daysMatter.num}</Text>
                                            <Text>天</Text>
                                        </View>
                                        <Text style={{color:'#999'}}>{item.desc}</Text>
                                    </View>
                                </View>
                                </View>
                            )
                        })
                    }
                  
                </View>
            </View>
        );
    }
}

