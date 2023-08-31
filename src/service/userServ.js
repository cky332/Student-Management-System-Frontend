import axios from "axios";
import { ElMessage } from 'element-plus'
function userLoginReq(username, password) {
    return axios.post('http://localhost:9090/api/auth/login',
    // return axios.post('/api/auth/login',
        {
            username: username,
            password: password
        }).then(res => {
            console.log( res.data);
            return res.data
            
        })
    
}
function signup(username, password,role,receiver,num){
    console.log("userservice",username, password,role,receiver,num);
    return axios.post('http://localhost:9090/api/auth/signup',
    // return axios.post('/api/auth/login',
    {   
        username: username,
        password: password,
        role:role,
        receiver:receiver,
       num:num
    }).then(res => {
        if (res.status == 500) {

            ElMessage({
                type: 'warnning',
                message: '用户名重复'
            });
            return;
        }
        if (res.status == 404) {
            ElMessage({
                type: 'warnning',
                message: '后端方法不存在'
            });
            return;
        }
        if (res.status == 200) {
            ElMessage({
                type: 'success',
                message: '注册成功'
            });
            return res.data.accessToken;
        }
        
    })
}
function changePassword(username, password){
    console.log("changePassword",username, password);
    return axios.post('http://localhost:9090/api/auth/changePassword',
    // return axios.post('/api/auth/login',
    {   
        username: username,
        password: password,
        
       
    }).then(res => {
        if (res.status == 500) {

            ElMessage({
                type: 'warnning',
                message: '用户名重复'
            });
            return;
        }
        if (res.status == 404) {
            ElMessage({
                type: 'warnning',
                message: '后端方法不存在'
            });
            return;
        }
        if (res.status == 200) {
            ElMessage({
                type: 'success',
                message: '修改成功'
            });
            return res.data.accessToken;
        }
        
    })
}

export {
    userLoginReq,
    signup,
    changePassword
}