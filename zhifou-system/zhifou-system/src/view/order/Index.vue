<template>
     <div class="content">
        <el-card shadow="never">
            <!-- 排序 --> 
            <el-row type="flex">
                <el-col :span="12">
                    <el-form
                        ref="searchForm"
                        :model="searchForm"
                        label-width="50px"
                        :inline="true"
                        class="demo-form-inline"
                    >
                    <!-- class="demo-form-inline" -->
                        <el-form-item label="排序">
                            <el-button
                                type="primary"
                                size="small"
                                @click="sortTable(0)"
                            >默认排序</el-button>
                            <el-button
                                size="small"
                                @click="sortTable(2)"
                            >售价降序</el-button>
                            <el-button
                                size="small"
                                @click="sortTable(1)"
                            >售价升序</el-button>
                        </el-form-item>
                        <el-form-item label="筛选">
                            <!-- 链级选择器 -->
                            商品分类：
                            <el-cascader style="margin-bottom:10px;"
                                placeholder="分类搜索"
                                v-model="searchForm.category"
                                :options="categoryList"
                                :prop="cascaderProps"
                            ></el-cascader>
                            <br>
                            价格区间：                            
                            <Range @getMin="getMin" @getMax="getMax"/>
                        </el-form-item>
                        <el-form-item label="搜索" :inline="true">
                            精确搜索
                            <el-input 
                                placeholder="请输入商品名称" 
                                style="width: 200px;"
                                v-model="searchForm.keyWord"
                            ></el-input>
                        </el-form-item>
                        <el-button 
                            type="primary"
                            @click="onSubmit()"
                        >搜索</el-button>
                    </el-form>
                </el-col >
                <!-- 图 -->
                <el-col :span="12" style="width: 300px;height:200px;">
                    <div class="chart">
                        <el-card class="e-chart" id="one-chart"></el-card>
                    </div>
                </el-col>
            </el-row>
            <!-- 订单表格 -->
            <el-table ref="table" :data="showData" border>
                <el-table-column type="selection" width="40" align="center" header-align="center"></el-table-column>
                <el-table-column 
                    prop="index"
                    label="商品编号" 
                    width="100" 
                    align="center" 
                    header-align="center"
                ></el-table-column>
                <el-table-column prop="nickname" label="商品图片" width="90" align="center" header-align="center">
                    <template slot-scope="scope">
                        <div>
                            <el-image
                                style="height:100px"
                                :src="scope.row.courseurl"
                                fit="contain"
                             ></el-image>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="title" label="商品标题" width="105" align="left" header-align="center" ></el-table-column>
                <el-table-column prop="category" label="所属分类" width="80" align="center" header-align="center"></el-table-column>
                <el-table-column prop="price" label="在售价" width="90"  align="center" header-align="center"
                ></el-table-column>
                <el-table-column prop="profit" label="预估收益" width="80" align="center" header-align="center"></el-table-column>
                <el-table-column prop="sale" 
                    label="月销售" 
                    width="70" 
                    align="center" 
                    header-align="center"
                ></el-table-column>
                <el-table-column prop="storage" label="库存" width="70" align="center" header-align="center"></el-table-column>
                <el-table-column label="操作" header-align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="success"
                            size="small"
                            @click="changeOrderStatus(scope.row.id,1)"
                        >上架</el-button>  
                        <el-button
                            type="danger"
                            size="small"
                            @click="deleteOrder(scope.row.id)"
                        >删除</el-button>  
                        <el-button
                            size="small"
                        >详情/编辑</el-button>                            
                    </template>
                </el-table-column>
            </el-table>
            <!-- 页码 -->
            <el-pagination
                layout="->,total, sizes, prev, pager, next, jumper"
                :total="total"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="searchForm.size"
                :current-page="searchForm.current"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
            >
            </el-pagination>
        </el-card>
     </div>
</template>
  
