<template>
     <div class="home">
        <!-- 头部 -->
        <div class="header">
            <div class="header">
               <i class="iconfont icon-Leaderboard"></i>
               <i class="iconfont icon-shujia"></i>
            </div>
        </div>
        <!-- 搜索 -->
        <div class="search">
            <van-button round to="/search" class="searchBtn" text="搜索">
               <i slots="default" class="iconfont icon-sousuo">搜索</i>
            </van-button>
        </div>
        <!-- 分类排行 -->
        <div class="fenlei">
            <!-- is-link：箭头展示 -->
            <van-cell title="分类排行" is-link value="查看全部" to="/classify"></van-cell>
            <div class="fenleiItems">
               <div class="fenleiitem">
                  <van-image :src='require("@/assets/img/fenlei1.png")'></van-image>
                  <span class="desc">科幻</span>
               </div>
               <div class="fenleiitem">
                  <van-image :src='require("@/assets/img/fenlei2.png")'></van-image>
                  <span class="desc">生活</span>
               </div>
               <div class="fenleiitem">
                  <van-image :src='require("@/assets/img/fenlei3.png")'></van-image>
                  <span class="desc">露营</span>
               </div>
               <div class="fenleiitem">
                  <van-image :src='require("@/assets/img/fenlei4.png")'></van-image>
                  <span class="desc">职场</span>
               </div>
               <div class="fenleiitem">
                  <van-image :src='require("@/assets/img/fenlei1.png")'></van-image>
                  <span class="desc">科幻</span>
               </div>
            </div>
        </div>
        <!-- 作者排行 -->
        <div class="fenlei">
            <van-cell title="作者排行" is-link value="查看全部" to="authorranking"></van-cell>
            <div class="fenleiItems">
               <div class="fenleiitem">
                  <van-image fit="cover" :src='require("@/assets/img/avator.jpg")'></van-image>
                  <span class="desc">DESU</span>
               </div>
               <div class="fenleiitem">
                  <van-image :src='require("@/assets/img/zuozhe2.png")'></van-image>
                  <span class="desc">Wyy</span>
               </div>
               <div class="fenleiitem">
                  <van-image :src='require("@/assets/img/zuozhe3.png")'></van-image>
                  <span class="desc">RZEE</span>
               </div>
               <div class="fenleiitem">
                  <van-image :src='require("@/assets/img/zuozhe4.png")'></van-image>
                  <span class="desc">王小花</span>
               </div>
               <div class="fenleiitem">
                  <van-image fit="cover" :src='require("@/assets/img/avator.jpg")'></van-image>
                  <span class="desc">李小明</span>
               </div>
            </div>
        </div>
        <SearchHistory/>
        <SearchHot/>
        <BookBarSlide/>
     </div>
</template>
  
<script>
    import SearchHot from "../search/components/search-hot.vue"
    import SearchHistory from "../search/components/search-history.vue";
    import BookBarSlide from "../../components/BookBarSlide.vue";
    export default {
      name: '',
      components: { SearchHot,SearchHistory,BookBarSlide },
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
      methods: {
      }
    }
</script>
  
<style lang="less">
   .home {
      margin-bottom: 2rem;
   }
   .header {
      height: 121px;
      width: 690px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      padding: 0 30px;
      .icon-Leaderboard {
         font-size: 34px;
      }
      .icon-shujia {
         font-size: 34px;
      }
   }
   .search {
      display: flex;
      justify-content: center;
      align-content: center;
      .searchBtn {
         width: 650px;
         height: 96px;
         background-color: #2d353d;
         border: 0;
         .icon-sousuo {
            text-align: left;
            color: #9da3b4;
            font-size: 30px;
            // &是sass的语法，表示嵌套的上一级
            &::before {
               margin-right: 17px;
            }
         }
         .van-button__content {
            // flex-start：默认值，左对齐
            justify-content: flex-start;
         }
      }
   }
   .fenlei {
      .van-cell {
         height: 141px;
         // 与交叉轴的中点对齐;
         align-items: center;
         // 居中
         justify-content: center;
         background-color: #21272e;
         .van-cell__value {
            font-size: 26px;
            color: #a2a8ba;
         }
         .van-cell__title {
            font-size: 36px;
            color: #fff;
         }
      }
      .fenleiItems {
         width: 722px;
         height: 266px;
         display: flex;
         flex-direction: row;
         // 弹性伸缩盒子模型，用于移动设备自适应布局，实现横列的【流体布局】
         display: -webkit-box;   
         // 当文本长度超出之后  overflow-x: auto 属性自动产生横向滚动条
         overflow-x: auto;   
         -webkit-overflow-scrolling: touch;
         margin-left: 28px;
         box-sizing: border-box;
         border-bottom: solid 2px #2f343c;
         .fenleiitem {
            margin: 0 15px;
            .van-image {
               width: 160px;
               height: 160px;
               border-radius: 20px;
               overflow: hidden;
            }
            .desc {
               // 块级元素上下排列分布
               display: block;
               font-size: 28px;
               color: #fff;
            }
         }
      }
   }


</style>