<template>
<div>
<div style="padding:10px">
<el-form ref="form" :model="form" label-width="50px">
  <el-form-item label="标题">
    <el-input v-model="form.title" style="width:80%"></el-input>
  </el-form-item>
  <el-form-item label="描述">
    <el-input v-model="form.describe" style="width:80%"></el-input>
  </el-form-item>
  <el-form-item label="内容">
    <mavon-editor ref="md" v-model="form.content" :ishljs="true" @imgAdd="imgAdd"></mavon-editor>
  </el-form-item>
  <el-form-item style="justify-content: right; display:flex; margin:20px">
    <el-button type="primary" @click="save">保存</el-button>
  </el-form-item>
  
</el-form>
</div>

</div>

  
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            form:{}
        }
    },
    created(){
        this.form = this.$route.query
    },
    methods:{
        imgAdd(pos,$file){
            let $vm = this.$refs.md
            //上传图片到服务器
            const formData = new FormData();
            formData.append('file',$file)
            axios({
                url:'',//后端文件上传网址
                method: 'post',
                data: formData,
                headers: {'Content-Type': 'multipart/form-data'},
            }).then((res)=>{
                //将返回的url替换到文本原位置
                $vm.$img2Url(pos,res.data)
            })
        },
        save(){

        }
    }
}
</script>

<style>

.shadow {
    box-shadow: none;
}
</style>