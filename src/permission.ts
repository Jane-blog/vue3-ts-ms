import router from '@/router'
// 引入路由加载进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 全局进度条的配置
/*
 * 全局进度条的配置
 * easing 动画方式
 * speed 递增进度条的速度
 * showSpinner 是否显示加载ico
 * trickleSpeed 自动递增间隔
 * minimum 初始化时的最小百分比
 *
 */
NProgress.configure({
  easing: 'ease',
  speed: 1000,
  showSpinner: false,
  minimum: 0.3
})
import { getToken } from '@/utils/auth'

// 白名单
const whiteList = ['/login', '/404']

/**
 * to 要去的路由
 * from 当前路由
 * next() 进入到要去的路由
 */
router.beforeEach(async (to: any, from: any, next: any) => {
  NProgress.start()
  const hasToken: string | null | undefined = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login`)
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
