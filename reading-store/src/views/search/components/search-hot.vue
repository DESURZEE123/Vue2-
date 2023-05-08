<template>
        <!-- 热词搜索 -->
        <div class="hotSearch">
            <van-cell title="热门搜索"></van-cell>
            <div class="hotLabel">
               <van-button class="btnLabel" round>2023最流行语言排行榜</van-button>
               <van-button class="btnLabel" round>JavaScript红宝书</van-button>
               <van-button class="btnLabel" round>CSS</van-button>
               <van-button class="btnLabel" round>Vue</van-button>
               <van-button class="btnLabel" round>React</van-button>
            </div>
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
   .hotSearch {
      height: 338px;
      .van-cell {
         height: 141px;
         align-items: center;
         justify-content: center;
         background-color: #21272e;
         .van-cell__value {
            font-size: 24px;
            color: #a2a8ba;
         }
         .van-cell__title {
            font-size: 36px;
            color: #ffffff;
         }

      }
      .hotLabel {
         display: flex;
         align-items: center;
         flex-wrap: wrap;
         padding-right: 48px;
         padding-bottom: 47px;
         margin-left: 48px;
         border-bottom: solid 4px #33373f;
         .btnLabel {
            height: 54px;
            border-radius: 27px;
            border: solid 2px #6da4ff;
            background-color: #27212e;
            color: #6da4ff;
            font-size: 24px;
            margin: 25px 30px 0 0;
         }
         .van-button--normal {
            padding: 15px 25px !important;
         }
      }
   }
</style>