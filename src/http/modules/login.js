import axios from '../axios'
import { data } from 'autoprefixer'

/*门户登录*/
export const login=(data)=>{
  return axios({
    url: '/login',
    method: 'post',
    data
  })
}
