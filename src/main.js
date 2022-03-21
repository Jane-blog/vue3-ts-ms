import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

// 全局css
import 'normalize.css'
import '@/styles/index.less'

// icon图标
import installIcons from '@/icons'

// ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
installIcons(app)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
