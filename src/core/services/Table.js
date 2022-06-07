import Http from "../http";

class Table extends Http {
  list(params) {
    return super.get("tables", { params });
  }

  create(payload) {
    return super.post("tables", payload);
  }

  createColumns(id, payload) {
    return super.post(`tables/${id}/columns`, payload);
  }

  update(id, payload) {
    return super.put(`tables/${id}`, { ...payload });
  }

  updateColumn(id, columnID, payload) {
    return super.put(`tables/${id}/columns/${columnID}`, { ...payload });
  }

  get(id, params) {
    return super.get(`tables/${id}`, { params });
  }

  delete(id) {
    return super.delete(`tables/${id}`);
  }
  deleteColumns(id, columnID) {
    return super.delete(`tables/${id}/columns/${columnID}`);
  }

  listEndpointes(id, params) {
    return super.post(`tables/${id}/requests`, { ...params });
  }
}

export default new Table();
