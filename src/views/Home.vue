
<template>
  <Navi />
  <div
    class="home"
    style="
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    "
  >

    <el-button size="primary" class="deleteButton" @click="downPDF()"
      >下载个人简历</el-button
    >
    <el-button size="primary" class="deleteButton" @click="logout()"
      >退出登录</el-button
    >
  </div>
</template>

<script>
import Navi from "@/components/Navi";
import router from "@/router/index.js";
import { downloadPost } from "@/service/genServ.js";
export default {
  name: "Home",
  data() {
    return {
      emailExist:false,
      dataList: [],
    };
  },
  components: {
    Navi,
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      router.push("/login");
    },
    downPDF() {
      downloadPost(
        "http://localhost:9090/api/teach/getStudentIntroducePdf",
        "个人简历",
        {studentId:1}
      );
    },
    
  },
};
</script>
