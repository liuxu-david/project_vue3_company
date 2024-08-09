// 创建history路由实例
import { createRouter,createWebHistory } from "vue-router";
import { checkTokenTimeOut } from "../utils/checkToken";

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/layout/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/slot',
    name: 'slot',
    component: () => import('../views/slot/Page.vue')
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('../views/error/404.vue')
  }
]
const router = new createRouter({
  history: createWebHistory(),  
  routes
})

// 添加全局路由守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    const token = localStorage.getItem('token')
    if (!token) {
      console.log("登录失败");
      next('/login')
    } else {
      console.log("登录成功");
      next()
    }
  }
})

export default router;