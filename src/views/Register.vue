<template>
   <div class="register-container">
        <el-form :model="registerModel" :rules="rules" ref="registerForm" label-width="100px" class="register-form">
            <el-form-item label="用户昵称" prop="nickName" >
                <el-input 
                  v-model="username"
                  type="text"
                  placeholder="请输入用户昵称"/>
            </el-form-item>
            <el-form-item label="角色"  >
                <input 
                  value="TEACHER"
                  v-model="role"
                  type="radio"
                  />教师
                  <input 
                  value="STUDENT"
                  v-model="role"
                  type="radio"
                  />学生
                  <input 
                  value="ADMIN"
                  v-model="role"
                  type="radio"
                  />管理员
            </el-form-item>
            <el-form-item label="邮箱" prop="receiver">
                <el-input v-model="receiver" type="text" placeholder="请输入邮箱" />
            </el-form-item>
            <el-form-item label="学号或者教师号" prop="receiver">
                <el-input v-model="num" type="text" placeholder="请输入学号或者教师号" />
            </el-form-item>
            <el-form-item label="登录密码" prop="password" >
                <el-input 
                  v-model="password" 
                  type="password"
                  placeholder="请输入密码"
                  suffix-icon="el-icon-lock"/>
            </el-form-item>
            <el-form-item label="确认密码" prop="password2" >
                <el-input 
                  v-model="password2"
                  type="password"
                  :show-password="false"  
                  placeholder="请再次输入密码"
                  suffix-icon="el-icon-lock" />
            </el-form-item>
            <el-form-item class="btn-area">
               <el-button class="submit-btn" type="primary" :loading="onLoading"  @click="handleRegister()">提交</el-button>
               <el-button class="reset-btn" type="info" @click="resetForm('registerForm')">重置</el-button> 
               <el-button class="reset-btn" type="info" @click="goHome()">回到首页</el-button> 
            </el-form-item>
        </el-form>
    </div>
</template>
 

<script>
//import { signup } from '@/service/userServ.js'
export default {
    name: "Register",
    data() {
      
      return {
        username: "",
        password: "",
        password2: "",
        role:"",
        receiver:"",
        num:""
      };
    },
    
    methods: {
      handleRegister() {
        const form = {
          username:this.username,
          password:this.password,
          role:this.role,
          receiver: this.receiver,
          num:this.num
        }
        console.log(form);
      if ( this.username && this.password) {
        if (this.password!=this.password2) {
          this.$message({
              message: "两次输入密码不一致 ",
              type: "warning",
            });
        }else{
        this.$store
          .dispatch("register",{
            username: form.username,
            password: form.password,
            role:form.role,
            receiver: form.receiver,
            num:form.num
          }).catch((res) => {
            this.$message({
              message: res.$message,
              type: "warning",
            });
          });
         // this.$message({
           //             message: res.message,
             //           type: "success",
               //     });
        }  
          }   
      },
      goHome(){
        this.$router.push({
          path: "/",
      });
      }
    },
  };
  </script>
  
  
  <style lang="scss" scoped>
    .register-container{
        margin-top: 100px;
        margin-left: 10%;
        .el-input{
            width: 60%;
        }
        .avatar-uploader .avatar{
            width: 240px;
            height: 240px;
        }
        .el-button.submit-btn{
            width: 10%;
            height: 40px;
            margin-left: 150px;
            margin-right: 25px;
        }
        .el-button.reset-btn{
            width: 10%;
            height: 40px;
        }
    }
</style>
  