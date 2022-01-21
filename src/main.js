import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";
// import "./assets/css/style.sass";
import VueRouter from "vue-router";
import { routes } from "./routes";
Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
