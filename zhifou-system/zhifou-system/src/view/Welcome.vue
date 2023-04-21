<template>
     <div class="content">
        <!-- 运营状况 -->
        <div class="mian-info">
            <el-card class="box-card">
              <!-- 使用el-button -->
              <el-button type="primary" icon="el-icon-user-solid" circle></el-button>
              <h2 class="num-info">112233</h2>
              <p class="desc">总用户数</p>
            </el-card>
            <el-card class="box-card">
              <!-- 使用el-button -->
              <el-button  type="success" icon="el-icon-check" circle></el-button>
              <h2 class="num-info">112233</h2>
              <p class="desc">总课程数</p>
            </el-card>
            <el-card class="box-card">
              <!-- 使用el-button -->
              <el-button type="danger" icon="el-icon-star-off" circle></el-button>
              <h2 class="num-info">112233</h2>
              <p class="desc">总订单数</p>
            </el-card>
            <el-card class="box-card">
              <!-- 使用el-button -->
              <el-button type="warning" icon="el-icon-message" circle></el-button>
              <h2 class="num-info">112233</h2>
              <p class="desc">总收入</p>
            </el-card>
        </div>
        <!-- 图表 -->
        <div class="chart">
            <el-card class="e-chart" id="one-chart"></el-card>
            <el-card class="e-chart" id="two-chart"></el-card>
        </div>
    </div>
</template>
  
<script>
    export default {
      name: '',
      components: {},
      data () {
         return {
        }
       },
      computed: {},
      watch: {},
      // created: 在模板渲染成html 页面之前调用，通常初始化某些属性值，然后再渲染成视图
      created () {
      },
      // 在模板渲染成 html 页面之后调用，通常是初始化页面完成后，再对 html 的 dom 节点进行一些需要的操作
      mounted () {
        this.FirstEcharts()
        this.SecondtEcharts()
      },
      // 页面调用方法
      methods: {
        // 图表
        FirstEcharts(){
          // 基于准备好的dom，初始化echarts实例
          var myChart = this.$echarts.init(document.getElementById("one-chart"))
          // 配置图表
          var option = {
              legend: {
                data: ['Allocated Budget', 'Actual Spending']
              },
              radar: {
                // shape: 'circle',
                indicator: [
                  { name: '', max: 6500 },
                  { name: 'Administration', max: 16000 },
                  { name: 'Information Technology', max: 30000 },
                  { name: 'Customer Support', max: 38000 },
                  { name: 'Development', max: 52000 },
                  { name: 'Marketing', max: 25000 }
                ]
              },
              series: [
                {
                  name: 'Budget vs spending',
                  type: 'radar',
                  data: [
                    {
                      value: [4200, 3000, 20000, 35000, 50000, 18000],
                      name: 'Allocated Budget'
                    },
                    {
                      value: [5000, 14000, 28000, 26000, 42000, 21000],
                      name: 'Actual Spending'
                    }
                  ]
                }
              ]
            };
          // 使用刚刚指定的配置项和数据显示图集
          myChart.setOption(option)
        },
        SecondtEcharts(){
          // 基于准备好的dom，初始化echarts实例
          var myChart = this.$echarts.init(document.getElementById("two-chart"))
          // 配置图表
          var option = {
            title: {
              text: 'Referer of a Website',
              subtext: 'Fake Data',
              left: 'center'
            },
            tooltip: {
              trigger: 'item'
            },
            legend: {
              orient: 'vertical',
              left: 'left'
            },
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                  { value: 1048, name: 'Search Engine' },
                  { value: 735, name: 'Direct' },
                  { value: 580, name: 'Email' },
                  { value: 484, name: 'Union Ads' },
                  { value: 300, name: 'Video Ads' }
                ],
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          };
          // 使用刚刚指定的配置项和数据显示图集
          myChart.setOption(option)
        },
      }
    }
</script>
<style scoped>
.content {
  margin-top: 20px;
  display: flex;
  /* 主轴为垂直方向，起点在上沿。 */
  flex-direction: column;
  height: 100%;
  /* height: 300px; */
}
.mian-info {
  flex: 1;
  display: flex;
  justify-content: space-around;
  background: white;
  min-width: 800px;
  border-radius: 8px;
}
.box-card {
  width: 18%;
  height: 60%;
  align-self: center;
  text-align: center;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  display: flex;
}
.box-card .num-info{
  margin: 10px 0px;
}
.box-card .desc {
  font-size:7px;
  color:gray;
}
.chart {
  flex:1;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  width: 100%;
  height: 100%;
}
.e-chart{
  padding-top: 10px;
  width: 49%;
  height: auto;
  min-width: 500px;
}
</style>