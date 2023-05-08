<template>
     <div class="tansuo">
        <van-nav-bar fixed title="探索">
            <template #right>
                <i class="iconfont icon-icon-1" @click="hrf()" :class="flag===true?'active':'noActive'"></i>
                <i class="iconfont icon-icon-2" :class="flag===true?'noActive':'active'"></i>                
            </template>
        </van-nav-bar>
        <div class="BooksList" v-if="isShow">
            <div class="ListItem" v-for="(item,index) in booklist" :key="index" @click="details(item,index)">
                <van-image lazy-load :src="item.img"></van-image>
                <p class="bookName">{{item.name}}</p>
            </div>
        </div>
        <!-- 书籍详情页面 -->
        <div class="Booksitem" v-else>
            <van-empty class="custom-image" :image="bookpic">
                <template #default>
                    <p class="bookName">{{ bookName }}</p>
                    <p class="athors">{{ authorName }}</p>
                </template>
            </van-empty>
            <div class="dianzan">
                <div class="perPic">
                    <van-image lazy-load round fit="cover" v-for="(item,index) in profilePic" :key="index" :src="item.img"></van-image>
                </div>
                <p class="ydNum">
                    <span class="Num">457</span>人已阅读
                </p>
            </div>
            <div class="recom">
                <div class="wp">
                    <van-image round :src="require('@/assets/img/avator.jpg')"></van-image>
                    <div class="recomAuthor">
                        <p class="name">DESU</p>
                        <p class="rec">推荐</p>
                    </div>
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
            booklist:[
                {
                    img: require('@/assets/img/courseurl.jpg'),
                    name: "Vue之旅1",
                    author: "DESU"
                },
                {
                    img: require('@/assets/img/courseurl.jpg'),
                    name: "Vue之旅2",
                    author: "DESU"
                },
                {
                    img: require('@/assets/img/courseurl.jpg'),
                    name: "Vue之旅3",
                    author: "DESU"
                },
                {
                    img: require('@/assets/img/courseurl.jpg'),
                    name: "Vue之旅4",
                    author: "DESU"
                },
            ],
            profilePic: [
                {
                img: require('@/assets/img/toux1.png')
                },
                {
                img: require('@/assets/img/toux2.png')
                },
                {
                img: require('@/assets/img/toux3.png')
                },
                {
                img: require('@/assets/img/toux4.png')
                }
            ],
            flag: true,  // 控制顶部书架还是书籍详情按钮
            isShow: true,  // 点击进入书籍详情
            bookpic:"",
            bookName:"",
            authorName:"",
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
        hrf () {
            this.flag = true
            this.isShow = true
        },
        details(item){
            this.isShow = false
            console.log(item);
            this.bookpic = item.img;
            this.bookName = item.name;
            this.authorName = item.author;
            this.flag = false
        },
      }
    }
</script>
  
<style lang="less">
.tansuo {
    .van-nav-bar {
        height: 121px;
        background-color: #21272e !important;
    }
    .van-nav-bar__title {
        font-size: 44px;
        color: #ffffff;
    }
    .van-nav-bar__content {
        height: 121px;
        display: flex;
        align-content: center;
        background-color: #21272e;
    }
    .active {
        color: #ffffff !important;
    }
    .noActive {
        color: #71768c !important;
    }
    .icon-icon-1 {
        font-size: 32px;
        color: #fff;
    }
    .icon-icon-2 {
        font-size: 32px;
        color: #71768c;
        margin-left: 24px;
    }
    // 图书列表页面
    .BooksList {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 121px 80px 4.11rem;
        .ListItem {
            margin-top: 81px;
        }
        .van-image {
            width: 268px;
            height: 400px;
            border-radius: 24px;
            overflow: hidden;
        }
        .bookName {
            font-size: 28px;
            color: #ffffff;
            text-align: center;
            line-height: 0;
        }
    }
    .Booksitem {
        margin: 121px 80px 4.11rem;
        .van-empty {
            margin: 58px 82px;
            border-bottom: 2px solid #2e3640;
        }
        .dianzan {
            display: flex;
            flex-direction: column;
        }
        .van-empty__image {
            width: 390px;
            height: 580px;
            border-radius: 36px;
        }
        .van-empty__bottom {
            text-align: center;
            margin-top: 0;
            .bookName {
                font-size: 44px;
                color: #ffffff;
            }
            .athors {
                font-family: PingFang-SC-Medium;
                font-size: 36px;
                color: #656a7b;
                line-height: 0px;
            }
        }
        .perPic {
            text-align: center;
        }
        .ydNum {
            font-size: 24px;
            color: #a2a8ba;
            text-align: center;
        }
        .van-image--round {
            width: 68px;
            height: 68px;
        }
        .recom {
            width: 238px;
            height: 84px;
            background-color: #15191d;
            display: flex;
            align-items: center;
            flex-direction: row;
            border-radius: 40px 0 0 40px;
            box-shadow: 20px 10px 40px 0px #22282d;
            position: absolute;
            right: 0;
            .wp {
                display: flex;
                margin-left: 8px;
            }
            .recomAuthor {
                margin-left: 9px;
                .name {
                    font-size: 24px;
                    color: #ffffff;
                    line-height: 0px;
                }
                .rec {
                    font-family: PingFang-SC-Medium;
                    font-size: 22px;
                    color: #707483;
                    line-height: 10px;
                    margin-top: 4px;
                }
            }
        }
    }
}
</style>