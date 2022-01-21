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
    children: [
      { path: "/database", name: "Database", component: Database },
      { path: "/overview", name: "Overview", component: Overview },
    ],
  },

  { path: "*", redirect: "/login" },
];
