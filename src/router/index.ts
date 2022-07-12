import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouterArray } from './types'
import Layout from '@/layout/index.vue'

export const constantRoutes: RouterArray = [
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    hidden: false,
    alwaysShow: true,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '首页', icon: 'icon_home', affix: true, noCache: true }
      }
    ]
  },
  {
    path: '/elementPlus',
    component: Layout,
    redirect: 'noRedirect',
    hidden: false,
    alwaysShow: true,
    meta: { title: 'Element Plus', icon: 'icon_element' },
    children: [
      {
        path: 'from',
        name: 'From',
        component: () => import('@/views/elementPlus/from/index.vue'),
        meta: { title: '表单', icon: 'icon_from', affix: false, noCache: false }
      },
      {
        path: 'table',
        name: 'Tbale',
        component: () => import('@/views/elementPlus/table/index.vue'),
        meta: {
          title: '表格',
          icon: 'icon_table',
          affix: false,
          noCache: false
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
