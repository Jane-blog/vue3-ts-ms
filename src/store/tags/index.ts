const tags = {
  namespaced: true,
  state() {
    return {
      visitedViews: [] as Array<any>,
      cachedViews: [] as Array<any>
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
      // console.log('---tags visitedViews---', state.visitedViews)
    }
  },
  actions: {
    addTagView({ commit }, view) {
      // console.log('---tags---', view)
      commit('addVisitedViews', view)
    }
  }
}

export default tags
