import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


export default new Router({
  mode: 'history',  // 去掉路径中的 # 号
  routes: [
    {
      path: "",
      redirect:'/my',
      component: () => import("@/views/my/My.vue")
    },
    // 底部栏
    {
      path:"",
      component: () => import("@/views/index.vue"),
      children:[
        {
          path:"/home",
          name:"home",
          component: () => import("@/views/home/Home.vue")
        },
        {
          path:"/explore",
          name:"explore",
          component: () => import("@/views/explore/Explore.vue")
        },
        {
          path:"/bookrack",
          name:"bookrack",
          component: () => import("@/views/bookrack/Bookrack.vue")
        },
        {
          path:"/my",
          name:"my",
          component: () => import("@/views/my/My.vue")
        },
      ]
    },
    // 搜索 search
    {
      path:"/search",
      name:"search",
      component: () => import("@/views/search/index.vue")
    },
    // Home中 分类 classify
    {
      path:"/classify",
      name:"classify",
      component: () => import("@/views/home/Classify.vue")
    },
    // Home中作者排行
    {
      path:"/authorranking",
      name:"authorranking",
      component: () => import("@/views/home/AuthorRanking.vue")
    },
    // Home中作者详情 authorDetails
    {
      path:"/authorDetails",
      name:"authorDetails",
      component: () => import("@/views/home/authorDetails.vue")
    },
    // My 的设置 set
    {
      path: "/set",
      name: "set",
      component: () => import("@/views/my/Set.vue")
    },
    // My 的余额 balance 
    {
      path: "/balance",
      name: "balance",
      component: () => import("@/views/my/Balance.vue")
    },
    // 书内容 bookArt
    {
      path: "/bookArt",
      name: "bookArt",
      component: () => import("@/components/BookArt.vue")
    },
    // home 书详情
    {
      path: "/bookdetails",
      name: "bookdetails",
      component: () => import("@/components/BookDetails.vue")
    },
    // home 购书
    {
      path: "/buybook",
      name: "buybook",
      component: () => import("@/components/BuyBook.vue")
    },
    // 评论
    {
      path: "/comment",
      name: "comment",
      component: () => import("@/components/Comment.vue")
    },
  ]
})
