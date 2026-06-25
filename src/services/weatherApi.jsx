// src/services/weatherApi.jsx

export const fetchCurrentWeather = async (city) => {
    try {
        if (import.meta.env.DEV) {
            // Local dev — call OpenWeatherMap directly
            const apiKey = import.meta.env.VITE_WEATHER_API
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`
            )
            return await res.json()
        }

        // Production — go through Vercel serverless function
        const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`)
        return await res.json()

    } catch (error) {
        console.error("Weather service failure:", error)
        return null
    }
}