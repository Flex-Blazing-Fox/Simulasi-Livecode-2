import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: '',
    password: '',
    emailRegister: '',
    passwordRegister: '',
    inventories: []
  },
  mutations: {
    SET_EMAIL (state, email) {
      state.email = email
    },
    SET_PASSWORD (state, password) {
      state.password = password
    },
    REMOVE_CREDENTIALS (state) {
      state.email = ''
      state.emailRegister = ''
      state.password = ''
      state.passwordRegister = ''
    },
    SET_INVENTORIES (state, inventories) {
      state.inventories = inventories
    }
  },
  actions: {
    register ({ commit, state }) {
      axios({
        url: '/register',
        method: 'POST',
        data: {
          email: state.emailRegister,
          password: state.passwordRegister
        }
      })
        .then(user => {
          commit('REMOVE_CREDENTIALS')
          router.push('/login')
        })
        .catch(err => {
          console.log(err)
        })
    },
    login ({ commit, state }) {
      axios({
        url: '/login',
        method: 'POST',
        data: {
          email: state.email,
          password: state.password
        }
      })
        .then(access_token => {
          commit('REMOVE_CREDENTIALS')
          localStorage.access_token = access_token
          router.push('/')
        })
    },
    getInventories({ commit }) {
      axios({
        url: '/inventories',
        method: 'GET',
        headers: localStorage.access_token
      })
        .then(inventories => {
          commit('SET_INVENTORIES', inventories)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
