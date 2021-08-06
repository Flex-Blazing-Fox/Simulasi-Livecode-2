import { createStore } from 'vuex'

export default createStore({
  state: {
    email: '',
    password: ''
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
      state.password = ''
    }
  },
  actions: {
  },
  modules: {
  }
})
