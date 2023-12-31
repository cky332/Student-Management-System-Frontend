import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/createStore'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import "@/styles/index.scss";


router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login',"/Register","/FindPassword","/ChangePassword"];
  const authRequired = !publicPages.includes(to.path);

  var loggedIn = store.state.loggedIn

  if (authRequired && !loggedIn) {
    return next('/login');
  }
  next();
})

createApp(App)
  .use(ElementPlus)
  .use(store).use(router).mount('#app')