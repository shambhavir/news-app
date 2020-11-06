import { NEWS_API_KEY } from "./config";

// export const getBitcoinArticles = async () => {
//   const response = await fetch(
//     `https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
//   );
//   const json = await response.json();
//   return json;
// };

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

