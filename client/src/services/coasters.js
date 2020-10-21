import api from './api-config'

export const getAllCoasters = async () => {
  const resp = await api.get('/coasters');
  return resp.data;
}

export const getOneCoaster = async (id) => {
  const resp = await api.get(`/coasters/${id}`);
  return resp.data;
}

export const postCoaster = async (foodData) => {
  const resp = await api.post('/coasters', {food: foodData});
  return resp.data;
}

export const putCoaster = async (id, foodData) => {
  const resp = await api.put(`/coasters/${id}`, {food: foodData});
  return resp.data;
}

export const destroyFood = async (id) => {
  const resp = await api.delete(`/coasters/${id}`);
  return resp;
}

export const addFlavor = async(foodId, flavorId) => {
  const resp = await api.put(`/flavors/${flavorId}/coasters/${foodId}`);
  return resp.data;
}