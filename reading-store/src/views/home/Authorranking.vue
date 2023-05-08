<template>
     <div class="authors">
        <van-nav-bar title="作者" @click-left="onClickLeft" @click-right="onClickRight">
            <template #left>
                <i class="iconfont icon-arrowLeft-fill"></i>
            </template>
            <template #right>
                <i class="iconfont icon-shujia"></i>
            </template>
        </van-nav-bar>
        <!-- 作者排行区 -->
        <van-row class="paihang" align="center">
            <van-col>
                <div>
                    <van-image class="userPic2" round :src="require('@/assets/img/avator.jpg')"/>
                    <p class="userName2">DESU</p>
                    <p class="fans">5869粉丝</p>
                    <i class="iconfont icon-huangguan hg2"></i>
                    <span class="second num">2</span>
                </div>
            </van-col>
            <van-col class="num1">
                <div @click="authorDetails">
                    <!-- <van-image class="userPic2" width="3.2rem" height="3.2rem" fit="cover" round :src="require('@/assets/img/avator.jpg')"/> -->
                    <van-image class="userPic1" round :src="require('@/assets/img/avator.jpg')"/>
                    <p class="userName1">DESU</p>
                    <p class="fans">5869粉丝</p>
                    <i class="iconfont icon-huangguan hg1"></i>
                    <span class="first num">1</span>
                </div>
            </van-col>
            <van-col>
                <div>
                    <van-image class="userPic3" round :src="require('@/assets/img/avator.jpg')"/>
                    <p class="userName3">DESU</p>
                    <p class="fans">5869粉丝</p>
                    <i class="iconfont icon-huangguan hg3"></i>
                    <span class="third num">3</span>
                </div>
            </van-col>
        </van-row>
        <!-- 热门作者 -->
        <author :tit="title1" :authors="authors1"/>
        <!-- 新晋作者 -->
        <author :tit="title2" :authors="authors2"/>
        <span class="bottomline"></span>
    </div>
</template>
  
<script>
    import Author from './Author.vue'
    export default {
      name: '',
      components: { 
        author: Author
      },
      data () {
         return {
            title1:'热门作者',
            title2:'新晋作者',
            authors1: [
                {
                    img: require("@/assets/img/wangyuanyuan.png"),
                    name: '王源源',
                    isFollow: true,
                },
                {
                    img: require("@/assets/img/wangyuanyuan.png"),
                    name: '王源源',
                    isFollow: true,
                },
                {
                    img: require("@/assets/img/wangyuanyuan.png"),
                    name: '王源源',
                    isFollow: false,
                },
                {
                    img: require("@/assets/img/wangyuanyuan.png"),
                    name: '王源源',
                    isFollow: true,
                },
                {
                    img: require("@/assets/img/wangyuanyuan.png"),
                    name: '王源源',
                    isFollow: false,
                },
                {
                    img: require("@/assets/img/wangyuanyuan.png"),
                    name: '王源源',
                    isFollow: true,
                },
            ],
            authors2:[
                {
                    img: require("@/assets/img/wangyuanyuan.png"),
                    name: '王源源',
                    isFollow: true,
                },
                {
                    img: require("@/assets/img/wangyuanyuan.png"),
                    name: '王源源',
                    isFollow: true,
                },
                {
                    img: require("@/assets/img/wangyuanyuan.png"),
                    name: '王源源',
                    isFollow: false,
                },
                {
                    img: require("@/assets/img/wangyuanyuan.png"),
                    name: '王源源',
                    isFollow: true,
                },
                {
                    img: require("@/assets/img/wangyuanyuan.png"),
                    name: '王源源',
                    isFollow: false,
                },
                {
                    img: require("@/assets/img/wangyuanyuan.png"),
                    name: '王源源',
                    isFollow: true,
                },
            ],
        }
       },
      computed: {},
      watch: {},
      // created: 在模板渲染成html 页面之前调用，通常初始化某些属性值，然后再渲染成视图
      created () {},
      // 在模板渲染成 html 页面之后调用，通常是初始化页面完成后，再对 html 的 dom 节点进行一些需要的操作
      mounted () {
        console.log(this);
      },
      // 页面调用方法
      methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
        onClickRight() {
            this.$toast('按钮')
        },
        authorDetails() {
            this.$router.push('/authorDetails')
        }

      }
    }
</script>
  
<style scoped lang="less">
.authors {
    .van-nav-bar {
        background-color: #21272e;
        .van-nav-bar__content{
            height: 121px; 
            line-height: 121px;
        }
        .van-nav-bar__title {
            font-family: MicrosoftYaHei;
            font-size: 44px;
            color: #ffffff;
        }
        .icon-arrowLeft-fill,
        .icon-shujia {
            font-size: 34px;
            color: #fff;
        }
    }
    .paihang {
        height: 446px;
        margin-left: 67px;
        margin-top: 30px;
        padding-right: 67px;
        display: flex;
        align-items: center;
        border-bottom: 2px solid #343946;
        /* .van-col--8 {
            // margin: 0 48px;
        } */
        .num1 {
            width: 203px;
            margin: 0 48px;
        }
        .van-col {
            position: relative;
            .userPic2,
            .userPic3 {
                width: 160px;
                height: 160px;
                text-align: center;
            }
            .userPic1 {
                width: 200px;
                height: 200px;
                text-align: center;
                // contents 使 div 不产生任何框 ，因此不会渲染其背景 边框 和 内边距 ，但颜色 / 字体等继承的属性还是会对其子元素产生效果
                // ( 即在盒子上添加 display : contents , 当前盒子若设置了 background border padding width height 等属性会失效 )
                // display: contents;
            }
            .userName2,
            .userName3 {
                font-size: 36px;
                color: #f44380;
                text-align: center;
                margin: 0;
                margin-top: 21px; 
            }
            .userName1 {
                font-size: 40px;
                color: #fdaf01;
                text-align: center;
                margin: 0;
                margin-top: 21px;
            }
            .userName3 {
                color: #00a2ff;
            }
            .fans {
                font-size: 28px;
                color: #a2a8ba;
                text-align: center;
                margin: 0;
            }
            .icon-huangguan {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            }
            .hg1 {
                font-size: 100px;
                color: #fdaf01;
                top: -90px;
            }
            .hg2,
            .hg3 {
                font-size: 59px;
                top: -45px;
                color: #f44380;
            }
            .hg3 {
                color: #00a2ff;
            }
            .num {
                width: 34px;
                height: 34px;
                border: solid 3px #fff;
                border-radius: 50%;
                font-size: 24px;
                color: #ffffff;
                text-align: center;
                line-height: 34px;
                position: absolute;
                bottom: 96px;
                left: 50%;
                transform: translateX(-50%);
                z-index:999;
            }
            .first {
                border-radius: 50%;
                background-color: #fdaf01;
            }
            .second {
                background-color: #f44380;
            }
            .third {
                background-color: #00a2ff;
            }
        }
    }
    .bottomline {
        width: 270px;
        height: 8px;
        border-radius: 80px;
        background-color: #71768c;
        position: absolute;
        bottom: -160px;
        z-index: 9999;
        left: 240px;
        right: 240px;
    }
}
</style>