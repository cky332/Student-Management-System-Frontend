import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/views/Login'

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/Register',
    name: 'Regiter',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/FindPassword',
    name: 'FindPassword',
    component: () => import('@/views/FindPassword.vue')
  },

  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/BaseTable',
    name: 'BaseTable',
    component: () => import('@/views/dashboard/BaseTable.vue')
  },
  {
    path: '/BaseTableOne',
    name: 'BaseTableOne',
    component: () => import('@/views/Table/BaseTableOne.vue')
  },
  {
    path: '/BaseTableTwo',
    name: 'BaseTableTwo',
    component: () => import('@/views/Table/BaseTableTwo.vue')
  },
  {
    path: '/BaseForm',
    name: 'BaseForm',
    component: () => import('@/views/dashboard/BaseForm.vue')
  },

  {
    path: '/Course',
    name: 'Course',
    component: () => import('@/views/Table/Course.vue')
  },

  {
    path: '/CourseChoose',
    name: 'CourseChoose',
    component: () => import('@/views/Table/CourseChoose.vue')
  },
  {
    path: '/Activity',
    name: 'Activity',
    component: () => import('@/views/Table/Activity.vue')
  },
  {
    path: '/Chooser',
    name: 'Chooser',
    component: () => import('@/views/Table/Chooser.vue')
  },
  {
    path: '/Teacher',
    name: 'Teacher',
    component: () => import('@/views/Table/Teacher.vue')
  },
  {
    path: '/TeacherIntroduction',
    name: 'TeacherIntroduction',
    component: () => import('@/views/Table/TeacherIntroduction.vue')
  },
  // 修改
  {
    path: '/StudentIntroduction',
    name: 'StudentIntroduction',
    component: () => import('@/views/Table/StudentIntroduction.vue')
  },
  {
    path: '/StudentIntroductionEdit',
    name: 'StudentIntroductionEdit',
    component: () => import('@/views/dashboard/StudentIntroductionEdit.vue')
  },
  {
    path: '/StudentCourseTable',
    name: 'StudentCourseTable',
    component: () => import('@/views/Table/StudentCourseTable.vue')
  },
// 以下为修改界面的路由
  {
    path: '/CourseEdit',
    name: 'CourseEdit',
    component: () => import('@/views/dashboard/CourseEdit.vue')
  },

  {
    path: '/CourseChooseEdit',
    name: 'CourseChooseEdit',
    component: () => import('@/views/dashboard/CourseChooseEdit.vue')
  },
  {
    path: '/ActivityEdit',
    name: 'ActivityEdit',
    component: () => import('@/views/dashboard/ActivityEdit.vue')
  },
  {
    path: '/ChooserEdit',
    name: 'ChooserEdit',
    component: () => import('@/views/dashboard/ChooserEdit.vue')
  },
  {
    path: '/TeacherEdit',
    name: 'TeacherEdit',
    component: () => import('@/views/dashboard/TeacherEdit.vue')
  },
  {
    path: '/TeacherIntroductionEdit',
    name: 'TeacherIntroductionEdit',
    component: () => import('@/views/dashboard/TeacherIntroductionEdit.vue')
  },
  {
    path: '/AchievementEdit',
    name: 'AchievementEdit',
    component: () => import('@/views/dashboard/AchievementEdit.vue')
  },
  {
    path: '/AchievementChooserEdit',
    name: 'AchievementChooserEdit',
    component: () => import('@/views/dashboard/AchievementChooseEdit.vue')
  },
  {
    path: '/Achievement',
    name: 'Achievement',
    component: () => import('@/views/Table/Achievement.vue')
  },
  {
    path: '/AchievementChooser',
    name: 'AchievementChooser',
    component: () => import('@/views/Table/AchievementChooser.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
