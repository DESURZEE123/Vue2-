<template>
     <div class="">
        <el-drawer
            title="课程详情"
            :visible.sync="drawer"
            :before-close="handleClose"
            :wrapperClosable="false"
            size="40%">
            <!-- 讲师介绍 -->
            <el-card class="course_info">
                <el-row type="flex" justify="space-between">
                    <el-col :span="6">
                        <el-avatar
                            style="width: 80px; height:80px; margin-top: 25px;"
                            :src="require('../../assets/img/avator.jpg')"
                        ></el-avatar>
                    </el-col>
                    <el-col :span="18">
                        <h3>
                            <!-- 全局变量 -->
                            {{$constant.officialAccount}}
                            <i
                                style="color: #67c23a; font-size: 25px;"
                                class="el-icon-success"
                            ></i>
                        </h3>
                        <p class="lecturer_desc">
                            {{ 
                                formData.lecturerDesc ? formData.lecturerDesc:'新手菜鸡小萌新DESU'    
                            }}
                        </p>
                        <p class="lecturer_desc">
                            {{ formData.fans ? formData.fans : 1 }} 粉丝
                        </p>
                    </el-col>
                </el-row>
            </el-card>
            <!-- 课程封面 -->
            <div style="width: 96%; margin:0px auto">
                <el-image
                    :src="require('../../assets/img/courseurl.jpg')"
                    fit="contain"
                ></el-image>
            </div>
            <!-- 课程介绍 -->
            <el-card class="course_info">
                <p>
                    DESU的第一个vue2项目！ヾ(◍°∇°◍)ﾉﾞ
                </p>
            </el-card>
        </el-drawer>
     </div>
</template>
  
<script>
    import {CourseDetail} from '../../http/axios'
    export default {
      data () {
         return {
            drawer: false,
            formData:{
                id:"",
                lecturer:"",
                lecturerDesc:"",
                fans:""
            }

        }
       },
      computed: {},
      watch: {},
      // created: 在模板渲染成html 页面之前调用，通常初始化某些属性值，然后再渲染成视图
      created () {},
      // 在模板渲染成 html 页面之后调用，通常是初始化页面完成后，再对 html 的 dom 节点进行一些需要的操作
      mounted () {
        console.log('Detail' + this);
      },
      // 页面调用方法
      methods: {
        async getCourseDetail(){
            const result = CourseDetail({params: { id:this.formData.id }})
            if (result.data.success) {
                Object.assign(this.formData, result.data.data)
            } else {
                this.$message.error(result.data.message)
            }
        },
        handleClose(){
            this.drawer = false
        },
      }
    }
</script>
  
<style scoped>
.course_info {
  margin: 0px 10px 10px;
}
.lecturer_desc {
  color: gray;
  font-size: 14px;
}
</style>