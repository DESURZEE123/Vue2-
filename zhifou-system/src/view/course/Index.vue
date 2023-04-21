<template>
     <div class="content">
        <el-card shadow="never">
            <!-- 查询 -->
            <el-row type="flex" justify="space-between">
                <el-col>
                    <el-form
                        ref="searchForm"
                        :model="searchForm"
                        size="small"
                        class="demo-form-inline"
                        inline
                    >
                        <!-- prop 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 -->
                        <el-form-item label="课程名称:" prop="name">
                            <el-input v-model.trim="searchForm.name" placeholder="请输入课程名称"></el-input>
                        </el-form-item>
                        <el-form-item label="课程编号:" prop="code">
                            <el-input v-model.trim="searchForm.code" placeholder="请输入课程编号"></el-input>
                        </el-form-item>
                        <el-form-item label="讲师:" prop="lecturer">
                            <el-select v-model.trim="searchForm.lecturer" placeholder="请选择讲师">
                                <el-option 
                                v-for="item in lectureList"
                                :key="item.id"
                                :label="item.name" 
                                :value="item.id"
                                ></el-option>
                            </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button
                           type="primary"
                           icon="el-icon-search"
                           size="small"
                           @click="handleSearch()"
                        >查询</el-button>
                        <el-button
                           icon="el-icon-refresh-right"
                           size="small"
                           @click="handleClear()"
                        >重置</el-button>
                    </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
            <!-- 新增 + 切换 -->
            <el-row class="rowSpace">
                <!-- 新增课程 -->
                <el-col :span="4">
                    <el-button
                        type="primary"
                        size="small"
                        @click="changeView('/course/add')"
                    >新增课程</el-button>
                </el-col>
                <el-col :span="8">
                    <!-- 为其绑定属性和方法 -->
                    <el-radio-group
                        size="small"
                        @change="changeRadio($event)"
                        v-model="searchForm.state"
                    >
                        <el-radio-button label="">全部</el-radio-button>
                        <el-radio-button label="0">已上架</el-radio-button>
                        <el-radio-button label="1">已下架</el-radio-button>
                    </el-radio-group>
                </el-col>
            </el-row>
            <!-- 表格 -->
            <el-table ref="table" :data="tableData" header-align="center" border >
                <el-table-column type="index" label="序号" width="50"></el-table-column>
                <el-table-column prop="name" label="课程名" ></el-table-column>
                <el-table-column prop="code" label="课程编号" show-overflow-tooltip></el-table-column>
                <el-table-column prop="nickname" label="课程封面">
                    <!-- 使用具名卡槽，一般用于渲染图片、按钮、进度条或者是对渲染数据的再操作 -->
                    <template slot-scope="scope">
                        <div>
                            <el-popover placement="right" trigger="hover">
                                <!-- 鼠标放大后的图片 -->
                                <!-- slot:—— Popover内嵌HTML文本 -->
                                <el-image
                                    style="height:300px"
                                    :src="scope.row.courseUrl"
                                    fit="contain"
                                ></el-image>
                                <!-- slot:reference: 触发Popover显示的HTML元素 -->
                                <el-image
                                    slot="reference"
                                    style="height:100px"
                                    :src="scope.row.courseUrl"
                                    fit="contain"
                                ></el-image>
                            </el-popover>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="lecturer" label="讲师" show-overflow-tooltip/>
                <el-table-column prop="stateName" label="状态" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <!-- 具名插槽：对渲染数据的再操作 -->
                        <div>
                            {{ scope.row.status == 0 ? "已上架" : "已下架" }}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="360">
                    <template slot-scope="scope">
                        <!-- 这里的编辑按钮绑定跳转路由的方法 -->
                        <el-button
                            type="success"
                            size="small"
                            @click="changeView('/course/update',{id:scope.row.id})"
                        >编辑</el-button>
                        <el-button
                            type="danger"
                            size="small"
                            @click="deletecourse(scope.row.id)"
                        >删除</el-button>
                        <el-button
                            type="warning"
                            size="small"
                            @click="changeCourseStatus(scope.row.id,0)"
                        >下架</el-button>
                        <el-button
                            type="primary"
                            size="small"
                            @click="changeCourseStatus(scope.row.id,1)"
                        >上架</el-button>
                        <el-button
                            size="small"
                            @click="openDetail(scope.row.id)"
                        >详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
            <el-pagination
                layout="->,total, sizes, prev, pager, next, jumper"
                :total="total"
                :page-sizes="[10, 20, 30, 40]"
                :current-page="searchForm.current"
                :page-size="searchForm.size"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
            ></el-pagination>
            <!-- 详情 -->
            <Detail ref="course_detail"/>
        </el-card>
     </div>
