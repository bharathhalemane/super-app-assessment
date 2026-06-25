import axios from "axios"

const API_KEY = import.meta.env.VITE_MOVIE_API
const movieClient = axios.create({
  baseURL: "https://www.omdbapi.com/",
});


export const searchMovieByGenre = async (query, apiKey = API_KEY) => {
  console.log(query)
  try {
    const response = await movieClient.get(`/?s=${encodeURIComponent(query)}&type=movie&apikey=${apiKey}`);
    return response.data.Search || [];
  } catch (error) {
    console.error("Movie query service failure:", error);
    throw error;
  }
};

export const fetchMovieDetails = async (imdbID, apiKey=API_KEY) => {
  try {
    const response = await movieClient.get(`/?i=${imdbID}&plot=full&apikey=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error("Movie detail payload query error:", error);
    throw error;
  }
};