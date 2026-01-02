// https://viacep.com.br/ws/01001000/json/

import axios from "axios";

export const api = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});
