import { createStore } from 'vuex'

export const counterModule = createStore({
  namespaced: true,
  state: () => ({
    count: 0
  }),
  mutations: {
    increment (state) {
      state.count++
    },
  }, 
  actions: {
    increment (context) {
      context.commit('increment')
    }
  },
  
})
