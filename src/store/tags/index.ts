const tags = {
  namespaced: true,
  state() {
    return {
      visitedViews: [],
      cachedViews: []
    }
  },
  mutations: {
    addVisitedViews(state, view) {
      if (state.visitedViews.some((v) => v.path === view.path)) {
        return
      } else {
        if (state.visitedViews.some((v) => v.title === view.meta.title)) {
          state.visitedViews.map((item) => {
            if (item.title === view.meta.title) {
              item.path = view.path
              item.fullPath = view.path
            } else {
              item.meta.noCache = false
            }
          })
        } else {
          state.visitedViews.push(
            Object.assign({}, view, {
              title: view.meta.title || 'no-name'
            })
          )
        }
      }
    },
    deleteVisitedViews(state, view) {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews.splice(i, 1)
          break
        }
      }
    }
  },
  actions: {
    addTagView({ commit }, view) {
      commit('addVisitedViews', view)
    },
    deleteTagView({ commit, state }, view) {
      return new Promise((resolve) => {
        commit('deleteVisitedViews', view)
        resolve([...state.visitedViews])
      })
    }
  }
}

export default tags
