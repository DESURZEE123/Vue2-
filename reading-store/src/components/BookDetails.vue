<template>
     <div class="bookDetails">
        <van-nav-bar left-arrow>
            <span slot="left" class="iconfont icon-arrowLeft-fill" @click="back"></span>
        </van-nav-bar>
        <div class="bookInfo">
            <!-- 书籍信息 -->
            <van-card class="goods-card" disabled=true  v-for="(item, index) in bookDesc" :key="index">
                <!-- thumb：左侧图片 URL -->
                <template #title>
                    <p class="bookname">{{item.bookName}}</p>
                </template>
                <!-- thumb：左侧图片 URL -->
                <template #thumb>
                    <van-image :src="item.img"></van-image>
                </template>
                <!-- desc：书名-->
                <template #desc>
                    <p class="author">{{ item.author }}</p>
                    <span class="desc">{{ item.desc }}</span>      
                </template>
                <!-- tags：描述 -->
                <template #tags>
                    <van-rate v-model="item.value" size="20" allow-half void-icon="star" void-color="#eee"/>
                    <span class="gradeNum">{{item.value.toFixed(1)}}</span>
                </template>
            </van-card>
            <!-- 分享点赞加入书架 -->
            <van-cell class="func">
                <template #default>
                    <div class="options">
                        <div class="collect" @click="collect()">
                            <span class="iconfont icon-shoucang" :class="isShowIcon===true?'active-icon':''"></span>
                            <span class="iconAfter">收藏</span>
                        </div>
                        <van-overlay :show="show" @click="showbtn">
                            <div class="wrapper">
                                <div class="block">
                                    <van-image  :src="require('@/assets/img/courseurl.jpg')"></van-image>
                                    <p class="hint">
                                        已经将这本书{{isShowIcon===true?'加入到':'移除出'}}个人书架</p>
                                    <button round class="okbtn">好的</button>
                                </div>
                            </div>
                        </van-overlay>
                        <div class="share" @click="shareBtn()">
                            <span class="iconfont icon-fenxiang">分享</span>
                        </div>
                        <van-popup class="shareModel" v-model="showShare" closeable position="bottom" close-icon="close">
                            <van-image round :src="item.img" v-for="(item,index) in options" :key="index"></van-image>
                        </van-popup>
                        <div class="addBook">
                            <span class="iconfont icon-jiarushujia">加入书架</span>
                        </div>
                    </div>
                </template>
            </van-cell>
            <!-- 书籍描述 -->
            <van-cell class="description">
                <template #default>
                <p class="titDesc">详情</p>
                <p class="content">与三体文明的战争使人类第一次看到了宇宙黑暗的真相，地球文明像一个恐惧的孩子，熄灭了寻友的篝火，在暗夜中发抖。自以为历经沧桑，其实刚刚蹒跚学步；自以为悟出了生存竞争的秘密，其实还远没有竞争的资格。</p>
                </template>
            </van-cell>      
            <!-- 查看目录 -->
            <van-cell class="lookPage" title="查看目录">
                <template #right-icon>
                    <i class="iconfont icon-youjiantou01"></i>
                </template>
            </van-cell>
            <!-- 评论 -->
            <div class="remark">
                <van-cell class="comments" to="/comment">
                    <template #title>
                        <span class="plTit">评论</span>
                        <span class="plnum">
                            211<span>条评论</span>
                        </span>
                    </template>
                    <template #right-icon>
                        <i class="iconfont icon-pinglun"></i>
                    </template>
                </van-cell>
                <div class="userPL">
                    <div class="userSpeak">
                        <van-image lazy-load round :src='require("@/assets/img/userpicfei.png")' />
                        <div class="plContent">
                            <p class="userName">DESU</p>
                            <p class="contents">大刘塑造的女性都具有明显的圣母特质，但是本质上弱爆了。叶是文革的毒瘤，庄是定制禁脔，程最经典——站在圣母和傻逼的微笑曲线上。大刘塑造的男性都带有明显的缺陷但本质上极端人性化。一身痞气的小人物大史，最高情商让他活得最明白；罗辑的荒唐和不羁让他成了救世主，但也决定了他必不能善终；软弱怯懦固执的云天明，也并无理由因为慷慨和运气就得到爱啊。但我真心理解这样的人，这样的性格，这样的命运。</p>
                        </div>
                    </div>
                    <div class="operation">
                        <div class="tiem">2023-05-07 17:24</div>
                            <div class="dzpl">
                            <p class="iconfont icon-pinglunxihuan">134</p>
                            <p class="iconfont icon-pinglunfabiao">89</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="buy">
            <van-button class="shikan" round hairline type="info">试看</van-button>
            <van-button class="goumai" round hairline type="info" @click="buyGo()">购买</van-button>
        </div>
     </div>
