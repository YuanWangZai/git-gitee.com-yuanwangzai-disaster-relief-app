<template>
<div style="display: flex; justify-content:center;">
  <div class="login-container">
      <div style="width:300px; height:300px; display:flex"><img style="width:100%; height:100%;" src="../assets/login.png"/></div>
      <div style="width:300px; height:300px; display: flex; justify-content:center;">
          <div style="margin:20px">
            <div style="margin:20px 0; text-align:center;font-size:20px"><b>登录</b></div>

            <el-form :rules="rules" :model="user">
                <el-form-item  prop="username">
                    <el-input size="medium" style="margin: 5px 0" prefix-icon="el-icon-user" v-model="user.username" placeholder="志愿者账号"></el-input>
                </el-form-item>
                <el-form-item  prop="password">
                    <el-input prop="password" size="medium" style="margin: 5px 0" prefix-icon="el-icon-lock" show-password v-model="user.password" placeholder="密码"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="text" style="float:right; margin:-20px; margin-right:0px" @click="handleForgetpassword">忘记密码</el-button>
                </el-form-item>

                <el-form-item> 
                    <div style="margin:0 0; text-align:center">
                        <el-button type="primary" aria-autocomplete="off" style="width:60%; margin-top:5px; border-radius: 20px" @click="login">登录</el-button>
                        <!-- <el-button size = "small" aria-autocomplete="off" @click="$router.push('/register')">注册</el-button> -->
                    </div>
                </el-form-item> 
            </el-form>

        </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
    name:"Login",
    data() {
        return{
            user: {},
            rules: {
                username: [
                    { required: true, message: '请输入志愿者账号', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 3, max: 18, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handleForgetpassword() {
            this.$message.error('请联系管理人员修改密码，电话号：xxxxx')
        },
        login() {
            //登录请求发送
            this.$message.success('登录成功，页面跳转中')
            this.$router.push('/ready')
        }
    },
}
</script>

<style>
.login-container{
    overflow: hidden;
    display: flex;
    justify-content:center;
    margin-top:100px;
    border-radius: 20px;
    width: 600px;
    box-shadow:2px 2px 10px #909090;
}
</style>