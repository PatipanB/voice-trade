import axios from "axios";

const API_URL = "http://localhost:5000/api";


export const getChangePrice = async (symbol) => {
  try {
    return await axios.get(API_URL + `/base/${symbol}`);
  } catch (error) {
    console.log("error change base");
    throw error;
  }
};