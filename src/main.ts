import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局样式
import './assets/css/index.css'
import 'normalize.css'

/**element-plus指定组件引入**/
// import { registerElement } from './global'

/**element-plus全局引入**/
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 路由权限拦截
import './permission'

/**
 * 测试环境下 引入自定义的mockRequest
 * 因为mockRequest不是默认导出的：export default{}
 * 所以引入时需要加大括号，这种可以引入多个
 */
if (process.env.NODE_ENV === 'development') {
  const { mockRequest } = require('../mock')
  mockRequest()
}

const app = createApp(App)

app.use(store)
app.use(router)

// 注册插件
app.use(ElementPlus)

app.mount('#app')
