<template>
     <div class="set">
        <!-- 设置 -->
        <van-nav-bar title="设置">
            <i slot="left" class="iconfont icon-arrowLeft-fill" @click="back"></i>
        </van-nav-bar>
        <!-- 列表 -->
        <van-cell-group>
            <van-cell title="查看账号">
                <i slot="right-icon" class="iconfont icon-youjiantou01"></i>
            </van-cell>
            <van-cell title="个人资料">
                <i slot="right-icon" class="iconfont icon-youjiantou01"></i>
            </van-cell>
            <van-cell title="消息提醒">
                <i slot="right-icon">
                    <van-switch class="switchBtn" v-model="checked" active-color="#fb6894" inactive-color="#dcdee0"></van-switch>
                </i>
            </van-cell>
            <van-cell title="清理缓存">
                <p class="huancun">128M</p>
                <i slot="right-icon" class="iconfont icon-youjiantou01"></i>
            </van-cell>
            <van-cell title="帮助中心">
                <i slot="right-icon" class="iconfont icon-youjiantou01"></i>
            </van-cell>
            <van-cell title="关于我们">
                <i slot="right-icon" class="iconfont icon-youjiantou01"></i>
            </van-cell>
        </van-cell-group>
        <!-- 退出登录 -->
        <van-button type="primary" class="exit">退出登录</van-button>
        <div class="back"></div>
     </div>
</template>
  
<script>
    export default {
      name: '',
      components: {},
      data () {
         return {
            checked: true
        }
       },
      computed: {},
      watch: {},
      // created: 在模板渲染成html 页面之前调用，通常初始化某些属性值，然后再渲染成视图
      created () {},
      // 在模板渲染成 html 页面之后调用，通常是初始化页面完成后，再对 html 的 dom 节点进行一些需要的操作
      mounted () {},
      // 页面调用方法
      methods: {
        back() {
            this.$router.go(-1)
        }
      }
    }
</script>
  
<style lang="less">
.set {
    .van-nav-bar {
        background-color: #21272e;
    }
    .van-nav-bar__content {
        height: 1.74rem;
        .van-nav-bar__left {
            padding-left: 0.45rem;
            .icon-arrowLeft-fill {
                font-size: 20px;
                color: #fff;
            }
        }
        .van-nav-bar__title {
            font-size: 24px;
            color: #ffffff;
        }
    }
    .van-cell-group {
        background-color: #21272e;
        .van-cell {
            width: 9.52rem;
            height: 2rem;
            align-items: center;
            padding-left: 0;
            margin-left: 0.5rem;
            background-color: #21272e;
            border-bottom: 2px solid #333c47;
            .van-cell__title {
                font-size: 0.5rem;
                color: #dcdeea;
            }
            .icon-youjiantou01 {
                font-size: 0.37rem;
                color: #ffffff;
            }
            .switchBtn {
                width: 1.5rem;
                height: 0.7rem;
            }
            .huancun {
                font-size: 0.38rem;
                color: #dcdeea;
                margin-right: 15px;
            }
        }
    }
    .exit {
        width: 10rem;
        height: 2rem;
        background-color: #2e363f;
        font-size: 0.7rem;
        color: #dcdeea;
        border: 0;
        position: absolute;
        bottom: 0.5rem;
        left: 0;
    }
    .back {
        width: 4rem;
        height: 0.2rem;
        background-color: #71768c;
        position: fixed;
        bottom: 0.2rem;
        left: 3rem;
        border-radius:20px
    }
}
</style>