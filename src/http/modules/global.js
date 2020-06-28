/**
 * 全局常亮,方法封装模块
 * 通过原型挂载到vue属性
 * 通过this.global调用
 */
//后台管理系统服务器地址
export const baseUrl='http://49.232.0.86:5005'
//备用2
export const baseUrl2='http://localhost:4005'

export default{
    baseUrl,baseUrl2
}
