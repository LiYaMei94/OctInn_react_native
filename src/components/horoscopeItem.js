import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View
} from 'react-native';

import {ScreenWidth} from '../assets/css/globalCss';

const horoscopeIndexArr=["综合指数","健康指数","爱情指数","财运指数","工作指数"]
export default class HoroscopeItem extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
    }
    render() {
        const {item}=this.props;
        return (
            <View style={styles.horoscopeItem}>
                <View style={styles.horoscopeItemHeader}>
                    <Text style={styles.barItem}></Text>
                    <Text style={styles.headerName}>{item.name} {item.datetimeInterval}</Text>
                    <Text style={styles.barItem}></Text>
                </View>
                <View style={styles.horoscopeItemContent}>
                    <View style={{flexDirection:"row",flexWrap: 'wrap',}}>
                    {
                        horoscopeIndexArr.map((itemi,index)=>{
                        return(
                            <View style={styles.horoscopeItemContentLine} key={index}>
                            <Text>{itemi}：</Text>
                            {
                                item.indexObj[itemi]?
                                <View style={{flexDirection:"row"}}>
                                    <Text style={[styles.starIcon,styles.iconFont,{color:item.indexObj[itemi].split('%')[0]>20?"#FE4101":'#999'}]}>{'\ue620'}</Text>
                                    <Text style={[styles.starIcon,styles.iconFont,{color:item.indexObj[itemi].split('%')[0]>40?"#FE4101":'#999'}]}>{'\ue620'}</Text>
                                    <Text style={[styles.starIcon,styles.iconFont,{color:item.indexObj[itemi].split('%')[0]>60?"#FE4101":'#999'}]}>{'\ue620'}</Text>
                                    <Text style={[styles.starIcon,styles.iconFont,{color:item.indexObj[itemi].split('%')[0]>80?"#FE4101":'#999'}]}>{'\ue620'}</Text>
                                    <Text style={[styles.starIcon,styles.iconFont,{color:item.indexObj[itemi].split('%')[0]>100?"#FE4101":'#999'}]}>{'\ue620'}</Text>
                                </View>:null
                            }
                            </View>
                        )
                        })
                    }
                    </View>
                    <View  style={{flexDirection:"row",position:"relative"}}>
                    <View style={{flex:1,marginTop:10}}>
                        <View style={[styles.horoscopeItemContentLine,{width:'100%'}]} >
                        <Text>速配星座：</Text>
                        <Text style={[styles.headerName,{textAlign:"left"}]}>{item.QFriend}</Text>
                        </View>
                        <View style={[styles.horoscopeItemContentLine,{width:'100%'}]} >
                        <Text>幸运数字：</Text>
                        <Text style={[styles.headerName,{textAlign:"left"}]}>{item.number}</Text>
                        </View>
                        <View style={[styles.horoscopeItemContentLine,{width:'100%'}]} >
                        <Text>幸运颜色：</Text>
                        <Text style={[styles.headerName,{textAlign:"left"}]}>{item.color}</Text>
                        </View>
                    </View>
                    <Image source={item.img} style={{width:80,height:80,marginRight:10}} resizeMode='contain'></Image>
                    </View>
                </View>
                <View style={styles.horoscopeItemHeader}>
                    <Text style={styles.barItem}></Text>
                    <Text style={styles.headerName}>整体运势</Text>
                    <Text style={styles.barItem}></Text>
                </View>
                <View style={styles.horoscopeItemContent}>
                    <Text style={{lineHeight:20}}>{item.summary}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconFont:{
        fontFamily:"iconfont"
    },
    horoscopeItem:{
        width:ScreenWidth,
    },
    horoscopeItemHeader:{
        flexDirection:'row',
        alignItems:"center",
        paddingRight:20,
        paddingLeft:20,
        height:50
    },
    barItem:{
        flex:1,
        height:1,
        backgroundColor:'#EEEDEB'
    },
    headerName:{
        flex:1,
        fontSize:14,
        color:"#FEA36E",
        textAlignVertical:"center",
        textAlign:"center"
    },
    horoscopeItemContent:{
        paddingRight:20,
        paddingLeft:20,
    },
    horoscopeItemContentLine:{
        width:'50%',
        flexDirection:"row",
        alignItems:"center",
        marginBottom:5
        
    },
    starIcon:{
        fontSize:16,
    }
  
});
