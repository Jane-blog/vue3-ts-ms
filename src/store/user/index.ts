import router from '@/router'
import type { Module } from 'vuex'
import type { UserState } from './types'
import type { IRootState } from '../types'
import { userLogin } from '@/service/api/user'
import { setToken } from '@/utils/auth'

const user: Module<UserState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: ''
    }
  },
  getters: {},
  mutations: {
    saveToken(state: any, token: string) {
      state.token = token
    }
  },
  actions: {
    userLoginAction(
      // eslint-disable-next-line @typescript-eslint/ban-types
      { commit }: { commit: Function },
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
    }
  }
}

export default user
