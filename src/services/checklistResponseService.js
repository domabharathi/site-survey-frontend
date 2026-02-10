import axios from "axios";
import { authHeader } from "./authHeader";

const API_URL = "https://site-survey-backend-production.up.railway.app/api/checklist-responses";

export const saveDraftResponse = (checklistId, questionId, answer) => {
  return axios.post(
    `${API_URL}/draft`,
    null,
    {
      params: {
        checklistTemplateId: checklistId,
        questionId,
        answer
      },
      ...authHeader()
    }
  );
};

export const submitResponse = (responseId) => {
  return axios.post(
    `${API_URL}/submit/${responseId}`,
    null,
    authHeader()
  );
};

export const getResponsesByChecklist = (checklistId) => {
  return axios.get(
    `${API_URL}/checklist/${checklistId}`,
    authHeader()
  );
};
