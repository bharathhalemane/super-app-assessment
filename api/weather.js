// api/weather.js
import axios from "axios"

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Content-Type", "application/json")

    const apiKey = process.env.WEATHER_API

    if (!apiKey) {
        console.error("WEATHER_API not set")
        return res.end(JSON.stringify({ error: "API key not configured" }))
    }

    const city = req.query?.city

    if (!city) {
        return res.end(JSON.stringify({ error: "City is required" }))
    }

    try {
        const { data } = await axios.get(
            "https://api.openweathermap.org/data/2.5/weather",
            {
                params: {
                    q: city,
                    units: "metric",
                    appid: apiKey
                },
                timeout: 8000
            }
        )

        return res.end(JSON.stringify(data))

    } catch (error) {
        console.error("Weather error:", error?.response?.data || error.message)
        return res.end(JSON.stringify({ error: "Weather fetch failed" }))
    }
}