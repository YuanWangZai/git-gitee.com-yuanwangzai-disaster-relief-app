<template>
<el-row class="tac" style="margin-top:20px;">
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      router
      >

      <el-menu-item index="/audit" style="text-align:center">
        <span slot="title">待审批</span>
      </el-menu-item>
      <el-menu-item index="/audit/approval" style="text-align:center">
        <span slot="title">已审批</span>
      </el-menu-item>
      <el-menu-item index="/audit/helped" style="text-align:center">
        <span slot="title">已救助</span>
      </el-menu-item>
      <el-menu-item index="/audit/cancel" style="text-align:center">
        <span slot="title">已取消</span>
      </el-menu-item>
      <el-menu-item index="/audit/refused" style="text-align:center">  
        <span slot="title">未通过</span>
      </el-menu-item>

  </el-menu>
</el-row>
</template>

<script>
export default {
    name:'mangerAside'
}
</script>

<style>

</style>