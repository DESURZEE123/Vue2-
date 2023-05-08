<template>
     <div class="bookItem">
        <van-card :title="item.bookName" v-for="(item, index) in bookDesc" :key="index">
            <!-- thumb：左侧图片 URL -->
            <template #thumb>
                <van-image :src="item.img"></van-image>
            </template>
            <!-- desc：书名 + 星星 -->
            <template #desc>
                <van-rate v-model="item.value" allow-half void-icon="star" void-color="#eee"/>
                <span class="pfennum">{{ item.value }}</span>      
            </template>
            <!-- tags：描述 -->
            <template #tags>
                <p class="bookDesc">{{item.desc}}</p>
            </template>
            <!-- price -->
            <template #price>
                <span class="readNum">{{item.yuedu}}人阅读</span>             
            </template>
        </van-card>
     </div>
</template>
  
<script>
    export default {
      name: '',
      components: {},
      data () {
         return {
            bookDesc: this.bookInfo
        }
       },
       props: ['bookInfo'],
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
.bookItem {
    .van-card {
        width: 700px;
        height: 309px;
        background-color: #21272e;
        padding: 0;
        margin-top: 45px;
        margin-left: 50px;
        border-bottom: 2px solid #2b323b;
        .van-image {
            width: 168px;
            height: 250px;
            // background-color: #fff;
            border-radius: 20px;
            outline: 0;
            border: 0;
            outline: 0;
            margin-top: 8px;
        }
        .van-card__title {
            font-size: 36px;
            line-height: 43px;
            color: #ffffff;
            margin-top: 10px;
            margin-bottom: 19px;
        }
        .pfennum {
            font-size: 40px;
            color: #ffce44;
            vertical-align: text-bottom;
            line-height: 52px;
            margin-left: 24px;
        }
        .bookDesc {
            width: 446px;
            font-size: 24px;
            line-height: 29px;
            color: #999fb0;
            margin: 22px 0;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            text-overflow: ellipsis;
            overflow: hidden;
            -webkit-box-orient: vertical;
        }
        .readNum {
            font-size: 24px;
            line-height: 43px;
            color: #478ce0;
        }
    }
}
</style>