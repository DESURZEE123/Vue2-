<template>
     <div class="hot-sale">
        <van-cell title="热销榜" is-link value="查看全部"></van-cell>
        <div class="cards">
            <van-card>
                <template #thumb>
                    <van-image lazy-load :src="require('@/assets/img/courseurl.jpg')"/>
                </template>
                <template #title>
                    <div class="name">
                        <span class="tit">Vue</span>
                        <div class="more"><img src="@/assets/img/more.png" alt=""></div>
                    </div>
                    <p class="athor">作者：DESU</p>
                </template>
                <template #desc>
                    <p class="desc">DESU的vue冒险之vant移动端</p>
                </template>
            </van-card>
            <van-card>
                <template #thumb>
                    <van-image lazy-load :src="require('@/assets/img/courseurl.jpg')"/>
                </template>
                <template #title>
                    <div class="name">
                        <span class="tit">Vue</span>
                        <div class="more">
                            <img src="@/assets/img/more.png" alt="">
                        </div>
                    </div>
                    <p class="athor">作者：DESU</p>
                </template>
                <template #desc>
                    <p class="desc">DESU的vue冒险之vant移动端</p>
                </template>
            </van-card>
            <van-card>
                <template #thumb>
                    <van-image lazy-load :src="require('@/assets/img/courseurl.jpg')"/>
                </template>
                <template #title>
                    <div class="name">
                        <span class="tit">Vue</span>
                        <div class="more">
                            <img src="@/assets/img/more.png" alt="">
                        </div>
                    </div>
                    <p class="athor">作者：DESU</p>
                </template>
                <template #desc>
                    <p class="desc">DESU的vue冒险之vant移动端</p>
                </template>
            </van-card>
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
.hot-sale {
    height: 547px;
    margin-top: 0.18rem;
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
    .cards {
        widows: 10rem;
        // width: 10rem;
        position: relative;
        display: flex;
        flex-direction: row;
        display: -webkit-box;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        .van-card__header {
            width: 598px;
            height: 250px;
            background-color: #2b323b;
            box-shadow: 0px 30px 60px 0px rgba(17, 21, 26, 0.1);
            border-radius: 20px;
        }
        .van-card {
            margin-top: 0.21333rem;
            background-color: #21272e;
            .van-card__content {
                margin-left: 30px;
            }
            .van-image {
                width: 168px;
                height: 250px;
                background-color: #d8d8d8;
                border-radius: 16px;
                overflow: hidden;
                outline: 0;
                position: absolute;
                top: -32px;
                left: 32px;
                border: solid 1px #27212e;
            }
            .name {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: 28px 23px 0 0;
                .tit {
                    font-size: 36px;
                    color: #fff;
                }
            }
            .athor {
                width: 334px;
                font-size: 24px;
                color: #5d637c;
                border-bottom: solid 4px #969baf;
                padding-bottom: 23px;
                margin: 0 !important;
                padding-top: 34px;
            }
            .desc {
                font-size: 24px;
                line-height: 36px;
                color: #868dab;
                margin: 0 !important;
                padding-top: 14px;
                position: absolute;
            }
        }
    }
}

</style>