<script>
    import Range from "../../components/Range.vue"
    import { OrderPageList, DeleteOrder,ChangeOrderStatus } from "../../http/axios"
    export default {
      name: '',
      components: { Range, OrderPageList, DeleteOrder, ChangeOrderStatus},
      data () {
         return {
            searchForm:{
                keyWord:"",
                size:10,
                current:1,
                category:[],
                min:0,
                max:0,
            },
            total: 1,
            show:1,
            tableData:[
                {
                id:1,
                index:1,
                courseurl:require("@/assets/img/courseurl.jpg"),
                // courseurl:require("@/assets/img/courseurl.jpg"),
                title:"书籍前端vue框架小白必备DESU进阶之旅1",
                category:'书籍',
                price:"￥39.98",
                profit:"￥10.00",
                sale:300,
                storage:233,
                status:'0'
                },
                {
                id:3,
                index:3,
                courseurl:require("@/assets/img/courseurl.jpg"),
                // courseurl:require("@/assets/img/courseurl.jpg"),
                title:"书籍前端vue框架小白必备DESU进阶之旅3",
                category:'书籍',
                price:"￥29.98",
                profit:"￥10.00",
                sale:200,
                storage:233,
                status:'0'
                },
                {
                id:2,
                index:2,
                courseurl:require("@/assets/img/courseurl.jpg"),
                // courseurl:require("@/assets/img/courseurl.jpg"),
                title:"书籍前端vue框架小白必备DESU进阶之旅2",
                category:'书籍',
                price:"￥29.98",
                profit:"￥10.00",
                sale:200,
                storage:233,
                status:'0'
                },
            ],
            showData:[],
            categoryList:[
               {
                  value:"1001",
                  label:"书籍",
                  children:[
                     {value:'100101',label:'编程'},
                     {value:'100102',label:'算法'},
                  ],
               },
               {
                  value:"1002",
                  label:"衣服",
                  children:[
                     {value:'100201',label:'上衣'},
                     {value:'100202',label:'裤子'},
                     {value:'100203',label:'裙子'},
                  ],
               },
               {
                  value:"1003",
                  label:"食品",
                  children:[
                     {value:'100301',label:'速食'},
                     {value:'100302',label:'面包'},
                  ]
               },
            ],
            cascaderProps:{
               value:'id',
               label:'name',
               children:'child'
            },
        }
       },
      computed: {
      },
      watch: {},
      // created: 在模板渲染成html 页面之前调用，通常初始化某些属性值，然后再渲染成视图
      created () {
        this.getPageList()
        this.showData = this.tableData
      },
      // 在模板渲染成 html 页面之后调用，通常是初始化页面完成后，再对 html 的 dom 节点进行一些需要的操作
      mounted () {
        this.FirstEcharts()
        // console.log(this.show);
      },
      methods: {
        // 页面调用方法
        async getPageList() {
            /* const result = OrderPageList({params: this.searchForm,})
            if (result.data.success) {
                this.tableData = result.data.data.records
                this.total = result.data.data.total
            } else {
                this.$message.error(result.data.message)
            } */
        },
        // 排序
        sortTable(flag) {
            this.getPageList()
            const arr = this.tableData.filter((p) => {
                return p.index
            })
            if(flag) {
                this.showData = arr.sort((p1, p2) => {
                    return flag === 1 ? p2.index - p1.index : p1.index - p2.index
                })
                /* for (let i = 0; i < arr1.length; i++) {
                    console.log(arr1[i].index);
                } */
                // console.log(this.showData);
            } else {
                // 源数据显示格式
                this.showData = this.tableData
            }
            return this.showData
        },
        // 上架
        changeOrderStatus(id,status){
            let title = status == 0 ? '下架' : '上架'
            this.$confirm("确认要【" + title + "】该课程吗, 是否继续？", "提示", {
                confirmButtonText: '确定',
                cancleButtonText: '取消',
                type:"warning",
            }).then(() => {
                ChangeOrderStatus({id,status,}).then((res) => {
                    if(res.data.success) {
                        this.$message({ message: `${title} + "成功！"`, type:"success"})
                    } else {
                        this.$message.error(res.data.message)
                    }
                })
            }).catch(() => {
                this.$message({
                    type:'info',
                    message:'已取消操作'
                })
            })
        },
        // 删除商品
        deleteOrder(id){
            this.$confirm("确定要删除该课程吗，是否继续？","提示",{
                confirmButtonText:"确定",
                cancleButtonText:"取消",
                type:'warning,'
            }).then(() => {
                DeleteOrder({params:id}).then((res) => {
                    if (res.data.success) {
                        this.$message({message:'删除成功！', type:'success'})
                    } else {
                        this.$message.error(res.data.message)
                    }
                })
            }).catch(() => {
                this.$message({
                    type:'info',
                    message:'已取消删除'
                })
            })
        },
        // 切换每页显示条数
        handleSizeChange(val) {
            this.searchForm.size = val
            this.searchForm.current = 1
            this.getPageList()
        },
        // 点击某一页，跳转某一页
        handleCurrentChange(val) {
            this.searchForm.current = val
            this.getPageList()
        },
        // 图表
        FirstEcharts(){
          // 基于准备好的dom，初始化echarts实例
          var myChart = this.$echarts.init(document.getElementById("one-chart"))
          // 配置图表
          var option = {
                title: {
                    text: "今日已售出商品数量",
                    // subtext: "852件",
                    textStyle: {
                        fontSize: 20,
                        color: '#4B6DF9'
                    },
                    /* subtextStyle: {
                        fontSize: 15
                    } */
                },

                xAxis: {
                    type: 'category',
                    data: ['0', '4', '8', '12', '16', '20', '24']
                },
                yAxis: {
                    type: 'value',
                },
   
                series: [
                    {
                    data: [650, 932, 901, 700, 1290, 1330, 1500],
                    type: 'line',
                    smooth: true
                    }
                ]
            };
          // 使用刚刚指定的配置项和数据显示图集
          myChart.setOption(option)
        },
        // 接收子组件[Range]传递过来的数据
        getMin(min){
            this.searchForm.min = parseInt(min)
            // console.log(this.searchForm.min);
        },
        getMax(max){
            this.searchForm.max = parseInt(max)
            // console.log(this.searchForm.max);
            // console.log(this.searchForm);
        },
        // 搜索
        onSubmit(){
            // console.log(formName);
            const arr = this.tableData.filter((p) => {
                return p.title.indexOf(this.searchForm.keyWord) !== -1
            })
            // console.log(arr);
            // console.log(this.searchForm.keyWord);
            this.showData = arr
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
.chart {
  flex:1;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  width: 100%;
  height: 100%;
}
.e-chart {
  margin-right: 20px;
  width: 100%;
  height: auto;
  min-width: 450px;
  max-height: 300px;
}
</style>