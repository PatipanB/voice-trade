import axios from "axios";

const API_URL = "http://localhost:5000/api";


export const getPrice = async (symbol) => {
  try {
    return await axios.get(API_URL + `/price/${symbol}`);
  } catch (error) {
    console.log("error get price");
    throw error;
  }
};

export const getAllPrice = async () =>{
    try{
        return await axios.get(API_URL + `/price`);
    } catch (error) {
        console.log("error get all price");
        throw error;
    }
};