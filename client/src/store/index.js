import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

axios.defaults.baseURL = 'http://localhost/300'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inventories: []
  },
  mutations: {
    SET_INVENTORY (state, payload){
      state.inventories = payload
    }
  },
  actions: {
  },
  modules: {
    fetchInventories ({ commit }, payload ) {
      axios({
        method: 'GET',
        url: '/inventories',
        headers: {
          access_token : localStorage.access_token
        }
      })
      .then(({data}) => {
        commit('SET_INVENTORY', data)
      })
    },
    login(context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {payload}
      })
      .then(({data}) => {
        localStorage.setItem('access_token', data.access_token)
        router.push('/')
      })
    }
  }
})
