const getters = {
  sidebarOpened: (state) => state.app.sidebarOpened,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews
}

export default getters
