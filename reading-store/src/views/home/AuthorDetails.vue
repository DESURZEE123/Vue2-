<template>
     <div class="personMain">
        <van-nav-bar title="我的">
            <template #left>
                <i class="iconfont icon-arrowLeft-fill" @click="onClickLeft"></i>
            </template>
        </van-nav-bar>
        <div class="userInfo">
            <van-image width="3.2rem" height="3.2rem" round :src='require("@/assets/img/avator.jpg")'></van-image>
            <div class="info">
                <div class="userName">
                    <span class="name">DESU</span>
                    <span class="address">中国 · 南京</span>
                </div>
                <div class="fenge"></div>
                <button class="guanzhu">
                    + 关注
                </button>
                <button class="share">
                    <i class="iconfont icon-fenxiang"></i>
                    分享
                </button>
            </div>
        </div>
        <van-row class="fan" type="flex" justify="center">
            <van-col span="6">
                <span>1287</span>
                <span class="fanItem">关注</span>
            </van-col>
            <van-col span="6" class="middle">
                <span>666</span>
                <span class="fanItem">粉丝</span>
            </van-col>
            <van-col span="6">
                <span>1234</span>
                <span class="fanItem">喜欢</span>
            </van-col>
        </van-row>
        <van-cell title="代表作" value="总共三本书"></van-cell>
        <BookItem :bookInfo="bookInfo"/>
     </div>
</template>
  
<script>
    import BookItem from '@/views/home/BookItem'
    export default {
      name: '',
      components: { BookItem },
      data () {
         return {
            bookInfo: [
                {
                    img: require("@/assets/img/courseurl.jpg"),
                    bookName: "鱼王",
                    value: 2.5,
                    desc: "全书由十三个内容相对独立的“叙事短篇小说”组成，全部围绕着人与自然的关系...",
                    yuedu: "366"
                },
                {
                    img: require("@/assets/img/courseurl.jpg"),
                    bookName: "鱼王",
                    value: 2.5,
                    desc: "全书由十三个内容相对独立的“叙事短篇小说”组成，全部围绕着人与自然的关系...",
                    yuedu: "366"
                },
                {
                    img: require("@/assets/img/courseurl.jpg"),
                    bookName: "鱼王",
                    value: 2.5,
                    desc: "全书由十三个内容相对独立的“叙事短篇小说”组成，全部围绕着人与自然的关系...",
                    yuedu: "366"
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
      methods: {
        onClickLeft() {
            this.$router.go(-1)
        }
      }
    }
</script>
  
<style lang="less">
.personMain {
    .van-nav-bar { 
        background-color: #21272e;
    .van-nav-bar__content {
        height: 121px !important;
        .van-nav-bar__title{
            color: #fff;
            font-size: 0.59rem;
        }
        .icon-arrowLeft-fill {
            font-size: 34px;
            color: #fff;
        }
    }
    }
    .userInfo {
        display: flex;
        flex-direction: row;
        padding: 0.29rem 0.67rem 0 0.55rem;
        background-color: #21272e;
        position: relative;
        .info {
            .userName {
                display: flex;
                flex-direction: column;
                font-size: 0.59rem;
                color: #fff;
                margin: 0.43rem 0 0 0.45rem;
                .address {
                    font-size: 0.37rem;
                    color: #b5b7c5;
                }
            }
            .fenge {
                width: 5.07rem;
                height: 0.05rem;
                border: solid 0.01rem #2a2c33;
                background-color: #2a2c33;
                position: absolute;
                bottom: 1.17rem;
                right: 0.67rem;
            }
            .share,
            .guanzhu {
                position: absolute;
                width: 180px;
                height: 64px;
                border-radius: 8px;
                border: solid 2px #545c66;
                font-size: 26px;
                bottom: 0;
            }
            .share {
                background-color: #21272e;
                color: #9497ab;

                right: 251px;
            }
            .guanzhu {
                background-color: #478ce0;
                color: #fff;
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
        color: #ffffff;
        justify-content: space-between;
        .van-col--6 {
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 0.48rem;
            .fanItem {
                font-size: 0.32rem;
                color: #75808d;
            }
        }
        .middle {
            border-right: 0.03rem solid #363c45;
            border-left: 0.03rem solid #363c45;
            margin: 0.3rem 0;
        }
    }
    .van-cell {
        padding: 0 49px;
        background-color: #21272e;
        height: 121px; 
        .van-cell__title {
            font-family: PingFang-SC-Bold;
            font-size: 36px;
            color: #ffffff;
            line-height: 121px;
        }
        .van-cell__value {
            font-family: PingFang-SC-Medium;
            font-size: 24px;
            letter-spacing: 1px;
            color: #478ce0;
            line-height: 121px;
        }
    }
}
</style>