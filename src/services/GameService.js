import http from "../http-common";

const getAll = () => {
  return http.get("/games");
};

const get = id => {
  return http.get(`/games/${id}`);
};

const create = data => {
  return http.post("/games", data);
};

const update = (id, data) => {
  return http.put(`/games/${id}`, data);
};

const remove = id => {
  return http.delete(`/games/${id}`);
};

const removeAll = () => {
  return http.delete(`/games`);
};

const findByPlayer = player => {
  return http.get(`/games?player=${player}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByPlayer
};