</template>
  
<script>
    import Detail from "../course/Detail.vue"
    import { CoursePageList } from "../../http/axios";
    export default {
      name: 'courseManage',
      components: { Detail },
      data () {
         return {
            searchForm: {
                name:'',
                code:'',
                lecturer:'',
                state:'0',
                size:10,
                current:1
            },
            lectureList:[
                {id:1,name:'DESU'}
            ],
            tableData:[
                {
                    id:1,
                    index:1,
                    name:"vue2后台管理系统",
                    code:'001',
                    courseUrl:require("@/assets/img/courseurl.jpg"),
                    lecturer:'DESU',
                    status:'0'
                },
            ],
            total: 1,  // 初始化应为 0 ，这里只做演示效果使用
        }
       },
      computed: {},
      watch: {},
      // created: 在模板渲染成html 页面之前调用，通常初始化某些属性值，然后再渲染成视图
      created () {
        // 初始化表格数据
        // 为 tableData 和 total 变量赋值
        this.getPageList()
      },
      // 在模板渲染成 html 页面之后调用，通常是初始化页面完成后，再对 html 的 dom 节点进行一些需要的操作
      mounted () {
        console.log(this.$refs.course_detail);
      },
      // 页面调用方法
      methods: {
        // 定义获取列表的方法
        async getPageList() {
            // const result = await this.$axios.get('/course/list',{
            const result = CoursePageList({params: this.searchForm,})
            if (result.data.success) {
                this.tableData = result.data.data.records
                this.total = result.data.data.total
            } else {
                this.$message.error(result.data.message)
            }
        },
        // 搜索
        handleSearch(){
            // 在页码为1的界面，查找
            this.searchForm.current = 1
            this.getPageList()
        },
        // 重置
        handleClear(){
            this.$refs["searchForm"].resetFields()
            this.getPageList()
        },
        // 路由跳转页面
        changeView(url,queryParams){
            console.log('url:' + url);
            console.log('queryParams:' + queryParams);
            this.$router.push({
                path:url,
                query:queryParams
            })
        },
        // 切换tab
        changeRadio(value){
            console.log(value);
            this.searchForm.state = value
            this.getPageList()
        },
        // 删除
        deletecourse(id){
            this.$confirm("确定要删除该课程吗，是否继续？","提示", {
                confirmButtonText:'确定',
                cancleButtonText:'取消',
                type:'warning',
            }).then(() => {
                console.log('已删除');
                // 点击删除之后
                // 删除逻辑
                this.$axios.delete(url, {params:{id:id}} )
                .then((res) => {
                    if(res.data.success) {
                        this.$message({message:'删除成功！',type:'success'})
                    } else {
                        this.$message.error(res.data.message)
                    }
                })                
            }).catch(() => {
                console.log('取消删除');
                // 点击取消之后
                this.$message({
                    type:'info',
                    message:'已取消删除'
                })
            })
        },
        // 上下架设置
        changeCourseStatus(id,status){
            let title = status == 0 ? '下架' : '上架'
            this.$confirm("确认要【" + title + "】该课程吗, 是否继续?","提示", {
                comfirmButtonText: "确定",
                cancleButtonText:"取消",
                type:"waning",
            }).then(() => {
                // 业务操作
                this.$axios.post("/course/changeStatus",{
                    id:id,
                    status,
                }).then((res) => {
                    if(res.data.success) {
                        this.$message({ message: title + "成功!", type:"success"})
                    } else {
                        this.$message.error(res.data.message)
                    }
                })
            }).catch(() => {
                this.$message({
                    type:"info",
                    message:"已取消操作",
                })
            })

        },
        // 详情抽屉
        openDetail(id){
            // 修改子组件变量值，使子组件的抽屉组件弹出来
            this.$refs.course_detail.drawer = true
            // 为子组件查询详情的id赋值
            this.$refs.course_detail.formData.id = id
            // 调用子组件查询详情的方法
            this.$refs.course_detail.getCourseDetail()
        },
        // 切换每页显示条数
        handleSizeChange(val){
            this.searchForm.size = val
            this.searchForm.current = 1
            this.getPageList()
        },
        // 点击某一页，跳转某一页
        handleCurrentChange(val){
            this.searchForm.current = val
            this.getPageList()
        },
    
      }
    }
</script>
  
<style scoped>
.content {
    margin: 20px 0px;
}
.el-table {
  margin: 20px 0px;
}
</style>