<template>
    <div class="login">
        <!-- login card -->
        <el-card class="login_card">
            <el-image class="logo_image" :src="login_url" fit="cover"></el-image>
            <p class="login_title">登 录</p>
            <p class="login_desc">欢迎登录知否课堂后台管理系统</p>
            <el-form ref="ruleForm" :model="form" :rules="rules">
                <el-form-item prop="username">
                    <el-input
                      placeholder="请输入管理员账号"
                      v-model="form.username"
                      prefix-icon="el-icon-user"
                    />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                      type="password"
                      placeholder="请输入管理员密码"
                      v-model="form.password"
                      prefix-icon="el-icon-lock"
                    />
                </el-form-item>
                <el-form-item>
                    <el-button
                        :loading = "loginLoading"
                        style="background: #5b89fe; color: white;"
                        @click="submitForm('ruleForm')"
                    >登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <!-- 外部logo展示 -->
        <div>
            <el-image 
                class="wechat_logo" 
                :src="wechat_img" 
                fit="cover"
            ></el-image>
            <el-image
                class="offical_img"
                :src="offical_img"
                fit="cover"
            ></el-image>
            <el-image
                class="home_logo"
                :src="home_img"
                fit="cover"
            ></el-image>
            <el-image
                class="juejin_img"
                :src="juejin_img"
                fit="cover"
            ></el-image>
        </div>
        <!-- footer -->
        <p class="footer">Copyright © ZhiFou All Rights Reserved</p>
    </div>
</template>
  
<script>
    export default {
      name: '',
      components: {},
      data () {
         return {
            login_url:require("@/assets/img/logo.png"),
            wechat_img: require("@/assets/img/wechat.png"),
            home_img: require("@/assets/img/home.png"),
            juejin_img: require("@/assets/img/juejin.jpg"),
            offical_img: require("@/assets/img/offical.jpg"),
            form:{
                username:"",
                password:"",
            },
            rules:{
                username:[
                    {required:true, message:'请输入管理员账号',trigger:"blur"},
                ],
                password:[
                    {required:true, message:'请输入管理员密码',trigger:"blur"},
                ]
            },
            loginLoading:false,
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
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                 if(valid) {
                    // 校验通过
                    sessionStorage.setItem("user",JSON.stringify(this.form.username))
                    // Token是服务端生成的一串字符串,以作客户端进行请求的一个令牌
                    sessionStorage.setItem("token",this.form.password)
                    // 记录登录时间
                    let date1 = new Date().getTime()
                    sessionStorage.setItem("tokenStartTime",date1)
                    /*this.loginLoading = true,
                    this.$axios.post('/auth/login',this.form).then((res) => {
                        console.log(res.data);
                        if(res.data.success) {
                            sessionStorage.setItem("user",JSON.stringify(res.data.data.user))
                            sessionStorage.setItem("token",res.data.token)
                            this.$router.push("/home")
                        } else {
                            this.$message.error(res.data.msg)
                            this.loginLoading = false
                        }
                    })
                    .catch((err) =>{
                        this.$message.error('服务器连接失败，请稍后重试...')
                        this.loginLoading = false
                    }) */
                    if(sessionStorage.token){
                        this.$router.push("/home")
                    } else {
                        alert('密码不对')
                    }
                } else {
                    return console.log('用户名或密码不合格');
                } 
                // this.$router.push("/home")
            })
        }
      }
    }
</script>
  
<style scoped>
.login {
    width: 100%;
    height: 100%;
    background-image: url("../assets/img/background.jpg");
    position: absolute;
    left: 0;
    top: 0;
    background-size: 100% 100%;
}
.login_card{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 20%;
    min-width: 300px;
    height: 500px;
    min-height: 500px;
    border-radius: 10px;
    text-align: center;
}
.logo_image{
    width: 50px;
    height: 50px;
    margin-top: 40px;
}
.login_title{
    font-size: 25px;
    font-weight:bold;
}
.login_desc{
    /* 字符间距 */
    letter-spacing: 2px;
    color: #999a9a;
}
.el-button {
  width: 100%;
}
/* 外部logo展示 */
.wechat_logo{
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 100px;
    right: 20px;
}
.home_logo {
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 40px;
  right: 20px;
}
.juejin_img,
.offical_img {
  width: 180px;
  height: 200px;
  border-radius: 10px;
  position: fixed;
  right: 80px;
  bottom: 20px;
  display: none;
}
.wechat_logo:hover,
.home_logo:hover {
    border-radius: 50%;
    box-shadow: 0 3px 15px 3px rgba(237, 229, 229, 0.5) ;
}
.wechat_logo:hover + .offical_img {
    display: block;
}
.home_logo:hover + .juejin_img {
    display: block;
}
/* 底部footer */
.footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  text-align: center;
  color: rgb(183, 181, 181);
}
.footer:hover {
  color: white;
}
</style>