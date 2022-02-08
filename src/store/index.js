import Vue from 'vue'
import Vuex from 'vuex'

/* globalModules */
import DictionariesStore from './modules/dictionaries/dictionariesStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    DictionariesStore
  }
})
