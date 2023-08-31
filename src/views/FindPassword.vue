<template>
    <div class="register-container">
        <el-form :model="findPasswordModel" :rules="rules" ref="findPasswordForm" label-width="100px"
            class="findPassword-form">
            <el-form-item label="用户昵称" prop="nickName" >
                <el-input 
                  v-model="username"
                  type="text"
                  placeholder="请输入用户昵称"/>
            </el-form-item>
            <el-form-item label="验证码" prop="captcha">
                <el-input v-model="captcha" type="captcha" placeholder="请输入验证码" />
            </el-form-item>
            <el-form-item v-if="captrue" label="登录密码" prop="password" >
                <el-input 
                  v-model="password" 
                  type="password"
                  placeholder="请输入密码"
                  suffix-icon="el-icon-lock"/>
            </el-form-item>
            <el-form-item v-if="captrue" label="确认密码" prop="password2" >
                <el-input 
                  v-model="password2"
                  type="password"
                  :show-password="false"  
                  placeholder="请再次输入密码"
                  suffix-icon="el-icon-lock" />
            </el-form-item>
            <el-form-item class="btn-area">
                <el-button class="submit-btn" type="primary" @click="sendCaptchaButton(this.receiver)">发送验证码</el-button>
                <el-button class="reset-btn" type="info" @click="handleInputCaptchaButton(this.receiver, this.captcha)">
                    提交验证码</el-button>
                    <el-button v-if="captrue" class="submit-btn" type="primary" :loading="onLoading"  @click="handleRegister()">提交修改密码</el-button>
                <el-button class="reset-btn" type="info" @click="goHome()">回到首页</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { sendCaptcha, verifyCaptcha, } from "@/service/genServ.js";
export default {
    name: "FindPassword",
    data() {
        return {
            theResult: {
                result: "",
            },
            username: "",
            captcha: "",
            captrue:false
        };
    },
    methods: {
        sendCaptchaButton() {
            sendCaptcha({ username: this.username }).then((res) => {
                this.form = res.data.form;
            });
        },
        handleInputCaptchaButton(username, captcha) {
            verifyCaptcha({ username: this.username, captcha: captcha }).then((res) => {
                this.theResult = res.data.theResult;
                if(this.theResult.result === true){
                    alert("验证码正确")
                    this.captrue = true;
                    
                }else {
                    alert("验证码错误")
                }
            });
        },
        handleRegister() {
        const form = {
          username:this.username,
          password:this.password,
          
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
          .dispatch("changePassword",{
            username: form.username,
            password: form.password,
           
          }).catch((res) => {
            this.$message({
              message: res.$message,
              type: "warning",
            });
          });
        
        }  
          }   
      },
        goHome() {
            this.$router.push({
                path: "/",
            });
        },
        goNext() {
            this.$router.push({
                path: "/ChangePassword",
                query: { username: this.username },
            });
        }
    },
};
</script>
   
   
<style lang="scss" scoped>
.register-container {
    margin-top: 100px;
    margin-left: 10%;

    .el-input {
        width: 60%;
    }

    .avatar-uploader .avatar {
        width: 240px;
        height: 240px;
    }

    .el-button.submit-btn {
        width: 10%;
        height: 40px;
        margin-left: 150px;
        margin-right: 25px;
    }

    .el-button.reset-btn {
        width: 10%;
        height: 40px;
    }
}
</style>
   