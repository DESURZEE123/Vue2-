// 用来封装请求接口
import {api1} from './api'

/* 
  // 封装get方法   
  export function get(url,params){
    return api.get(url,{
      params,
    })
  }   
*/

// 修改密码
export const updataPassword = (params) => api1({
    url:'/user/updataPassword',
    method:'get',
    params,
})

// course里 页码 
export const CoursePageList = (params) => api1({
    url:'course/pagelist',
    method:'get',
    params,
})

// course里 详情 
export const CourseDetail = (params) => api1({
    url:'course/detail',
    method:'get',
    params,
})

// course里 课程种类 
export const CourseCategory = () => api1({
    url:'course/getCategory',
    method:'get',
})

// course里 
export const Course = (url,data) => api1({
    url,
    method:'post',
    // 一般post请求，我们习惯使用data属性来传参
    data,
})

// user里 页码 
export const UserPageList = (params) => api1({
    url:'user/pagelist',
    method:'get',
    params,
})

// user里 详情 
export const UserDetail = (params) => api1({
    url:'user/detail',  // 请求地址
    method:'get',  // 请求方式
    params:params,
})

// order里 页码 
export const OrderPageList = (params) => api1({
    url:'order/pagelist',
    method:'get',
    params,
})

// order里 删除
export const DeleteOrder = (params) => api1({
    url:'order/delete',
    method:'delete',
    params,
})

// order里 上下架
export const ChangeOrderStatus = (params) => api1({
    url:'order/change',
    method:'post',
    params,
})



