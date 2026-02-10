import axios from "axios";

const API_URL = "https://site-survey-backend-production.up.railway.app/api/properties";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const deleteProperty = (id) =>
  axios.delete(`${API_URL}/${id}`, authHeader());


export const getProperties = () =>
  axios.get(API_URL, authHeader());

export const createProperty = (data) =>
  axios.post(API_URL, data, authHeader());

export const getPropertyById = (id) =>
  axios.get(`${API_URL}/${id}`, authHeader());

export const updateProperty = (id, data) =>
  axios.put(`${API_URL}/${id}`, data, authHeader());
