<template>
     <div class="shujia">
        <van-nav-bar class="comments" title="书架" fixed>
            <span slot="right" class="iconfont icon-shujia"></span>
        </van-nav-bar>
        <div class="list">
            <BookList :title="title" :bookLists="bookList"/>
            <BookList :title="title2" :bookLists="bookList2"/>
        </div>
     </div>
</template>
  
<script>
    import BookList from '../../components/BookList.vue';
    export default {
      name: '',
      components: { BookList },
      data () {
         return {
            title: "正在阅读",
            title2: "未读",
            bookList: [
                {
                bookName: "Vue",
                userName: "DESU",
                bookPic: require("@/assets/img/courseurl.jpg")
                },
                {
                bookName: "Vue",
                userName: "DESU",
                bookPic: require("@/assets/img/courseurl.jpg")
                },
                {
                bookName: "Vue",
                userName: "DESU",
                bookPic: require("@/assets/img/courseurl.jpg")
                },
            ],
            bookList2: [
                {
                bookName: "Vue",
                userName: "DESU",
                bookPic: require("@/assets/img/courseurl.jpg")
                },
                {
                bookName: "Vue",
                userName: "DESU",
                bookPic: require("@/assets/img/courseurl.jpg")
                },
                {
                bookName: "Vue",
                userName: "DESU",
                bookPic: require("@/assets/img/courseurl.jpg")
                },
                {
                bookName: "Vue",
                userName: "DESU",
                bookPic: require("@/assets/img/courseurl.jpg")
                },
                {
                bookName: "Vue",
                userName: "DESU",
                bookPic: require("@/assets/img/courseurl.jpg")
                },
                {
                bookName: "Vue",
                userName: "DESU",
                bookPic: require("@/assets/img/courseurl.jpg")
                },
            ]
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
  
<style lang="less">
.shujia {
  .list {
    margin: 121px 0 159px 0;
  }
  .van-nav-bar {
    background-color: #21272e;
  }
  .van-nav-bar__content {
    height: 121px;
    display: flex;
    align-items: center;
    background-color: #21272e;
    .van-nav-bar__title {
      font-family: MicrosoftYaHei;
      font-size: 45px;
      color: #ffffff;
    }
    .icon-shujia {
      font-size: 34px;
      color: #fff;
      padding-right: 48px;
    }
    .van-nav-bar__right {
      padding: 0;
    }
  }
}
</style>