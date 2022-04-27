<template>
<div style="font-size:12px; line-height:60px; display: flex;">
  <div style="font-size:20px; font-weight:500; color: #fff; margin-right: 30px;"> <i class="el-icon-s-flag"></i> 实时救助管理平台</div>
<el-menu  default-active="2" class="el-menu-vertical-demo" text-color="#fff" background-color="#3369BB" mode="horizontal" @select="handleSelect" router>
    
    <el-menu-item index="/audit">审核求助</el-menu-item>
    <el-menu-item index="/knowledge">知识管理</el-menu-item>
    <el-menu-item index="/team">救援队管理</el-menu-item>

</el-menu>

</div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.el-menu--horizontal>.el-menu-item.is-active{
  border-bottom: none !important;
  color: #fff;
  background: #204E97 !important;
}
.el-menu--horizontal>.el-menu-item{
  border-bottom: none !important;
}
.el-card__body{
  border: 0 !important;
}
</style>
