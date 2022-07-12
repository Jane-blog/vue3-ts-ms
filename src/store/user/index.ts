import router from '@/router'
import type { Module } from 'vuex'
import type { UserState } from './types'
import type { IRootState } from '../types'
import { userLogin, userLogout } from '@/service/api/user'
import { setToken, removeToken } from '@/utils/auth'

const user: Module<UserState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: ''
    }
  },
  mutations: {
    saveToken(state: any, token: string) {
      state.token = token
    }
  },
  actions: {
    userLoginAction(
      { commit },
      account: { username: string; password: string }
    ) {
      // 用户登录
      return new Promise<void>((resolve, reject) => {
        userLogin(account)
          .then((res: any) => {
            console.log(' 用户登录', res)
            commit('saveToken', res.token)
            setToken(res.token)
            router.push('/')
            resolve()
          })
          .catch((error: any) => {
            reject(error)
          })
      })
    },
    userLogoutAction({ commit }) {
      return new Promise<void>((resolve, reject) => {
        userLogout()
          .then(() => {
            logOut(commit)
            resolve()
          })
          .catch((error) => {
            logOut(commit)
            reject(error)
          })
      })
      commit('saveToken', '')
      removeToken()
    }
  }
}

export const logOut = (commit) => {
  commit('saveToken', '')
  removeToken()
}

export default user
