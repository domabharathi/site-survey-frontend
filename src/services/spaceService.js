import axios from "axios";
import { authHeader } from "./authHeader";

const API_URL = "https://site-survey-backend-production.up.railway.app/api/spaces";

export const createSpace = (floorId, space) => {
  return axios.post(
    `${API_URL}/floor/${floorId}`,
    space,
    authHeader()   // ✅ DIRECTLY PASS IT
  );
};

export const getSpacesByFloor = (floorId) => {
  return axios.get(
    `${API_URL}/floor/${floorId}`,
    authHeader()
  );
};

export const importSpacesCsv = (floorId, file) => {
  const formData = new FormData();
  formData.append("file", file);

  return axios.post(
    `${API_URL}/import/floor/${floorId}`,
    formData,
    {
      ...authHeader(),                 // ✅ SPREAD IT
      headers: {
        ...authHeader().headers,
        "Content-Type": "multipart/form-data"
      }
    }
  );
};

export const deleteSpace = (spaceId) => {
  return axios.delete(
    `${API_URL}/${spaceId}`,
    authHeader()   // ✅ token included
  );
};
