import { createStore } from 'vuex'

export const responsiveStore = createStore({
    namespaced: true,
  state : {
      isMobile: false
  },
  mutations: {
    setIsMobile(state) {
      state.isMobile = !state.isMobile
    },
  }, 
  actions: {
    setIsMobile: ({ commit }) => commit('setIsMobile'),
  }
})
