import axios from "axios";

const API_URL = "http://localhost:5000/api";


export const getAccount = async (symbol) => {
  try {
    return await axios.get(API_URL + `/account`);
  } catch (error) {
    console.log("error get account");
    throw error;
  }
};

export const getTrade = async (symbol) => {
    try {
      return await axios.get(API_URL + `/trades`);
    } catch (error) {
      console.log("error get trades");
      throw error;
    }
  };