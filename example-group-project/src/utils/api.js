const axios = require("axios");

const chatApi = axios.create({
  baseURL: "https://nc-messanger.herokuapp.com", //what feras gives us
});

export const getReq = async (path) => {
  const res = await chatApi.get(path);
  return res.data;
};

export const postReq = async (path, dataToPost) => {
  const res = await chatApi.post(path, dataToPost);
  return res.data;
};
