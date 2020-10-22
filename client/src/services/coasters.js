import api from './api-config'

export const getAllCoasters = async () => {
  const resp = await api.get('/coasters');
  return resp.data;
}

export const getOneCoaster = async (id) => {
  const resp = await api.get(`/coasters/${id}`);
  return resp.data;
}

export const postCoaster = async (coasterData) => {
  const resp = await api.post('/coasters', {coaster: coasterData});
  return resp.data;
}

export const putCoaster = async (id, coasterData) => {
  const resp = await api.put(`/coasters/${id}`, {coaster: coasterData});
  return resp.data;
}

export const destroyCoaster = async (id) => {
  const resp = await api.delete(`/coasters/${id}`);
  return resp;
}

export const addCoaster = async(foodId, coasterId) => {
  const resp = await api.put(`/coasters/${coasterId}/coasters/${foodId}`);
  return resp.data;
}