// 对axios进行二次封装，将刚才下载好的axios导入进来
import axios from "axios"

// 利用axios对象的方法create，去创建一个axios实例
// requests 就是axios，只不过稍微配置一下

const api2 = axios.create({
    // 基础路径
    baseURL:'http://localhost:8080',  // 所有请求的公共地址部分
})

const api1 = axios.create({
    baseURL:'http://localhost:8080/8081'
})

// 请求拦截器，请求拦截，在请求拦截中可以补充请求相关的配置
// interceptors axios 的拦截器对象
api1.interceptors.request.use(config => {
    // config 请求的所有信息
    console.log(config);
      // 设置token
    let token = sessionStorage.getItem('token')
    if(token) {
        config.headers['token'] = token
    }
    // 将配置完成的config对象返回出去，如果不返回，请求不会进行
    return config
  },err => {
    // 请求发生错误时的相关处理 抛出错误
    // 响应失败的返回
    Promise.reject(err)
  }
)

// 响应拦截处理 响应拦截器，包含两个函数(一个是成功返回的函数，一个是失败的返回函数)
api1.interceptors.response.use(res => {
    // 一般在这里处理请求成功后的错误状态码，如500 404 403
    // res 是所有响应的信息
    console.log(res);
    return res.data
  },err => {
    // 服务器响应发生错误时的处理
    Promise.reject(err)
  })

// 最好一步 爆出出去实例导出
// 注意这里 暴露多个对象 不能加default
export {api1,api2}