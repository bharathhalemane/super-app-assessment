import axios from "axios"

const API_KEY = import.meta.env.VITE_NEWS_API

const newsClient = axios.create({
  baseURL: "https://newsapi.org/v2",
});

export const fetchTopHeadlines = async (category = "general", apiKey=API_KEY) => {
  try {
    const response = await newsClient.get(`/top-headlines?category=${category}&language=en&apiKey=${apiKey}`);
    return response.data.articles || [];
  } catch (error) {
    console.error("News service failure:", error);
    throw error;
  }
};