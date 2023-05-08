// Solucionado el problema importando la store 

import { createStore } from 'vuex'
import { counterModule } from './counter-store'


export const store = () => createStore({
  modules: {
     counterMod: counterModule
  }
})

