<template>
     <div class="classify">
        <!-- 分类 -->
        <van-nav-bar title="分类">
            <i slot="left" class="iconfont icon-arrowLeft-fill" @click="leftBack()"></i>
        </van-nav-bar>
        <!-- 搜索 -->
        <div class="search">
            <form action="/">
                <van-search v-model="value" placeholder="搜索" @search="onSearch">
                    <span slot="left-icon" class="iconfont icon-sousuo"></span>
                </van-search>
            </form>
        </div>
        <!-- 滚动导航栏 -->
        <van-tabs>
            <van-tab v-for="(item, index) in cagegory" :key="index" :title="item.name" background="#21272e">
            </van-tab>
        </van-tabs>
        <div class="cut"></div>
        <!-- 图书列表组件 -->
        <BookList :bookLists="bookList1" :title="title1"/>
        <BookList :bookLists="bookList2" :title="title2"/>
     </div>
</template>
  
<script>
    import BookList from '@/components/BookList'
    export default {
      name: '',
      components: { BookList },
      data () {
         return {
            value:"",
            cagegory:[
                { 
                    name:"文学" 
                },
                { 
                    name:"职场" 
                },
                { 
                    name:"技能" 
                },
                { 
                    name:"艺术" 
                },
                { 
                    name:"科学" 
                },
                { 
                    name:"科幻" 
                },

            ],
            bookList1:[
                {
                    bookName:"Vue之旅",
                    userName:"DESU",
                    bookPic:require("@/assets/img/courseurl.jpg")
                },
                {
                    bookName:"Vue之旅",
                    userName:"DESU",
                    bookPic:require("@/assets/img/courseurl.jpg")
                },
                {
                    bookName:"Vue之旅",
                    userName:"DESU",
                    bookPic:require("@/assets/img/courseurl.jpg")
                },
            ],
            bookList2:[
                {
                    bookName:"Vue之旅",
                    userName:"DESU",
                    bookPic:require("@/assets/img/courseurl.jpg")
                },
                {
                    bookName:"Vue之旅",
                    userName:"DESU",
                    bookPic:require("@/assets/img/courseurl.jpg")
                },
                {
                    bookName:"Vue之旅",
                    userName:"DESU",
                    bookPic:require("@/assets/img/courseurl.jpg")
                },
            ],
            title1:'新上架',
            title2:'热门'
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
        leftBack(){
            this.$router.go(-1)
        },
        onSearch(){},

      }
    }
</script>
  
<style lang="less">
.classify {
  .van-nav-bar {
    background-color: #21272e;
  }
  .van-nav-bar__content {
    height: 121px;
    .van-nav-bar__title {
      font-family: PingFang-SC-Bold;
      font-size: 44px;
      color: #ffffff;
    }
    .icon-arrowLeft-fill {
      font-size: 34px;
      color: #fff;
    }
    .van-nav-bar__left {
      padding-left: 48px;
    }
  }
  .search {
    .van-search {
        margin-top: 15px;
        background-color: #21272e;
    }
    .van-search__content {
        width: 544px;
        height: 96px;
        background-color: #2d353d;
        border-radius: 48px;
    }
    .van-field__control {
        color: #fff;
        font-size: 32px;
        line-height: 79px;
        // 设置对象中的第一行文本的缩进
        text-indent: 20px;
    }
    .icon-sousuo {
        font-size: 32px;
        color: #9da3b4;
    }
    .van-field__left-icon {
        display: flex;
        align-items: center;
    }
  }   
  .van-tabs__nav {
    background-color: #21272e !important;
    border-bottom: 2px solid #2d353d;

    margin-left: 29px;
    .van-tab__text {
        color: #fff !important;
    }
    .van-tab {
        width: 130px;
    }
  } 
  .cut {
    width: 750px;
    height: 2px;
    background-color: #2d353d;
    position: absolute;
    top: 354px;
    left: 0;
    z-index: 999;
  }
}

</style>