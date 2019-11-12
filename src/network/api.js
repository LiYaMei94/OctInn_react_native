import getData  from './fetch';
import { stringify } from 'qs';


//今日星座运势
export async function horoscope_list(params) {
	return getData(`http://web.juhe.cn:8080/constellation/getAll?${stringify(params)}`,{
        method: 'get'
    });
}
//今日老黄历
export async function laohuangli(params) {
	return getData(`http://v.juhe.cn/laohuangli/d?${stringify(params)}`,{
        method: 'get'
    });
}
