import { createStore } from 'vuex'

export default createStore({
  state: {
    collapsed: false
  },
  mutations: {
    toggleBar (state) {
      state.collapsed = !state.collapsed
    }
  },
  actions: {
    sidebarWidth (state) {
      return state.collapsed ? 38 : 180
    }
  },
  modules: {
  }
})
