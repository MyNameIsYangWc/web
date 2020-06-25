import axios from '../axios'
import { data } from 'autoprefixer'

/*用户管理门模块*/
//保存
export const save=(data)=>{
    return axios({
        url: '/user/save',
        method: 'post',
        data
    })
}
//删除
export const batchDelete=(data)=>{
    return axios ({
        url: '/user/delete',
        method: 'post',
        data
    })
}
