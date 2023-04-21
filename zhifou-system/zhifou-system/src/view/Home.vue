<template>
     <div>
        <el-container class="home-container">
            <!-- header -->
            <!-- 头部信息主要用来展示管理员信息和操作 -->
            <el-header>
                <el-row>
                    <el-col :span="6">
                        <p class="system-name">知否课堂后台管理系统</p>
                    </el-col>
                    <el-col :offset="12" :span="6" style="min-width: 150px;">
                        <!-- el-dropdown下拉菜单 -->
                        <el-dropdown style="float: right; margin: 20px 10px;">
                            <span 
                                class="el-dropdown-link"
                                style="color:#fff; cursor: pointer;"
                            >
                                DESU &nbsp;&nbsp;<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item @click.native="editPasswordDialog = true">
                                修改密码
                            </el-dropdown-item>
                            <el-dropdown-item 
                                @click.native="logout()">
                                退出系统
                            </el-dropdown-item>
                        </el-dropdown-menu>
                        </el-dropdown>
                        <el-avatar
                            shape="square"
                            :src="avatar"
                            style="margin:10px; float: right;"
                        ></el-avatar>
                    </el-col>
                </el-row>
                <!-- 修改密码 -->
                <el-dialog
                    title="提示"
                    :visible.sync="editPasswordDialog"
                    width="30%"
                    :before-close="closeEditPassword"
                    :close-on-click-modal="false"
                >
                    <el-form
                        ref="editPasswordForm"
                        :rules="editPasswordRule"
                        class="demo-form-inline"
                        :model="editPasswordForm"
                        label-width="90px"
                    >
                        <el-form-item label="原密码" prop="oldPassword">
                            <el-input
                                v-model="editPasswordForm.oldPassword"
                                placeholder="请输入原密码"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="新密码" prop="newPassword">
                            <el-input
                                v-model="editPasswordForm.newPassword"
                                placeholder="请输入新密码"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="confirmPassword">
                            <el-input
                                v-model="editPasswordForm.confirmPassword"
                                placeholder="请确认密码"
                            ></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button size="small" @click="closeEditPassword()">取消</el-button>
                            <el-button size="small" type="primary" @click="editPassword()">保存</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
            </el-header>
            <!-- container -->
            <el-container>
                <!-- aside 菜单 -->
                <el-aside>
                    <div class="toggle-button" @click="isCollapse = !isCollapse">
                        <i v-if="isCollapse" class="el-icon-s-unfold"></i>
                        <i v-if="!isCollapse" class="el-icon-s-fold"></i>
                    </div>
                    <el-menu 
                        router
                        :default-active="activePath" 
                        class="el-menu-demo" 
                        mode="vertical" 
                        :collapse="isCollapse"
                    >
                        <el-menu-item index="/index" @click="saveActiveNav('/index')">
                            <i class="el-icon-house"></i>
                            <span slot="title">首页</span>
                        </el-menu-item>
                        
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-setting"></i>
                                <span>系统设置</span>
                            </template>
                            <el-menu-item index="2-1">权限管理</el-menu-item>
                            <el-menu-item index="2-2">权限更改</el-menu-item>
                        </el-submenu>
                        <el-menu-item
                            index="/user/list"
                            @click="saveActiveNav('/user/list')"
                            >
                            <i class="el-icon-user"></i>
                            <span slot="title">用户管理</span>
                        </el-menu-item>
                        <el-menu-item 
                            index="/order/list"
                            @click="saveActiveNav('/order/list')"    
                        >
                            <i class="el-icon-tickets"></i>
                            <span slot="title">订单管理</span>
                        </el-menu-item>
                        <el-menu-item
                            index="/course/list"
                            @click="saveActiveNav('/course/list')"
                        >
                            <i class="el-icon-notebook-1"></i>
                            <span slot="title"> 课程管理</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-reading"></i>
                            <span>文章管理</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-container>
                <!-- main 主要内容 -->
                <el-main>
                    <!-- 面包屑 -->
                    <Breadcrumb/>
                    <!-- 显示跳转的路由主要内容 -->
                    <router-view></router-view>
                </el-main>
                <el-footer>Copyright © 2022 知否技术</el-footer>
                </el-container>
            </el-container>
        </el-container>
     </div>
</template>
  
<script>
import Breadcrumb from '../components/Breadcrumb.vue'
import { updataPassword } from '../http/axios'
    export default {
      components: {Breadcrumb},
      data () {
         return {
            avatar:require("@/assets/img/avator.jpg"),
            isCollapse:false,
            // 被激活的链接地址，默认是首页
            activePath:"",
            editPasswordDialog: false,
            editPasswordRule:{

            },
            editPasswordForm:{  
                oldPassword:"",
                newPassword:"",
                confirmPassword:""
            },
        }
       },
      computed: {},
      watch: {},
      // created: 在模板渲染成html 页面之前调用，通常初始化某些属性值，然后再渲染成视图
      created () {
        this.activePath = sessionStorage.getItem('activePath')
                          ? sessionStorage.getItem("activePath")
                          :"/index"
      },
      // 在模板渲染成 html 页面之后调用，通常是初始化页面完成后，再对 html 的 dom 节点进行一些需要的操作
      mounted () {
        console.log(this.$route);
      },
      // 页面调用方法
      methods: {
        // 退出系统
        logout(){
            this.$confirm("确定要退出系统吗？","提示", {
                confirmButtonText:"确定",
                cancleButtonText:"取消",
                type:"warning"
            }).then(() => {
                // 清除缓存
                // 清除了缓存，就不可以直接输入/home进入网站了
                sessionStorage.clear()
                this.$router.push("/login")
            }).catch(() => {
                return false
            })
        },
        // 保存链接的激活状态
        saveActiveNav(activePath){
            sessionStorage.setItem("activePath",activePath)
            this.activePath = activePath
        },
        // 修改密码
        editPassword(){
            this.$refs.editPasswordForm.validate(async (valid) => {
                if(!valid) return
                if(this.editPasswordForm.newPassword != this.editPasswordForm.confirmPassword){
                    return this.$message.error("两次密码不正确，请重新输入！")
                }
                // 请求接口
                const {data: res} = await updataPassword(this.editPasswordForm)
                if(res.success) {
                    this.$message.success("密码修改成功，请重新登录")
                    sessionStorage.clear()
                    this.$router.push("/login")
                } else {
                    return this.$message.error(res.msg)
                }
            })
        },
        // 取消关闭重置密码
        closeEditPassword(){
            this.editPasswordDialog = false;
            // 坑：resetFields 方法只能重置带有 props 属性的元素
            this.$refs.editPasswordForm.resetFields()
        }
      }
    }
</script>
  
<style scoped>
.home-container {
  position: absolute;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 100%;
  background: #f2f3f5;
}

.el-header {
  background: #2661ef;
  padding: 0 10px;
  overflow: hidden;
}

.system-name {
  color: #fff;
  font-size: 18px;
}

.el-aside {
  background: white;
  width: auto !important;
}
.el-footer {
  color: #cccccc;
  text-align: center;
  line-height: 60px;
}

.el-footer:hover {
  color: #2661ef;
}

.toggle-button {
  background-color: #d9e0e7;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
  color: black;
}

.el-menu-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu-item.is-active {
  color: #fff !important;
  font-size: 15px;
  font-weight: bold;
  background-color: #2661ef !important;
  border-radius: 2px;
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  margin: 2px 5px 0px 2px;
}
</style>