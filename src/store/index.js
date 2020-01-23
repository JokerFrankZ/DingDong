import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: window.sessionStorage.getItem('username'),
    searchStr: '',
    shoppingCart: []
  },
  mutations: {
    querySearch(state, str) {
      state.searchStr = str.trim()
    },
    addShoppingCart(state, goodsItem) {
      let isSame = false
      state.shoppingCart.forEach(item => {
        if (item.id === goodsItem.id) {
          isSame = true
        }
      })
      if (isSame) {
        return
      }
      // 防止重复的加入购物车
      state.shoppingCart.push(goodsItem)
    },
    clearShoppingCart(state) {
      state.shoppingCart = []
    },
    deleteGoods(state, id) {
      state.shoppingCart = state.shoppingCart.filter(item => {
        return item.id !== id
      })
    },
    setUserName(state, name) {
      state.userName = name
      window.sessionStorage.setItem('username', name)
    }
  },
  getters: {
    searchStr: state => {
      return state.searchStr.toLowerCase()
    },
    shoppingCart(state) {
      return state.shoppingCart
    },
    userName(state) {
      return state.userName
    }
  },
  actions: {},
  modules: {}
})
