import axios from "axios";
import { authHeader } from "./authHeader";

const API_URL = "https://site-survey-backend-production.up.railway.app/api/buildings";

export const getBuildingsByProperty = (propertyId) =>
  axios.get(`${API_URL}/property/${propertyId}`, authHeader());

export const createBuilding = (propertyId, data) =>
  axios.post(`${API_URL}/property/${propertyId}`, data, authHeader());
export const updateBuilding = (id, data) =>
  axios.put(`${API_URL}/${id}`, data, authHeader());

export const deleteBuilding = (id) =>
  axios.delete(`${API_URL}/${id}`, authHeader());
