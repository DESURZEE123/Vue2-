<template>
     <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="item in breadcrumbList" :key="'breadcrumb_' + item.path">
                {{ item.meta.title }}
            </el-breadcrumb-item>
        </el-breadcrumb>
     </div>
</template>
  
<script>
    export default {
      computed: {
        breadcrumbList(){
            return this.$route.matched
        }
      },
    }
</script>
  
<style scoped>

</style>