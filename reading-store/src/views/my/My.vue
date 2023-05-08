<template>
  <div class="My">
      <!-- 导航栏NavBar -->
      <van-nav-bar title="我的">
         <template #right>
            <van-icon name="setting-o" size="0.48rem" color="#fff" @click="goSet()" />
         </template>
      </van-nav-bar>
      <!-- 用户信息 -->
      <div class="userInfo">
         <van-image width="3.2rem" height="3.2rem" fit="cover" round :src='require("@/assets/img/userimg.jpg")'></van-image>
         <div class="info">
            <div class="userName">
               <span class="name">{{ userInfo.name }}</span>
               <span class="id">{{ userInfo.id }}</span>
            </div>     
            <div class="fenge"></div>
            <button class="share">
               <i class="iconfont icon-fenxiang"></i>
               分享
            </button>    
         </div>

      </div>
      <!-- 粉丝列表 -->
      <van-row class="fan" type="flex" justify="center">
         <van-col span="6">
            <span>1234</span>
            <span class="fanItem">关注</span>
         </van-col>
         <van-col span="6" class="middle">
            <span>2222</span>
            <span class="fanItem">粉丝</span>
         </van-col>
         <van-col span="6">
            <span>4321</span>
            <span class="fanItem">喜欢</span>
         </van-col>
      </van-row>
      <!-- 详细信息 -->
      <div class="listFun">
         <van-cell title="个人信息" is-link />
         <van-cell title="我的信息" default>
            <span slot="right-icon" class="num">6</span>
         </van-cell>
         <van-cell title="账户余额" is-link :value="moneyNum.toFixed(2)" @click="Balance()" />
         <van-cell title="我的评论" is-link />
      </div>
   </div>
</template>
  
<script>
    export default {
      name: '',
      components: {},
      data () {
         return {
            userInfo:{
               name:'DESU',
               id:18086731111,
            },
            moneyNum: 5671
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
         // 跳转路由
         goSet() {
            this.$router.push('/set')
         },
         Balance() {
            this.$router.push('/balance')
         }
      }
    }
</script>

<style lang="less">
.My {
   // 整体
   .van-nav-bar {
      background-color: #21272e;
   }
   // 导航栏
   .van-nav-bar__content {
      height: 1.6rem;
      background-color: #21272e;
      .van-nav-bar__title {
         color:#fff;
         font-size: 0.59rem;
      }
   }
   // 用户
   .userInfo {
      // 将这一行平均一分为三
      display: flex;
      flex-direction: row;
      padding: 0.29rem 0.67rem 0 0.55rem;
      background-color: #21272e;
      // 子绝父相
      position: relative;
      .info {
         .userName {
            display: flex;
            flex-direction: column;
            font-size: 0.59rem;
            color: #fff;
            margin: 0.43rem 0 0 0.45rem;
            .id {
               margin-top: 0.18rem;
               font-size: 0.37rem;
               color: #b5b7c5;
            }
         }
         .fenge {
            width: 5.07rem;
            height: 0.05rem;
            border: solid 0.01rem #2a2c33;
            background-color: #2a2c33;
            // 子绝父相
            position: absolute;
            bottom: 1.17rem;
            right: 0.67rem;
         }
         .share {
            width: 2.4rem;
            height: 0.85rem;
            background-color: #21272e;
            border-radius: 0.11rem;
            border: solid 0.03rem #545c66;
            font-size: 0.35rem;
            color: #9497ab;
            position: absolute;
            bottom: 0;
            right: 0.69rem;
         }
      }
   }
   .fan {
      margin: 0.69rem 0.64rem 0.5rem;
      height: 1.68rem;
      background-color: #2b323b;
      box-shadow: 0rem 0.4rem 0.67rem 0rem rgba(33, 39, 46, 0.08);
      border-radius: 0.21rem;
      color: #fff;
      // 项目之间的间隔相等
      justify-content: space-between;
      .van-col--6 {
         // 段落的最后一行
         text-align-last: center;
         display: flex;
         // 均匀分配元素
         flex: 1;
         // align-items 属性用来设置项目在交叉轴方向上的对齐方式
         // center 沿着交叉轴方向 居中对齐
         align-items: center;
         justify-content: center;
         // 纵向排列
         flex-direction: column;
         font-size: 0.48rem;
         .fanItem {
            font-size: 0.32rem;
            color: #75808d;
         }
      }
      // 
      .middle {
         border-right: 0.03rem solid #363c45;
         border-left: 0.03rem solid #363c45;
         margin: 0.3rem 0;
      }
   }
   .listFun {
      display: flex;
      align-items: center;
      justify-items: center;
      flex-direction: column;
      .van-cell {
         width: 9.33rem;
         height: 1.9rem;
         display: flex;
         justify-items: center;
         align-items: center;
         background-color: #21272e !important;
         font-size: 0.48rem;
         color: #dcdeea;
         padding: 0;
         border-bottom: 0.02667rem solid #ebebeb;
         .num {
            width: 0.48rem;
            height: 0.48rem;
            background-color: #fb6894;
            font-size: 0.32rem;
            color: #ebebeb;
            border-radius: 0.48rem;
            text-align: center;
            line-height: 0.48rem;
         }
      }
      .van-cell::after {
         border: 0 !important;
      }
   }
}
</style>