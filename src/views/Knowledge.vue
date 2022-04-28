<template>
  <el-container style="min-height: 100vh">
    <el-header style="background: #3369BB">
      <Header />
    </el-header>
    

    <el-container style="height:100%">
      <el-aside style="width:150px; border-right: solid 1px #e6e6e6; min-height: 100%">
        <Aside2 />
      </el-aside>

      <el-main style="margin:10px; padding:10px; border-radius:20px; border:solid 1px #e6e6e6; ">
        <!-- 表示当前页面的子路由会在router-view里面展示 -->
        <router-view />
      </el-main>

      </el-container>
  </el-container>
</template>

<script>
import Header from "@/components/Header.vue"
import Aside2 from "@/components/Aside2.vue"
export default {
components:{Header,Aside2}
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