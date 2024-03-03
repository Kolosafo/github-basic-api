import axios from "axios";
import { RepoDetailsType } from "./types";
const BASE_URL = "https://api.github.com";

export const getRepoDetails = async ({ owner, repoName }: RepoDetailsType) => {
  try {
    const response = await axios.get(`${BASE_URL}/repos/${owner}/${repoName}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
};

export const getRandomRepos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/search/repositories?q=XXX`);
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
};

export const searchRepos = async ({ name }: { name: string }) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/repositories?q=${name}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
};

export const getUser = async ({ username }: { username: string }) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
};

export const getRandomUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users?since=XXXX`);
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
};
