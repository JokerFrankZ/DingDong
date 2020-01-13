import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchStr: ''
  },
  mutations: {
    querySearch(state, str) {
      state.searchStr = str.trim()
    }
  },
  getters: {
    searchStr: state => {
      return state.searchStr
    }
  },
  actions: {},
  modules: {}
})
