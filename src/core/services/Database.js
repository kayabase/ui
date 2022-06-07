import Http from "../http";

class Database extends Http {
  list(params) {
    return super.get("databases", { params });
  }

  create(payload) {
    return super.post("databases", payload);
  }

  update(id, payload) {
    return super.put(`databases/${id}`, { ...payload });
  }

  get(id, params) {
    return super.get(`databases/${id}`, { params });
  }

  delete(id, params) {
    return super.delete(`databases/${id}`, { params });
  }
}

export default new Database();
