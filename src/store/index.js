import Vue from 'vue'
import Vuex from 'vuex'

/* globalModules */
import ComicsStore from './modules/comons/comicsStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ComicsStore
  }
})
