<template>
     <div class="fenlei">
        <van-cell :title="title" is-link value="查看全部" to="authorranking"></van-cell>
        <div class="fenleiItems">
            <div class="fenleiitem" v-for="(item, index) in authorList" :key="index">
                <van-image round :src="item.img"></van-image>
                <span class="desc">{{item.name}}</span>
                <van-button type="default" class="addFollw" v-if="item.isFollow===false" @click="isFollow(index)">+关注</van-button>
                <van-button type="default" class="follow" v-else @click="isFollow(index)">已关注</van-button>
            </div>
        </div>
     </div>
</template>
  
<script>
    export default {
      name: '',
      components: {},
      data () {
         return {
            title: this.tit,
            authorList: this.authors
        }
       },
       props:['tit', "authors"],
      computed: {},
      watch: {},
      // created: 在模板渲染成html 页面之前调用，通常初始化某些属性值，然后再渲染成视图
      created () {},
      // 在模板渲染成 html 页面之后调用，通常是初始化页面完成后，再对 html 的 dom 节点进行一些需要的操作
      mounted () {},
      // 页面调用方法
      methods: {
        isFollow(index) {
            // console.log(this.authorList[index]);
            this.authorList[index].isFollow = !this.authorList[index].isFollow
        }
      }
    }
</script>
  
<style scoped lang="less">
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
         height: 341px;
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
            width: 121px;
            margin: 0 23px;
            .van-button {
                width: 120px;
                height: 44px;
                background-color: #000000;
                border-radius: 8px;
                border: solid 2px #545c66;
                font-size: 24px;
                color: #fff;
                text-align: center;
                line-height: 44px;
                padding: 0;
            }
            .van-image {
                width: 120px;
                height: 120px;
                overflow: hidden;
            }
            .follow {
                width: 120px;
                height: 44px;
                // linear-gradient: 渐变的颜色
                background-image: linear-gradient(#478ce0, #478ce0),
                    linear-gradient(#000000, #000000);
                background-blend-mode: normal, normal;
                border-radius: 8px;
            }
            .desc {
                display: block;
                font-size: 28px;
                color: #fff;
                text-align: center;
            }
         }
      }
   }

</style>