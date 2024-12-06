import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_URL = process.env.API_URL;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const USER_NAME = process.env.USER_NAME;
const REPO_NAME = process.env.REPO_NAME;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/vnd.github+json",
    "User-Agent": "CredentialsPage",
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    "Access-Control-Allow-Origin": "*",
    withCredentials: false,
  },
});

// Exposer les fonctions comme des exports nommés
export const getRepository = async () => {
  try {
    const response = await api.get(`/repos/${USER_NAME}/${REPO_NAME}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching repository:", error.message);
    throw error.message;
  }
};

export const getCommits = async () => {
  try {
    const response = await api.get(`/repos/${USER_NAME}/${REPO_NAME}/commits`);
    return response.data;
  } catch (error) {
    console.error("Error fetching repository commits:", error.message);
    throw error.message;
  }
};

export const getBranches = async () => {
  try {
    const response = await api.get(`/repos/${USER_NAME}/${REPO_NAME}/branches`);
    return response.data;
  } catch (error) {
    console.error("Error fetching repository branches:", error.message);
    throw error.message;
  }
};

export const getUsers = async () => {
  try {
    const response = await api.get(
      `/repos/${USER_NAME}/${REPO_NAME}/collaborators`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error.message);
    throw error.message;
  }
};

export const getContributors = async () => {
  try {
    const response = await api.get(
      `/repos/${USER_NAME}/${REPO_NAME}/contributors`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching contributors:", error.message);
    throw error.message;
  }
};
