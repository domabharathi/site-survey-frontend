import axios from "axios";
import { authHeader } from "./authHeader";

const API_URL = "https://site-survey-backend-production.up.railway.app/api/checklist-attachments";

export const uploadAttachment = (responseId, file) => {
  const formData = new FormData();
  formData.append("responseId", responseId);
  formData.append("file", file);

  return axios.post(
    `${API_URL}/upload`,
    formData,
    {
      ...authHeader(),
      headers: {
        ...authHeader().headers,
        "Content-Type": "multipart/form-data"
      }
    }
  );
};

export const getAttachmentsByResponse = (responseId) => {
  return axios.get(
    `${API_URL}/response/${responseId}`,
    authHeader()
  );
};
