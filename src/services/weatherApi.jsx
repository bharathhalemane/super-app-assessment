import axios from "axios"

const API_KEY = import.meta.env.VITE_WEATHER_API

const weatherClient = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});


export const fetchCurrentWeather = async (city, apiKey=API_KEY) => {
  try {
    const response = await weatherClient.get(`/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error("Weather service failure:", error);
    throw error;
  }
};
