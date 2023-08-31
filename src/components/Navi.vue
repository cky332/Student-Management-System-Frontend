<template>
  <div class="navi">
    <el-menu class="header" mode="horizontal" router>
      <el-menu-item index="/" class="menu-item">首页</el-menu-item>
      <el-menu-item index="/Home" class="menu-item">Home</el-menu-item>
      <el-submenu :index="1">
        <template #title>
          <!-- <i class="el-icon-location"></i> -->
          <span class="course-location">课程中心</span>
        </template>
        <el-menu-item index="/Course" v-if="isAdmin || isTeacher || isStudent" >所有课程</el-menu-item>
        <el-menu-item index="/CourseChoose" v-if="isAdmin || isTeacher ||isStudent">选课管理</el-menu-item>
      </el-submenu>
      <el-submenu :index="2" >
        <template #title>
          <span class="course-location">学工管理</span>
        </template>
        <el-menu-item index="/Activity" v-if="isAdmin">活动管理</el-menu-item>
        <el-menu-item index="/Chooser" v-if="isAdmin || isTeacher || isStudent">活动参加</el-menu-item>
        <el-menu-item index="/Achievement" v-if="isAdmin">成果管理</el-menu-item>
        <el-menu-item index="/AchievementChooser" v-if="isStudent">成果参加</el-menu-item>
      </el-submenu>
      <template  v-for="(v, i) in listA" :key="i" >
        <template v-if="v.children.length > 0" >
          <el-submenu :index="i.toString()" v-if="isStudent">
            <template #title>
              <span class="menu-item">{{ v.title }}</span>
            </template>
            <template v-for="(item, j) in v.children" :key="j">
              <el-menu-item class="menu-item-two" :index="'/' + item.name">{{
                  item.title
              }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item class="menu-item" :index="'/' + v.name">{{
              v.title
          }}</el-menu-item>
        </template>
      </template>
      <el-submenu :index="3" v-if="isTeacher">
        <template #title>
          <span class="course-location">教师</span>
        </template>
        <el-menu-item index="/Teacher">教师管理</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>


<script>

import {store} from '@/store/createStore.js'
export default {
  name: "Navi",
  components: {},

  data() {
    return {
      listA: [
        {
          name: "BaseTable",
          title: "学生管理",
          children: [
            {
              name: "BaseTableOne",
              title: "学生管理",
            },
            // {
            //   name: "BaseTabletwo",
            //   title: "表格示例2",
            // },
          ],
        },
        // {
        //   name: "BaseForm",
        //   title: "表单示例",
        //   children: [],
        // },
      ],
      isStudent:true,
      isTeacher:true,
      isAdmin:true
    };
  },
  created(){
    console.log(store.state)
    if (store.state.role=="ROLE_STUDENT") {
      this.isStudent = true;
      this.isTeacher = false;
      this.isAdmin = false
    }else if (store.state.role=="ROLE_TEACHER") {
      this.isTeacher = true
      this.isStudent = false;
      this.isAdmin = false;
    }
  },
  methods: {},
};
</script>
<style scoped>
.navi {
  border-bottom: 4px solid #c80201;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #e8e8e8;
}

.menu-item {
  color: #585858 !important;
  font-size: 18px;
  font-weight: bold;
}

.course-location {
  color: #585858 !important;
  font-size: 18px;
  font-weight: bold;

}
</style>
