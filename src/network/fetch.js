import {
    Alert,
} from 'react-native';
//这里定义接口请求的域名
const BASE_URL =  '';

const getData = (url,option) => {
    let  newoption={};
    //结合Promise来使用，可以异步处理，无需再写cb；并且可以结合ES6,的then链式调用，使用方便
    url=BASE_URL+url;
    newoption={
        ...option,
        headers:{
            'Accept': 'application/json', 
            'Content-Type': 'application/json',
        }
    }
    
    //console.warn(newoption)
    return new Promise((resolve,reject) => {
        fetch(url,newoption)
        .then((response) => response.json())//数据解析的方式，json解析
        .then((responseJson) => {
            var code = responseJson.error_code;//返回直接映射完的数据，可以直接使用
            //console.warn(responseJson)
            resolve(responseJson)
        })
        .catch((error) => {
            reject(error);
        });
    });
}

module.exports = getData;



