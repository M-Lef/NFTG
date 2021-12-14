import { createStore } from 'vuex'

export default createStore({
  state: {
    collapsed: false,
    NavBarwidth: `${11}vw`,
    active: ''
  },
  mutations: {
    toggleBar (state) {
      state.collapsed = !state.collapsed
      if (state.NavBarwidth === `${11}vw`) {
        state.NavBarwidth = `${3}vw`
      } else {
        state.NavBarwidth = `${11}vw`
      }
    }
  },
  modules: {
  }
})
