import * as githubApiService from "../services/githubApiService.js";

// Fonction pour obtenir les informations du repository
export const getRepository = async (req, res) => {
  try {
    const data = await githubApiService.getRepository();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

// Fonction pour obtenir les commits
export const getCommits = async (req, res) => {
  try {
    const data = await githubApiService.getCommits();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

// Fonction pour obtenir les branches
export const getBranches = async (req, res) => {
  try {
    const data = await githubApiService.getBranches();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const getUsers = async (req, res) => {
  try {
    const data = await githubApiService.getUsers();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const getContributors = async (req, res) => {
  try {
    const data = await githubApiService.getContributors();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};
