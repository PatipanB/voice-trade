import axios from "axios";

const API_URL = "http://localhost:5000/api";


export const getDiff = async (symbol) => {
  try {
    return await axios.get(API_URL + `/diff/${symbol}`);
  } catch (error) {
    console.log("error get different");
    throw error;
  }
};

export const getDiffUp = async () => {
    try {
      return await axios.get(API_URL + `/diff-up`);
    } catch (error) {
      console.log("error get different");
      throw error;
    }
};

export const getDiffDown = async () => {
    try {
      return await axios.get(API_URL + `/diff-down`);
    } catch (error) {
      console.log("error get different");
      throw error;
    }
};

export const getTenDiffUp = async () => {
    try {
      return await axios.get(API_URL + `/diff-up/10`);
    } catch (error) {
      console.log("error get different");
      throw error;
    }
};

export const getTenDiffDown = async () => {
    try {
      return await axios.get(API_URL + `/diff-down/10`);
    } catch (error) {
      console.log("error get different");
      throw error;
    }
};
