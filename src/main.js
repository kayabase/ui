import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";
// import "./assets/css/style.sass";

import router from "./routes";
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
