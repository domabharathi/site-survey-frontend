import axios from "axios";
import { authHeader } from "./authHeader";

const API_URL = "https://site-survey-backend-production.up.railway.app/api/checklists";

// ✅ CREATE CHECKLIST
export const createChecklist = (spaceId, checklist) => {
  return axios.post(
    `${API_URL}/space/${spaceId}`,
    checklist,
    authHeader()   // ✅ CORRECT
  );
};

// ✅ GET CHECKLISTS BY SPACE
export const getChecklistsBySpace = (spaceId) => {
  return axios.get(
    `${API_URL}/space/${spaceId}`,
    authHeader()   // ✅ CORRECT
  );
};

// ✅ ADD QUESTION
export const addQuestion = (checklistId, question) => {
  return axios.post(
    `${API_URL}/${checklistId}/question`,
    question,
    authHeader()   // ✅ CORRECT
  );
};

// ✅ GET QUESTIONS
export const getQuestions = (checklistId) => {
  return axios.get(
    `${API_URL}/${checklistId}/questions`,
    authHeader()   // ✅ CORRECT
  );
};
