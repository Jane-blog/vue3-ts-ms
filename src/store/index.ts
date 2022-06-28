import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState } from './types'
import type { IStore } from './types'
import user from './user'

const store = createStore<IRootState>({
  state() {
    return {
      name: ''
    }
  },
  mutations: {},
  actions: {},
  modules: {
    user
  }
})

export function useStore(): Store<IStore> {
  return useVuexStore()
}

export default store
