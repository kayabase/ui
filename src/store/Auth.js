import get from "lodash/get";

import router from "../routes";
import AuthApi from "@/core/services/Auth";

const state = {
  accessToken: null,
  authUser: null,
  isAdmin: false,
  type: null,
};

const getters = {
  isLoggedIn(state) {
    return !!state.accessToken && !!state.authUser;
  },
  accessToken(state) {
    return state.accessToken;
  },
  authUser(state) {
    return state.authUser;
  },
  isAdmin(state) {
    return state.authUser ? state.authUser.is_team_admin : false;
  },
  type(state) {
    return state.type;
  },
};

const actions = {
  getAccessToken(context) {
    return context.getters["accessToken"];
  },
  getType(context) {
    return context.getters["type"];
  },
  async login(context, payload) {
    const response = await AuthApi.login(payload);
    const { data } = response;

    await context.commit("setAccessToken", get(data, "accessToken"));
    await context.commit("setAuthUser", get(data, "user"));
    await context.commit("setType", get(data, "type"));
    router.push("/overview");
    return response;
  },
  async register(context, payload) {
    const response = await AuthApi.register(payload);

    context.commit("me", get(response, "data"));

    return response;
  },
  async me(context) {
    const response = await AuthApi.me();

    context.commit("me", get(response, "data"));

    return response;
  },
  async logout(context, opts = {}) {
    try {
      await AuthApi.logout();
      context.commit("logout");

      if (opts.redirectRoute) {
        await router.push("/login");
      }
      localStorage.removeItem("X-Tenant");
    } catch (error) {
      console.log(error);
    }
  },

  async forgot(context, payload) {
    return await AuthApi.forgot(payload);
  },
  async cleanSession(context, opts = {}) {
    context.commit("logout");

    if (opts.redirectRoute) {
      await router.push({ name: opts.redirectRoute });
    }
  },
};

const mutations = {
  setAuthUser(state, authUser) {
    state.authUser = authUser;
    localStorage.setItem("authUser", authUser);
  },
  setType(state, type) {
    state.type = type;
  },
  setAccessToken(state, accessToken) {
    state.accessToken = accessToken;
    localStorage.setItem("accessToken", accessToken);
  },
  me(state, user) {
    state.authUser = user;
  },
  logout(state) {
    state.accessToken = null;
    state.ipAddress = null;
    state.authUser = null;
    state.type = null;
    localStorage.removeItem("authUser");
    localStorage.removeItem("accessToken");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
