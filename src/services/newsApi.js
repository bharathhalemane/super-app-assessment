// src/services/newsApi.js

export const fetchTopHeadlines = async (category = "general") => {
    try {
        if (import.meta.env.DEV) {
            // Local dev — call GNews directly
            const apiKey = import.meta.env.VITE_NEWS_API
            const res = await fetch(
                `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&max=10&apikey=${apiKey}`
            )
            const data = await res.json()
            return data.articles || []
        }

        // Production — go through Vercel serverless function
        const res = await fetch(`/api/news?category=${category}`)
        const data = await res.json()
        return data.articles || []

    } catch (error) {
        console.error("News service failure:", error)
        return []
    }
}