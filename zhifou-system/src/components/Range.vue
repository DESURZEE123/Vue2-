<template>
     <div class="range">
        <el-form ref="form" :model="form" :rules="rules" class="range">
            <el-form-item prop="min">
                <el-input 
                    prefix-icon="iconfont icon-qian"
                    v-model="form.min" 
                    style="width: 94px;"
                    @change="handleMinChange"
                    @blur="sendMin()"
                ></el-input>
            </el-form-item>
            ~
            <el-form-item prop="max">
                <el-input 
                    prefix-icon="iconfont icon-qian"
                    v-model="form.max" 
                    style="width: 95px;"
                    @change="handleMaxChange"
                    @blur="sendMax()"
                ></el-input>
            </el-form-item>
        </el-form>
        <i class="iconfont .icon-qian"></i>
     </div>
</template>
  
<script>
    export default {
      name: '',
      data () {
         return {
            form:{
                min:"",
                max:"",
            },
            MIN_NUMBER:0,
            MAX_NUMBER:999999999,
            rules:{
                min:[
                    // validator：自定义表单属性
                    // validateCom：自定义校验规则————公共检验方法
                    // trigger：建议每次验证对象中都添加一次，保证代码的健壮性
                    {validator:this.validateCom, trigger:'blur'},
                    {validator:this.validateMin, trigger:'blur'},
                ],
                max:[
                    {validator:this.validateCom, trigger:'blur'},
                    {validator:this.validateMax, trigger:'blur'},
                ],
            },

        }
       },
      // created: 在模板渲染成html 页面之前调用，通常初始化某些属性值，然后再渲染成视图
      created () {
        // this.getFormData()
      },

      // 在模板渲染成 html 页面之后调用，通常是初始化页面完成后，再对 html 的 dom 节点进行一些需要的操作
      mounted () {
        // console.log(this.$refs.form);
      },
      // 页面调用方法
      methods: {
        getFormData() {
            const ret = {}
            this.$refs.form.validate((valid) => {
                ret.valid = valid
                ret.form = this.form
            })
            return ret
        },
        // 重置表单
        resetForm(){
            this.$refs.form.resetFields()
        },
        // 对 min 进行表单校验
        handleMinChange(){
            // validateField 对部分表单字段进行校验的方法
            this.$refs.form.validateField('min')
        },
        // 对 max 进行表单校验
        handleMaxChange(){
            this.$refs.form.validateField('max')
        },
        // 自定义校验模板
        // 公共校验方法：正整数校验、区间校验
        validateCom(rule, value, callback) {
            // input输出的始终是字符串类型，需要转换成数字后进行比对
            const one = Number(value)
            // 判断是否输入的是整数
            if(Number.isInteger(one)) {
                if(one <= this.MIN_NUMBER) {
                    return callback(new Error(`输入值必须大于${this.MIN_NUMBER}`))
                } else if(one > this.MAX_NUMBER) {
                    return callback(new Error(`输入值必须小于${this.MAX_NUMBER}`))
                } 
                return callback()
            }
            return callback(new Error('输入值必须为正整数'))
        },
        // 关联校验
        validateMin(rule, value, callback) {
            const one = Number(value)
            const max = Number(this.form.max)
            if(!max || one < max) {
                return callback()
            }
            return callback(new Error('输入值不得大于最大阈值'))
        },
        validateMax(rule, value, callback) {
            const one = Number(value)
            const min = Number(this.form.min)
            if(!one || one > min) {
                return callback()
            }
            return callback(new Error('输入值不得小于最小阈值'))
        },
        // 传递给父组件[index] min 和 max 值
        sendMin(){
            // 触发 index组件身上的getMin()事件
            this.$emit('getMin',this.form.min)
        },
        sendMax(){
            // 触发 index组件身上的getMin()事件
            this.$emit('getMax',this.form.max)
        },

      }
    }
</script>
  
<style scoped>
.range {
    display:inline;
}
</style>