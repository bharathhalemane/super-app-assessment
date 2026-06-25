// api/news.js
import axios from "axios"

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Content-Type", "application/json")

    const apiKey = process.env.NEWS_API

    if (!apiKey) {
        console.error("NEWS_API not set")
        return res.end(JSON.stringify({ articles: [] }))
    }

    const category = req.query?.category || "general"

    try {
        const { data } = await axios.get(
            "https://gnews.io/api/v4/top-headlines",
            {
                params: {
                    category,
                    lang: "en",
                    max: 10,
                    apikey: apiKey
                },
                timeout: 8000
            }
        )

        return res.end(JSON.stringify({ articles: data.articles || [] }))

    } catch (error) {
        console.error("GNews error:", error?.response?.data || error.message)
        return res.end(JSON.stringify({ articles: [] }))
    }
}