<template>
  <el-container style="min-height: 100vh">
    <el-header style="background: #3369BB">
      <Header />
    </el-header>

    <el-main style="margin:10px; padding:10px; border-radius:20px; border:solid 1px #e6e6e6; ">
        <!-- 表示当前页面的子路由会在router-view里面展示 -->
        <router-view />
    </el-main>
  </el-container>
</template>

<script>
import Header from "@/components/Header.vue"
export default {
components:{Header}
}
</script>

<style>
.el-card__body, .el-main {
    padding: 0;
}
.el-menu-item.is-active {
    background: #3369BB;
    color: #fff;
}
.el-menu {
    border-right: none;
}
</style>