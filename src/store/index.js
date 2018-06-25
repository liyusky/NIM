import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    getUser (state, user) {
      state.user = user
      console.log(state.user)
    }
  }
})
export default store
