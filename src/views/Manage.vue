<template>
  <el-container style="min-height: 100vh">
      <el-header style="background: #3369BB">
      <Header />
      </el-header>

      <el-main>
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

</style>