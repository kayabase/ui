import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/store.js";
const Login = (reslove) => {
  require.ensure(["./views/Login"], () => {
    reslove(require("./views/Login"));
  });
};
const Dashboard = (reslove) => {
  require.ensure(["./views/Dashboard"], () => {
    reslove(require("./views/Dashboard"));
  });
};
const Database = (reslove) => {
  require.ensure(["./views/Database"], () => {
    reslove(require("./views/Database"));
  });
};
const DatabaseDetail = (reslove) => {
  require.ensure(["./views/DatabaseDetail"], () => {
    reslove(require("./views/DatabaseDetail"));
  });
};
const TableDetail = (reslove) => {
  require.ensure(["./views/TableDetail"], () => {
    reslove(require("./views/TableDetail"));
  });
};
const Overview = (reslove) => {
  require.ensure(["./views/Overview"], () => {
    reslove(require("./views/Overview"));
  });
};

const Register = (reslove) => {
  require.ensure(["./views/Register"], () => {
    reslove(require("./views/Register"));
  });
};

// import store from "./store";
export const routes = [
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  {
    path: "/",
    component: Dashboard,
    beforeEnter(to, from, next) {
      if (store.getters.isLoggedIn) {
        next();
      } else {
        next("/login");
      }
    },
    children: [
      { path: "/databases", name: "Databases", component: Database },
      {
        path: "/database/:id/detail",
        name: "Database Detail",
        component: DatabaseDetail,
      },
      {
        path: "/table/:id/detail",
        name: "Table Detail",
        component: TableDetail,
      },
      { path: "/overview", name: "Overview", component: Overview },
    ],
  },

  { path: "*", redirect: "/login" },
];

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
export default router;
