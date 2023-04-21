import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',  // 去掉路径中的 # 号
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    // 登录
    {
      path:'/login',
      name:'login',
      component:() => import('@/view/Login.vue')
    },
    // 主页
    {
      path:'/home',
      meta: {
        title:'主页'
      },
      component:() => import('@/view/Home.vue'),
      redirect:'/index',
      children:[
        // 首页
        {
          path:'/index',
          meta: {
            title:'首页'
          },
          component:() => import('@/view/Welcome.vue')
        },
        // 用户管理
        {
          path:'/user/list',
          meta: {
            title:'用户管理'
          },
          component:() => import('@/view/user/Index.vue')
        },
        // 用户详情
        {
          path:'/user/detail',
          meta: {
            title:'用户详情'
          },
          component:() => import('@/view/user/Detail.vue')
        },
        {
          path:'/order/list',
          meta: {
            title:'订单详情'
          },
          component:() => import('@/view/order/Index.vue')
        },
        // 课程管理
        {
          path:'/course/list',
          meta: {
            title:'课程管理'
          },
          component:() => import('@/view/course/Index.vue')
        },
        // 新增课程
        {
          path:'/course/add',
          meta: {
            title:'新增课程'
          },
          component:() => import('@/view/course/Add.vue')
        },
        // 编辑课程 
        {
          path:'/course/update',
          meta: {
            title:'编辑课程'
          },
          component:() => import('@/view/course/Add.vue')
        },
      ]
    }
  ]
})

// 路由导航守卫主要用来拦截请求信息
// 挂载路由导航守卫，to表示将要访问的路径，from表示从哪里来，next是下一个要做的操作
router.beforeEach((to, from, next) => {
  // 放行登录页面
  if(to.path === '/login') {
    return next()
  }
  // 获取token
  let tokenStr = sessionStorage.getItem('token')
  // 获取存储token的开始时间
  const tokenStartTime = sessionStorage.getItem('tokenStartTime')
  // 当前时间
  let date = new Date().getTime()
  // 定义 24小时候 过期
  const timeOver =  24 * 60 * 60 * 1000
  // 如果大于说明过期了
  if(date - tokenStartTime > timeOver) {
    tokenStr = null
  }

  if(!tokenStr) {
    alert('登录状态过期,请重新登录')
    return next('/login')
  } else {
    next()
  }
  return next()
})

export default router