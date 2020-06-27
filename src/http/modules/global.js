/**
 * 全局常亮,方法封装模块
 * 通过原型挂载到vue属性
 * 通过this.global调用
 */
//后台管理系统服务器地址
export const baseUrl='http://localhost:4005'
//备用2
export const baseUrl2='http://localhost:5005'

export default{
    baseUrl,baseUrl2
}
