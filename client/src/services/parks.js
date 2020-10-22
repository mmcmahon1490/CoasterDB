import api from './api-config'

export const getAllParks = async () => {
  const resp = await api.get('/parks');
  return resp.data;
}

export const getOnePark = async (id) => {
  const resp = await api.get(`/parks/${id}`);
  return resp.data;
}

export const postPark = async (parkData) => {
  const resp = await api.post('/parks', { park: parkData });
  return resp.data;
}

export const putPark = async (id, parkData) => {
  const resp = await api.put(`/parks/${id}`, { park: parkData });
  return resp.data;
}

export const destroyPark = async (id) => {
  const resp = await api.delete(`/parks/${id}`);
  return resp;
}

export const addPark = async(playerId, parkId) => {
  const resp = await api.put(`/parks/${parkId}/players/${playerId}`);
  return resp.data;
}
