import { createStore } from 'vuex'

export default createStore({
  state: {
    collapsed: false,
    NavBarwidth: `${18}vw`,
    active: ''
  },
  mutations: {
    toggleBar (state) {
      state.collapsed = !state.collapsed
      if (state.NavBarwidth === `${18}vw`) {
        state.NavBarwidth = `${6}vw`
      } else {
        state.NavBarwidth = `${18}vw`
      }
    }
  },
  modules: {
  }
})
