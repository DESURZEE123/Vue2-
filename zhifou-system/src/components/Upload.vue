<template>
     <div>
        <el-upload
            ref="importUpload"
            class="import-upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            
            :file-list="uploadFileList"
            :before-remove="uploadFileBeforeRemove"
            :on-change="uploadFileHandleChange"
            :on-preview="handlePreview"
            :http-request="uploadListRequest"
            >
            <!-- on-change：文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用 -->
            <!-- on-preview：点击文件列表中已上传的文件时的钩子 -->
            <!-- before-remove:删除文件之间的钩子,参数为上传的文件和文件列表
                               若返回flase或者返回Promise且被reject,则停止删除
            -->
            <!-- http-request:覆盖默认的上传行为,可以自定义上传的实现 -->
            <el-button size="small" icon="el-icon-upload el-icon--right">
                上传文件
            </el-button>
            <div class="el-upload__tip" slot="tip">
                支持扩展名：.png .jpeg .jpg ，文件大小限制 10M。
            </div>
        </el-upload>
     </div>
</template>
  
<script>
    export default {
      name: 'upload',
      props: ['uploadList'],
      data () {
         return {
            uploadFileList:[],
        }
       },
      computed: {},
      watch: {},
      // created: 在模板渲染成html 页面之前调用，通常初始化某些属性值，然后再渲染成视图
      created () {
        if(this.uploadList){
            this.uploadFileList = this.uploadList
        }
      },
      // 在模板渲染成 html 页面之后调用，通常是初始化页面完成后，再对 html 的 dom 节点进行一些需要的操作
      mounted () {},
      // 页面调用方法
      methods: {
        // 上传文件
        uploadListRequest(param){
            // FormData 对象管理表单数据
            const fd = new FormData()
            fd.append("file",param.file)

            // 和后台沟通好请求头
            const config = {header:{"Content-Type":"multipart/form-data"}}
            const url = "https://api.github.com/search/users?q=xxx"
            
            console.log(param);  // FormData {}
            // FormData私有类对象，访问不到，可以通过get判断值是否传进去
            console.log(fd);
            console.log(fd.get('file'));

            this.$axios.post(url, fd, config).then((res) => {
                if(res.data.success) {
                    this.$emit("uploadFile", res.data.id)
                    this.$message.success("文件上传成功！")
                } else {
                    this.$message.error(res.data.message)
                }
            }).catch((err) => {
                console.log(err);
            })
        },
        // 删除文件
        uploadFileBeforeRemove(file,uploadFileList){
            return new Promise ((resolve,reject) => {
                this.$confirm(`确定删除${file.name}?`)
                    .then(() => {
                        if(file.id) {
                            this.$axios.post(url,{fileId:file.id})
                                .then((res) => {
                                    if(res.data.success) {
                                        this.$message.success('删除成功')
                                        // 利用$emit子传父性质，调用父组件的方法
                                        this.$emit("removeFile")
                                        resolve()
                                    } else {
                                        this.$message.error(res.data.message)
                                        reject()
                                    }
                                })
                                .catch((err) => {
                                    reject()
                                    console.log(err);
                                })
                        } else {
                            this.$message.success('删除成功')
                            this.$emit('removeFile')
                            resolve()
                        }
                    }).catch(() => {
                        reject()
                    })
            })
        },
        // 下载元素
        async handlePreview(file) {
            if(file.id) {
                const res = await this.$axios.get(url,{
                    params:{fileId: file.id}
                })
                if(res.data.success) {
                    const downloadElement = document.createElement('a')
                    downloadElement.href = res.data.data
                    document.body.appendChild(downloadElement)
                    downloadElement.click()
                    document.body.removeChild(downloadElement)
                } else {
                    this.$message.error(res.data.message)
                }
            }
        },
        uploadFileHandleChange(){}
      }
    }
</script>
  
<style scoped>
</style>