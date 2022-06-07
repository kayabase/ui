import Vue from "vue";
import Vuex from "vuex";
import Auth from "./Auth";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

const store = new Vuex.Store({
  ...Auth,
  plugins: [createPersistedState()],
});
export default store;
