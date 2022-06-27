// 注册方法
import { App } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export function registerApp(app: App): void {
  app.use(ElementPlus)
}
