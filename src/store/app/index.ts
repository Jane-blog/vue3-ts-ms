import { constantRoutes } from '@/router'
import type { RouterArray } from '@/router/types'
const app = {
  namespaced: true,
  state() {
    return {
      routes: [], // 静态路由
      addRoutes: [] // 过滤后的异步路由
    }
  },
  mutations: {
    configRoutes(state: any, addRoutes: RouterArray) {
      state.routes = constantRoutes.concat(addRoutes)
    }
  },
  actions: {
    generateRoutes({ commit }) {
      commit('configRoutes', [])
    }
  }
}

export default app
