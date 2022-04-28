<template>
<el-row class="tac" style="margin-top:20px;">
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      router
      >
      <el-menu-item index="/knowledge/showed" style="text-align:center">
        <span slot="title">知识查看</span>
      </el-menu-item>
      <el-menu-item index="/knowledge/hidden" style="text-align:center">
        <span slot="title">已隐藏</span>
      </el-menu-item>

  </el-menu>
</el-row>
</template>

<script>
export default {
  name:'knowledgeAside'
}
</script>

<style>

</style>