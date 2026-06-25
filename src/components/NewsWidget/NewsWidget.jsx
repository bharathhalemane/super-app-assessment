import { fetchTopHeadlines } from "../../services/newsApi"
import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import styles from "./NewsWidget.module.css"

const NewsWidget = () => {
    const [news, setNews] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const getNews = async () => {
            try {
                const data = await fetchTopHeadlines()
                if (data.length === 0) {
                    setError(true)                  // ADD this
                } else {
                    setNews(data)
                }
            } catch (error) {
                console.error("Error fetching news:", error)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        getNews()
    }, [])

    useEffect(() => {
        if (news.length === 0) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % news.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [news])

    if (loading) {
        return (
            <div className={styles.card}>
                <Skeleton height="55%" />

                <div className={styles.content}>
                    <Skeleton count={1} height={35} />
                    <br />
                    <Skeleton width={180} />

                    <div style={{ marginTop: "20px" }}>
                        <Skeleton count={8} />
                    </div>
                </div>
            </div>
        )
    }
    if (error || news.length === 0) {
        return (
            <div className={styles.card} style={{ justifyContent: "center", alignItems: "center" }}>
                <p style={{ color: "#888", textAlign: "center", padding: "20px" }}>
                    News unavailable right now.
                </p>
            </div>
        )
    }
    const article = news[currentIndex]
    if (!article) return null

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={
                    article.urlToImage || "https://via.[laceholder.com/400x250"
                } alt={article.title}
                    className={styles.image} />
                <div className={styles.overlay}>
                    <h2>{article.title}</h2>

                    <p className={styles.date}>
                        {new Date(article.publishedAt).toLocaleDateString()} | {" "} {new Date(article.publishedAt).toLocaleTimeString()}
                    </p>
                </div>
            </div>

            <div className={styles.content}>
                <p>
                    {article.description ||
                        article.content || "No description available."}
                </p>
            </div>
        </div>
    )

}

export default NewsWidget