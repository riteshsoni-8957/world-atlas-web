import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1/all",
});

export const getCountryData = () => {
  return api.get(
    "?fields=name,flags,capital,population"
  )
};