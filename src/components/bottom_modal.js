import React, { Component } from 'react';
import { Text, StyleSheet, TouchableHighlight, View, Dimensions, NativeModules, UIManager,Animated } from 'react-native';


export default class bottom_modal extends React.Component {
    static defaultProps = {
        picker_item_text: ['收藏','举报'],
        optionStyle:{
            zIndex: 25,
            elevation:12,
        },
        isVisible:false,
    }
    constructor(props) {
        super(props);
        this.state = {
            screen_height: Dimensions.get('window').height,
            screen_width: Dimensions.get('window').width,
            bottom_picker_heigth:new Animated.Value(0) 
        }
    }
    componentWillMount(){
        let Value=this.props.picker_item_text.length*50+60;
        Animated.timing(this.state.bottom_picker_heigth, {
            toValue:Value,
            duration: 2200
          }).start();
    }
    render() {
        const { screen_height,screen_width,bottom_picker_heigth } = this.state;
        const {picker_item_text,optionStyle,isVisible}=this.props;
        if(!isVisible){
            return null;
        }
        return (
            <View style={[styles.container,optionStyle, { height: screen_height }]}>
                <TouchableHighlight underlayColor='transparent' onPress={()=>this.props.closeBottomPicker(false)} style={[styles.bg,{width:screen_width}]}>
                    <Text></Text>
                </TouchableHighlight>
                <Animated.View style={[styles.bottom_picker,{height:bottom_picker_heigth}]}>
                    <View style={styles.picker_wrap}>
                    {
                            picker_item_text.map((item,index)=>{
                                return (
                                    <TouchableHighlight
                                        key={index}
                                        onPress={()=>this.props.setValueChange(false,index,item)}
                                        underlayColor='transparent'
                                        style={[styles.picker_item, { borderBottomColor:index!=picker_item_text.length-1?'#EFEFF1':'transparent', borderBottomWidth: index!=picker_item_text.length-1?1:0,
                                        borderTopLeftRadius:index==0?15:0,
                                        borderTopRightRadius:index==0?15:0,
                                        borderBottomLeftRadius:index==picker_item_text.length-1?15:0,
                                        borderBottomRightRadius:index==picker_item_text.length-1?15:0,}]}
                                    >
                                        <Text style={{ color: '#0E81FF', fontSize: 14 }}>{item}</Text>
                                    </TouchableHighlight>
                                )
                            })
                        }
                    </View>
                    <TouchableHighlight onPress={()=>this.props.closeBottomPicker(false)}  underlayColor='transparent' style={[styles.picker_item, { borderRadius: 15, marginTop: 10 }]}>
                        <Text style={{ color: '#0E81FF', fontSize: 14 }}>取消</Text>
                    </TouchableHighlight>
                </Animated.View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: "absolute",
        top: 0,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
    },
    bg:{
        height:'100%',
        position: "absolute",
        top: 0,
        backgroundColor:'#000',
        opacity:0.3,
    },
    bottom_picker: {
        position: "absolute",
        bottom: 10,
        left: 10,
        width: '100%',
    },
    picker_wrap: {
    },
    picker_item: {
        backgroundColor: 'white',
        width: '100%',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    }
});
