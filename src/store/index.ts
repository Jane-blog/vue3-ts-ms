import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState } from './types'
import type { IStore } from './types'
import user from './user'
import app from './app'
import tags from './tags'

const store = createStore<IRootState>({
  state() {
    return {
      name: ''
    }
  },
  mutations: {},
  actions: {},
  modules: {
    user,
    app,
    tags
  }
})

export function useStore(): Store<IStore> {
  return useVuexStore()
}

export default store
