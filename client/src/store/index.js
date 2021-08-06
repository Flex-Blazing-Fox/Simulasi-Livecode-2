import { createStore } from "vuex";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

export default createStore({
  state: {
    inventories: [],
    access_token: "",
  },
  mutations: {
    SET_INVENTORIES(state, payload) {
      state.inventories = payload;
    },
    SET_ACCESS_TOKEN(state, payload) {
      state.access_token = payload;
    },
  },
  actions: {
    submitLogin(context, payload) {
      console.log(payload)
      return axios({
        method: "POST",
        url: "/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: payload,
      });
    },
  },
  modules: {},
});
