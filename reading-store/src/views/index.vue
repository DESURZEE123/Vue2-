<template>
     <div>
        <router-view></router-view>
        <van-tabbar class="van-tabbar-a" active-color="#FB6894" route>
            <!-- 主页 -->
            <van-tabbar-item replace to="/home">
                <van-icon size="1.08rem" name="wap-home-o"></van-icon>
            </van-tabbar-item>
            <!-- 探索 -->
            <van-tabbar-item replace to="/explore">
                <van-icon size="1.08rem" name="tv-o"></van-icon>
            </van-tabbar-item>
            <!-- 书架 -->
            <van-tabbar-item replace to="/bookrack">
                <van-icon size="1.08rem" name="orders-o"></van-icon>
            </van-tabbar-item>
            <!-- 我的 -->
            <van-tabbar-item replace to="/my">
                <van-icon size="1.08rem" name="contact"></van-icon>
            </van-tabbar-item>
            <!-- 下划线 -->
            <div class="homeind"></div>
        </van-tabbar>
     </div>
</template>
  
<script>
    export default {
      name: '',
      components: {},
      data () {
         return {
        }
       },
      computed: {},
      watch: {},
      // created: 在模板渲染成html 页面之前调用，通常初始化某些属性值，然后再渲染成视图
      created () {},
      // 在模板渲染成 html 页面之后调用，通常是初始化页面完成后，再对 html 的 dom 节点进行一些需要的操作
      mounted () {},
      // 页面调用方法
      methods: {}
    }
</script>
  
<style scoped lang="less">
.van-tabbar-a {
    height: 2.11rem !important;
    background-color: #2A313A;
    .van-tabbar-item--active {
        background-color: #2A313A;
    }
    // 底栏的一道横线
    .homeind {
        width: 270px;
        height: 8px;
        background-color: #71768c;
        border-radius: 30%;
        position: fixed;
        bottom: 0;
        left: 3.2rem;
        right: 3.2rem; 
        z-index: 999;
    }
}
</style>