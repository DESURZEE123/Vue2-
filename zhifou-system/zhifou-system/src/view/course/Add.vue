<template>
     <div class="content">
        <el-card>
            <el-form ref="form" :model="form" :rules="rules" label-width="100px">
               <el-form-item label="课程名称:" prop="name">
                  <el-input v-model="form.name" placeholder="请输入课程名称"></el-input>
               </el-form-item>
               <el-form-item label="课程分类:" prop="category">
                  <el-cascader
                     placeholder="请选择课程分类"
                     style="width: 440px"
                     :options="categoryList"
                     :props="cascaderProps"
                  ></el-cascader>
                  <!-- v-model="form.category" -->
               </el-form-item>
               <el-form-item label="课程售价:">
                  <el-input-number
                     v-model="form.price"
                     :min="1"
                     :max="999"
                     :step="1"
                     :precision="2"
                  ></el-input-number>
               </el-form-item>
               <el-form-item label="课程讲师:" prop="lecturer">
                  <el-select v-model="form.lecturer" placeholder="请选择讲师">
                     <el-option
                        v-for="item in lecturerList"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                     ></el-option>
                  </el-select>
               </el-form-item>
               <el-form-item label="课程封面:">
                  <Upload
                     ref="uploadFile"
                     :upload-list="form.courseUrl"
                     @uploadFile="uploadFile"
                     @removeFile="removeFile"
                  />
               </el-form-item>
               <el-form-item label="课程简介" prop="desc">
                  <el-input
                     style="width: 440px"
                     maxlength="1000"
                     show-word-limit
                     type="textarea"
                     v-model="form.desc"
                     placeholder="请输入课程简介"
                  ></el-input>
               </el-form-item>
               <el-form-item>
                  <el-button type="primary" @click="onSubmit('form')">保存</el-button>
                  <el-button @click="$router.back()">取消</el-button>
               </el-form-item>
            </el-form>
        </el-card>
     </div>
</template>
  
<script>
   import Upload from "../../components/Upload.vue"
   import { CourseDetail, CourseCategory, Course } from "../../http/axios"
    export default {
      name: '',
      components: {Upload},
      data () {
         return {
            form:{
               id:"2",
               name:"",
               code:"",
               category:"",
               lecturer:"",
               price:"",
               desc:"",
               courseUrl:"",
            },
            rules:{
               name:[
                  {
                     required: true,
                     message:'请输入课程名称',
                     trigger:'blur'
                  },
               ],
               category:[
                  {
                     required: false,
                     message:'请输入课程分类',
                     trigger:'change'
                  },
               ],
               lecturer:[
                  {
                     required: true,
                     message:'请选择课程讲师',
                     trigger:'change'
                  },
               ],
               desc:[
                  {
                     required: true,
                     message:'请输入课程简介',
                     trigger:'blur'
                  },
               ],
            },
            categoryList:[
               {
                  value:"1001",
                  label:"前端",
                  children:[
                     {value:'100101',label:'html5'},
                     {value:'100102',label:'css5'},
                     {value:'100103',label:'JavaScript'},
                  ],
               },
               {
                  value:"1002",
                  label:"后端",
                  children:[
                     {value:'100201',label:'C'},
                     {value:'100202',label:'java'},
                     {value:'100203',label:'python'},
                  ],
               },
               {
                  value:"1003",
                  label:"移动端",
                  children:[
                     {value:'100301',label:'IOS'},
                     {value:'100302',label:'Android'},
                  ],
               },
            ],
            lecturerList:[
               { id:"001", name:"DESU"},
               { id:"002", name:"wyy"},
               { id:"003", name:"RZEE"},
            ],
            /* 如果后台返回的数据结构和该组件规定的不一致，
            就需要我们将后台返回的字段与组件规定的字段做映射： */
            /* cascaderProps:{
               value:'id',
               label:'name',
               children:'child'
            } */
        }
       },
      // created: 在模板渲染成html 页面之前调用，通常初始化某些属性值，然后再渲染成视图
      created () {
         // 一般后端调用，这里都要初始化
         this.getCourseCategory()
         // 在新增页面，先判断路由参数id是否存在
         // 如果存在, 就调用获取课程详情的方法,然后为form表单赋值
         if(this.$route.query.id) {
            this.getCourseDetail()
         }
      },
      // 在模板渲染成 html 页面之后调用，通常是初始化页面完成后，再对 html 的 dom 节点进行一些需要的操作
      mounted () {
         console.log(this.$route.query.id);
      },
      // 页面调用方法
      methods: {
         // 获取课程详情
         async getCourseDetail() {
            const {data:res} = await CourseDetail({params: {id: this.$route.query.id}})
            if (res.success) {
               Object.assign(this.form,res.data)
            }
         },
         // 获取课程种类
         async getCourseCategory(){
            const result = await CourseCategory()
            if (result.data.success) {
               this.categoryList = result.data.data
            } else {
               this.$message.error(result.data.message)
            }
         },
         // 新增/编辑课程内容
         onSubmit(formName){
            this.$refs[formName].validate((valid) => {
               if(valid) {
                  let url = this.form.id ? "/course/update" : "/course/save"
                  Course(url,this.form).then((res) => {
                     if (res.data.success) {
                        this.$message.success("保存成功！")
                        this.$router.go(-1)
                     } else {
                        this.$message.error(res.data.msg)
                     }
                  })
               } else {
                  return false
               }
            })
         },
         // 上传文件
         uploadFile(file) {
            this.form.courseUrl.push(file)
         },
         // 删除文件
         removeFile(id) {
            let fileIds = this.form.courseUrl
            var index = fileIds.findIndex((item) => {
               if(item.id == id) {
                  return true
               }
            })
            if(index != -1) {
               // 删除下标为index的元素
               fileIds.splice(index,1)
            }
         },
      }
    }
</script>
  
<style scoped>
.el-input,
.el-select {
  width: 440px;
}
</style>