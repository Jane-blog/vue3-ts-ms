import { createRouter, createWebHashHistory } from 'vue-router'
import { getCache } from '@/common/utils'
import Layout from '@/layout'

export const routes = [
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    hidden: false,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 路由白名单(不需要token的)
const whiteList = ['/login']

// 路由前置守卫
router.beforeEach(async(from, to, next) => {
  const token = getCache('username')
  if (to.path === '/login') {
    next()
  } else {
    if (token) { // 存在token, 进入主页,不存在就到登录页面
      next({ path: '/login' })
    } else {
      next()
    }
  }
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
