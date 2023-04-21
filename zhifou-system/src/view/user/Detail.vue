<template>
     <div class="content">
        <el-card>
            <div class="basic-info">
                用户详情
                <el-button style="float: right" size="small" @click="$router.go(-1)">
                    返回</el-button>
            </div>
        <el-divider></el-divider>
        <div style="text-align: center;">
            <el-avatar
                :size="150"
                :src="require('../../assets/img/avator.jpg')"
            ></el-avatar>
            <h2 style="margin: 10px 0px">
                {{ userInfo.name ? "": "DESU" }}
            </h2>
            <span
                style="
                    border-right: 2px solid #d2d2d2;
                    padding-right: 10px;
                    color: #999999;
                "
            >在学课程
                {{ userInfo.courseNum ? userInfo.courseNum : "2" }}
            </span>
            <span style="padding-left: 10px; color: #999999;">
                已下订单
                {{ userInfo.courseOrder ? userInfo.courseOrder : "2" }}
            </span>
            <p style="margin-top: 10px;">
                <el-tag size="small" style="background: #d9f6ee; color: #3dd4a7;">
                    <i class="fa fa-circle"></i>
                    {{ userInfo.status ? userInfo.status : "正常" }}
                </el-tag>
            </p>
        </div>
        </el-card>
        <!-- 详情 -->
        <el-card class="rowStyle">
            <div class="basic_info">基础信息</div>
            <el-divider></el-divider>
            <el-descriptions class="margin-top" :colunm="3">
                <el-descriptions-item>
                    <template slot="label"> 姓名 </template>
                    {{ userInfo.name ? userInfo.name : "DESU" }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label"> 昵称 </template>
                    {{ userInfo.nickName ? userInfo.nickName : "RZEE" }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label"> 手机号 </template>
                    {{ userInfo.mobile ? userInfo.mobile : "18086737553" }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label"> 性别 </template>
                    {{ userInfo.sex ? userInfo.sex : "女" }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label"> 年龄 </template>
                    {{ userInfo.age ? userInfo.age : 22 }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label"> 联系地址 </template>
                    {{ userInfo.address ? userInfo.address : "遥远北方" }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label"> 标签 </template>
                    <el-tag size="mini" type="primary">JavaScript</el-tag>
                    <el-tag size="mini" type="success">Vue</el-tag>
                    <el-tag size="mini" type="danger">React</el-tag>
                </el-descriptions-item>
            </el-descriptions>
        </el-card>
    </div>
</template>
  
<script>
    // import {get} from '../../http/api'

import { UserDetail } from '../../http/axios';

    // import {getUserDetail2} from "../../http/axios"
    export default {
      name: '',
      components: {},
      data () {
         return {
            userInfo:{
                id:"",
                name:"",
                courseOrder:"",
                courseNum:"",
                status:"",
                nickName:"",
                mobile:"",
                sex:"",
                age:"",
                address:"",
            }
        }
       },
      // created: 在模板渲染成html 页面之前调用，通常初始化某些属性值，然后再渲染成视图
      created () {
        // this.getUserDetail()
        // getUserDetail()
        this.getUserDetail()
      },
      // 在模板渲染成 html 页面之后调用，通常是初始化页面完成后，再对 html 的 dom 节点进行一些需要的操作
      mounted () {},
      // 页面调用方法
      methods: {
        async getUserDetail(){
            /* getUserDetail({ id:this.userInfo.id}).then(res => {
                console.log(res);
            }) */            
            const {data: res} = UserDetail({ id:this.userInfo.id})
            if(res.data.success) {
                    Object.assign(this.userInfo, res.data.data)
                } 
            }
        }
        /* async getUserDetail(){
            const result = await this.$axios.get("/user/detail",{
                params:{ id:this.userInfo.id}
            })
            if (result.data.success) {
                Object.assign(this.userInfo, result.data.data)
            } else {
                this.$message.error(result.data.$message)
            }
        } */
      }
    
</script>
  
<style scoped>
.content {
  margin: 20px 0px;
}
.basic-info {
  border-left: 5px solid #2661ef;
  padding-left: 10px;
  font-weight: bold;
}
.rowStyle {
  margin-top: 10px;
}
.el-tag {
  margin-left: 5px;
}
</style>