</template>
  
<script>
    export default {
      name: '',
      components: {},
      data () {
         return {
            bookDesc:[
                {
                    img: require("@/assets/img/courseurl.jpg"),
                    bookName: "Vue之旅",
                    author:'DESU',
                    value: 5.0,
                    desc: "vue是一套用于动态构建用户界面的渐进式 JavaScript 框架 渐进式:vue可以自底向上逐层的应用 由一个个组件类似拼积木,逐层向上搭建,最后搭建出一个网页",
                },
            ],
            show: false,
            showShare: false,
            isShowIcon:false,
            options: [
                {
                    img: require('@/assets/img/share1.png')
                },
                {
                    img: require('@/assets/img/share2.png')
                },
                {
                    img: require('@/assets/img/share4.png')
                },
                {
                    img: require('@/assets/img/share3.png')
                }
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
        back() {
            this.$router.go(-1)
        },
        collect(){
            this.show = true;
            this.isShowIcon = !this.isShowIcon
        },
        buyGo() {
            this.$router.push('/buybook')
        },
        shareBtn (){
            this.showShare = true;
        },
        showbtn(){
            this.show = false
        }
      }
    }
</script>
  
<style scoped lang="less">

.bookDetails{
    .van-nav-bar {
        background-color: #21272e;
    }
    .van-nav-bar__content {
        height: 121px !important;
        position: relative;
        .icon-arrowLeft-fill{
            font-size: 34px;
            color: #fff;
        }
        .van-nav-bar__left {
            padding: 0 48px;
        }
    }
    .bookInfo {
        margin-bottom: 2.5rem;
        .van-card {
            background-color: #21272e;
            padding: 0 0 68px 0;
            margin: 0 0 0 48px;
            border-bottom: solid 4px #45485b;
            .van-card__header {
                height: 320px;
            }
            .van-card__thumb {
                width: 216px;
                height: 320px;
                overflow: hidden;
                border-radius: 20px;
                margin-right: 33px;
            }
            .van-card__content {
                .bookname {
                    font-size: 48px;
                    line-height: 48px;
                    color: #ffffff;
                    margin: 41px 0 0 0;  
                }
                .author {
                    line-height: 30px;
                    font-size: 30px;
                    color: #828d9a;
                    margin: 29px 0 0 0;
                }
                .desc {
                    width: 388px;
                    font-size: 26px;
                    line-height: 32px;
                    color: #868dab;
                    margin: 28px 0 0 0;
                    display: -webkit-box;
                    text-overflow: ellipsis; /*小数点显示*/
                    -webkit-line-clamp: 2;
                    overflow: hidden; /* 溢出隐藏 */
                    -webkit-box-orient: vertical;
                }
                .van-rate {
                    margin: 43px 0 0 0;
                }
                .gradeNum {
                    font-size: 40px;
                    color: #ffce44;
                    margin-left: 20px;
                }
            }
        }
    }
    .func {
        width: 704px;
        background-color: #21272e;
        padding: 0;
        overflow: hidden;
        margin-left: 46px;
        border-bottom: solid 4px #45485b;
        .options {
            height: 130px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .collect {
                .iconAfter {
                    font-size: 30px;
                    color: #ffffff;
                }
                .icon-shoucang {
                    &::before {
                        color: #71768c;
                        font-size: 40px;
                        vertical-align: bottom;
                        margin-right: 22px;
                    }
                }
            }
            .wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                background: rgba(0, 0, 0, 0);
            }
            .active-icon::before {
                color: #ee392f !important;
            }
            .block {
                width: 550px;
                height: 776px;
                background-color: #373a48;
                border-radius: 50px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .van-image {
                    width: 216px;
                    height: 320px;
                    border-radius: 20px;
                }
                .hint {
                    width: 354px;
                    font-size: 40px;
                    color: #ffffff;
                    text-align: center;
                }
                .okbtn {
                    width: 422px;
                    height: 94px;
                    background-color: #fb6894;
                    border-radius: 47px;
                    text-align: center;
                    line-height: 94px;
                    font-family: PingFang-SC-Medium;
                    font-size: 30px;
                    color: #ffffff;
                    border: none;
                }
            }

            // 分享
            .share {
                .icon-fenxiang {
                    font-size: 30px;
                    color: #ffffff;
                    &::before {
                        color: #71768c;
                        font-size: 38px;
                        vertical-align: bottom;
                        margin-right: 22px;
                    }
                }
            }
            .shareModel {
                width: 750px;
                height: 340px;
                display: flex;
                align-items: center;
                justify-content: space-around;
                background-color: #2d353f;
                .van-image {
                    width: 80px;
                    height: 80px;
                }
                .van-popup__close-icon {
                    color: #fff;
                    border-radius: 50%;
                    background-color: #0000;
                }
            }
            // 加入书架
            .addBook {
                margin-right: 64px;
                .icon-jiarushujia {
                    font-family: PingFang-SC-Medium;
                    font-size: 30px;
                    color: #ffffff;
                    &::before {
                        color: #71768c;
                        font-size: 40px;
                        vertical-align: bottom;
                        margin-right: 22px;
                    }
                }
            }

        }
    }
    .description {
        width: 704px;
        padding: 0 55px 92px 3px;
        margin-left: 46px;
        background-color: #21272e;
        border-bottom: solid 4px #45485b;
        .titDesc {
            font-family: PingFang-SC-Bold;
            font-size: 36px;
            color: #ffffff;
            margin: 54px 0 39px;
        }
        .content {
            font-family: PingFang-SC-Medium;
            font-size: 28px;
            line-height: 40px;
            color: #868dab;
            padding-left: 4px;
        }
    }
    .lookPage {
        width: 704px;
        height: 146px;
        display: flex;
        align-items: center;
        background-color: #21272e;
        border-bottom: solid 4px #45485b;
        margin-left: 46px;
        padding: 0 60px 0 3px;
        .van-cell__title {
            font-family: PingFang-SC-Bold;
            font-size: 36px;
            color: #ffffff;
        }
        .icon-youjiantou01 {
            font-size: 24px;
            color: #9295a9;
        }
    }
    .comments {
        width: 704px;
        height: 142px;
        display: flex;
        align-items: center;
        padding: 0 48px 0 0;
        background-color: #21272e;
        margin-left: 46px;
        .van-cell__title {
            font-size: 36px;
            color: #ffffff;
        }
        .icon-pinglun {
            font-size: 34px;
            color: #fff;
        }
        .plnum {
            font-size: 22px;
            color: #007aff;
            margin-left: 25px;
        }
    }
    .userPL {
        margin: 8px 0 57px 46px;
        .userSpeak {
            display: flex;
        }
        .van-image {
            width: 60px;
            height: 60px;
            margin-right: 25px;
        }
        .plContent {
            width: 553px;
            .userName {
                font-size: 28px;
                color: #ffffff;
                margin: 11px 0 0 0;
            }
            .contents {
                font-family: PingFang-SC-Medium;
                font-size: 24px;
                line-height: 36px;
                color: #868dab;
                margin: 33px 0 38px;
            }
        }
        .operation {
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-left: 90px;
            padding-right: 48px;
            padding-bottom: 45px;
            border-bottom: 2px solid #45485b;
            .tiem {
                font-size: 22px;
                color: #656a7b;
            }
            .dzpl {
                display: flex;
                font-size: 22px;
                color: #656a7b;
                .icon-pinglunxihuan {
                    margin-right: 32px;
                    &::before {
                        font-size: 20px;
                        color: #71768c;
                        margin-right: 14px;
                    }
                }
                .icon-pinglunfabiao {
                    &::before {
                        margin-right: 14px;
                    }
                }
            }
        }
    }
    .buy {
        width: 750px;
        height: 158px;
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #373a49;
        font-size: 28px;
        color: #ffffff;
        .shikan {
            width: 216px;
            height: 94px;
            margin-left: 48px;
            background-color: #9295a9;
        }
        .goumai {
            width: 406px;
            height: 94px;
            background-color: #fb6894;
            margin-right: 48px;
        }
    }

}
</style>