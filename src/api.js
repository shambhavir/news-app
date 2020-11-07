import { NEWS_API_KEY } from "./config"; //our Business API key imported from the config file 
//separate calls to each cateogry that are called in different components for respective topics of tech, sports, and entertainment 
export const getEntertainment = async topic => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=100&apiKey=${NEWS_API_KEY}`
  );
  const json = await response.json();
  return json;
};
export const getSports = async topic => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=100&apiKey=${NEWS_API_KEY}`
  );
  const json = await response.json();
  return json;
};
export const getTechnology = async topic => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=100&apiKey=${NEWS_API_KEY}`
  );
  const json = await response.json();
  return json;
};

