import axios from "axios";
import { authHeader } from "./authHeader";

const API_URL = "https://site-survey-backend-production.up.railway.app/api/floors";

export const getFloorsByBuilding = (buildingId) =>
  axios.get(`${API_URL}/building/${buildingId}`, authHeader());

export const createFloor = (buildingId, data) =>
  axios.post(`${API_URL}/building/${buildingId}`, data, authHeader());

// 🔹 NEW
export const updateFloor = (floorId, data) =>
  axios.put(`${API_URL}/${floorId}`, data, authHeader());

export const deleteFloor = (floorId) =>
  axios.delete(`${API_URL}/${floorId}`, authHeader());

export const uploadFloorPlan = (floorId, file) => {
  const formData = new FormData();
  formData.append("file", file); // ✅ MUST be "file"

  return axios.post(
    `${API_URL}/upload-plan/${floorId}`,
    formData,
    {
      headers: {
        ...authHeader().headers,
        "Content-Type": "multipart/form-data",
      },
    }
  );
};
