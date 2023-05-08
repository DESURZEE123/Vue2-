<template>
        <!-- 新发布 -->
        <div class="newly">
            <van-cell title="新发布" is-link value="查看全部" ></van-cell>
            <div class="newlyItems">
               <div class="newlyItem" @click="bookDesc()">
                  <van-image class="newPic" :src='require("@/assets/img/courseurl.jpg")' />
                  <div class="info">
                     <span class="newDesc">Vue之旅进阶文学小白冒险冲冲冲</span>
                     <span class="newAuther">DESU</span>
                  </div>
               </div>
               <div class="newlyItem">
                  <van-image class="newPic" :src='require("@/assets/img/courseurl.jpg")' />
                  <div class="info">
                     <span class="newDesc">Vue之旅</span>
                     <span class="newAuther">DESU</span>
                  </div>
               </div>
               <div class="newlyItem">
                  <van-image class="newPic" :src='require("@/assets/img/courseurl.jpg")' />
                  <div class="info">
                     <span class="newDesc">Vue之旅</span>
                     <span class="newAuther">DESU</span>
                  </div>
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
        }
       },
      computed: {},
      watch: {},
      // created: 在模板渲染成html 页面之前调用，通常初始化某些属性值，然后再渲染成视图
      created () {},
      // 在模板渲染成 html 页面之后调用，通常是初始化页面完成后，再对 html 的 dom 节点进行一些需要的操作
      mounted () {
         
      },
      // 页面调用方法
      methods: {
         bookDesc() {
            this.$router.push('/bookdetails')
         }
      }
    }
</script>
  
<style scoped lang="less">
   .newly {
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
      .newlyItems {
         display: flex;
         justify-content: space-between;
         align-content: center;
         // flex-wrap 指定flex元素多行显示
         flex-wrap: wrap;
         padding-right: 48px;
         margin-left: 48px;
         border-bottom: solid 4px #393d45;
         .newlyItem {
            width: 192px;
            height: 452px;
            overflow: hidden;
            .newPic {
               width: 192px;
               height: 296px;
               border-radius: 16px;
               overflow: hidden;
            }
            .info {
               display: flex;
               flex-direction: column;
            }
            .newDesc {
               font-size: 28px;
               // letter-spacing: -1px;
               color: #fff;
               display: -webkit-box;
               text-overflow: ellipsis; /* 省略号显示 */
               // white-space: nowrap;  /* 不换行 */
               overflow: hidden;  /* 溢出隐藏 */
               // width: 200px;
               -webkit-line-clamp: 1;
               -webkit-box-orient: vertical;
               // word-wrap: normal;  /* 可自动换行 */
            }
            .newAuther {
               font-size: 24px;
               color: #5d637c;
               text-overflow: ellipsis; /* 省略号显示 */
               white-space: nowrap;  /* 不换行 */
               overflow: hidden;  /* 溢出隐藏 */
               word-wrap: normal;  /* 可自动换行 */
               margin-top: 14px;
            }
         }
      }
   }
</style>