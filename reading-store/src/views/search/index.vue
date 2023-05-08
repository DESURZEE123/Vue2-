<template>
     <div class="search-container">
        <form action="/">
            <van-search v-model="value" show-action placeholder="搜索" @search="onSearch" @cancel="onCancel" >
                <span slot="left-icon" class="iconfont icon-sousuo"></span>
            </van-search>
        </form>
        <SearchHistory/>
        <SearchHot/>
     </div>
</template>
  
<script>
    import SearchHot from "./components/search-hot.vue"
    import SearchHistory from "./components/search-history.vue"
    export default {
      name: '',
      components: { SearchHot, SearchHistory},
      data () {
         return {
            value:"",
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
        onSearch() {

        },
        onCancel() {
            this.$router.go(-1)
        },
      }
    }
</script>
  
<style lang="less">
.search-container {
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
    // 取消
    .van-search__action {
        color: #fff;
        background-color: #21272e;
    }
}
</style>