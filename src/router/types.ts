// vue 自带路由类型
import type { RouteRecordRaw } from 'vue-router'
// 扩展路由类型
export interface RouteItem {
  path?: string // 路径
  name?: string // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
  redirect?: string //当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
  hidden?: boolean // 当设置 true 的时候该路由不会在侧边栏出现 如401，login等页面
  alwaysShow?: boolean // 设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
  meta?: {
    title: string // 设置该路由在侧边栏和面包屑中展示的名字
    icon?: string // 图标名称
    affix?: boolean // 如果设置为true，它则会固定在tags-view中(默认 false)
    noCache?: boolean // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
  }
  children?: RouterArray
}

export type RouterRow = RouteRecordRaw & RouteItem
export type RouterArray = Array<RouterRow>
