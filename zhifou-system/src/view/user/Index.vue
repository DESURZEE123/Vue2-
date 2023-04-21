<template>
     <div class="content">
        <el-card shadow="never">
            <!-- 查询 -->
            <el-row type="flex" justify="space-between">
                <el-form
                    ref="searchForm"
                    :model="searchForm"
                    size="small"
                    class="demo-form-inline"
                    inline
                >
                    <el-form-item label="用户名称:" prop="name">
                        <el-input
                            v-model.trim="searchForm.name"
                            placeholder="请输入用户名称"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="性别:" prop="sex">
                        <el-select v-model="searchForm.sex" placeholder="请选择用户性别">
                            <el-option label="女" value="0"></el-option>
                            <el-option label="男" value="1"></el-option>
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
                            size="small"
                            icon="el-icon-refresh-right"
                            @click="handleClear()"
                        >重置</el-button>
                    </el-form-item>
                </el-form>
            </el-row>
            <el-row class="roeSpace">
                <el-col>
                    <div>
                        <el-radio-group
                            size="small"
                            @change="changeRadio($event)"
                            v-model="searchForm.state"  
                        >   
                            <el-radio-button label="">全部</el-radio-button>
                            <el-radio-button label="0">正常</el-radio-button>
                            <el-radio-button label="1">已注销</el-radio-button>
                        </el-radio-group>
                    </div>
                </el-col>
            </el-row>
            <!-- 表格 -->
            <el-table ref="table" :data="tableData" border>
                <el-table-column type="index" label="序号" width="50"></el-table-column>
                <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
                <el-table-column prop="sex" label="性别" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <div>
                            {{ scope.row.sex == 0 ? '女' : '男' }}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="nickname" label="昵称" show-overflow-tooltip ></el-table-column>
                <el-table-column prop="mobile" label="手机号" show-overflow-tooltip ></el-table-column>
                <el-table-column prop="stateName" label="状态" show-overflow-tooltip ></el-table-column>
                <el-table-column label="操作" width="330">
                    <template slot-scope="scope">
                        <el-button
                            type="danger"
                            size="small"
                            @click="deleteUser(scope.row.id)"
                        >删除</el-button>   
                        <el-button
                            size="small"
                            @click="changeView('/user/detail')"
                        >详情</el-button>                          
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
            <el-pagination
                class="pagination"
                layout="->,total, sizes, prev, pager, next, jumper"
                :total="total"
                :page-sizes="[10, 20, 30, 40]"
                :current-page="searchForm.current"
                :page-size="searchForm.size"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
            ></el-pagination>
        </el-card>
     </div>
</template>
  
<script>
    import { UserPageList } from '../../http/axios'
    export default {
      name: '',
      components: {},
      data () {
         return {
            searchForm:{
                name:"",
                sex:"",
                state:"",
                current: 1,
                size: 10,
            },
            tableData:[
                {
                    name: "DESU",
                    sex: 0,
                    nickname: "螺蛳粉DESU",
                    mobile: "18080808080",
                    stateName:"正常",
                },
            ],
            total:1  // 初始化应为0，这里只做演示效果使用
        }
       },
      computed: {},
      watch: {},
      // created: 在模板渲染成html 页面之前调用，通常初始化某些属性值，然后再渲染成视图
      created () {
        this.getPageList()
      },
      // 在模板渲染成 html 页面之后调用，通常是初始化页面完成后，再对 html 的 dom 节点进行一些需要的操作
      mounted () {},
      // 页面调用方法
      methods: {
        async getPageList(){
            const result = UserPageList({ params: this.searchForm})
            if(result.data.success) {
                this.tableData = result.data.data.records
                this.total = result.data.data.total
            } else {
                this.$message.error(result.data.message)
            }
            /* const result = await this.$axios.get('https://api.apiopen.top/api/sentences',{params: this.searchForm,})
            console.log(result);
            if(result.data.success) {
                this.tableData = result.data.data.records
                this.total = result.data.data.total
            } else {
                this.$message.error(result.data.message)
            } */
        },
        // 搜索
        handleSearch(){
            this.searchForm.state = value
            this.getPageList()
        },
        // 重置
        handleClear(){
            this.$refs.searchForm.resetFields();
            this.getPageList()
        },
        // 切换
        changeRadio(value){
            this.searchForm.state = value
            this.getPageList()
        },
        // 删除
        deleteUser(id){
            this.$confirm("确认要删除该用户吗，是否继续?","提示", {
                confirmButtonText:"确定",
                cancleButtonText:"取消",
                type:"warning",
            }).then(() => {
                // 删除逻辑
                this.$axios.delete(url,{params:{id: id}
                }).then((res) => {
                    if(res.data.success) {
                        this.$message({ message:'删除成功！', type:"success"})
                    } else {
                        this.$message.error(res.data.message)
                    }
                })
            }).catch(() => {
                this.$message({
                    type:"info",
                    message:"已取消删除"
                })
            })
        },
        // 路由跳转
        changeView(url, queryParams) {
            this.$router.push({
                path:url,
                query: queryParams,
            })
        },
        // 切换每页显示条数
        handleSizeChange(val){
            this.searchForm.size = val
            this.getPageList()
        },
        // 点击某一页，跳转某一页
        handleCurrentChange(val){
            this.searchForm.current = val
            this.getPageList()
        }
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