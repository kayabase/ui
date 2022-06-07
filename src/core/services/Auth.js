import Http from "../http";

class AuthApi extends Http {
  login(payload) {
    return super.post("auth/login", payload);
  }

  register(payload) {
    return super.post("auth/register", payload);
  }

  logout() {
    return super.delete("auth/logout");
  }

  me() {
    return super.get("auth/user");
  }

  updateMe(payload) {
    return super.put("auth/user", payload);
  }

  forgot(payload) {
    return super.post(`auth/forgot-password`, payload);
  }

  reset(payload) {
    return super.post(`auth/reset-password`, payload);
  }
}

export default new AuthApi();
