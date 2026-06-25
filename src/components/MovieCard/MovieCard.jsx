import styles from "./MovieCard.module.css"
import { fetchMovieDetails } from "../../services/movieApi"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {
    Calendar,
    Clock,
    Globe,
    Star,
    DollarSign,
    Award,
    Users,
    Clapperboard,
    PenLine,
} from "lucide-react"

const MovieCard = () => {
    const { imdbID } = useParams()
    const [movieDetails, setMovieDetails] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchMovDet = async () => {
            try {
                const response = await fetchMovieDetails(imdbID)
                setMovieDetails(response)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchMovDet()
    }, [imdbID])

    if (loading) {
        return (
            <div className={styles.page}>
                <div className={styles.skeleton}>
                    <div className={`${styles.skeletonPoster}`} />
                    <div className={styles.skeletonInfo}>
                        <div className={styles.skeletonLine} style={{ width: "40%", height: "14px" }} />
                        <div className={styles.skeletonLine} style={{ width: "70%", height: "36px", marginTop: "12px" }} />
                        <div className={styles.skeletonLine} style={{ width: "55%", height: "14px", marginTop: "10px" }} />
                        <div className={styles.skeletonLine} style={{ width: "100%", height: "80px", marginTop: "20px" }} />
                    </div>
                </div>
            </div>
        )
    }

    if (!movieDetails) {
        return (
            <div className={styles.page}>
                <p className={styles.error}>Movie details could not be loaded.</p>
            </div>
        )
    }

    const {
        Poster,
        Title,
        Year,
        Rated,
        Runtime,
        Language,
        Genre,
        Plot,
        Director,
        Writer,
        Actors,
        imdbRating,
        Ratings,
        BoxOffice,
        Awards,
        imdbVotes,
    } = movieDetails

    const getRating = (source) =>
        Ratings?.find((r) => r.Source === source)?.Value ?? "N/A"

    const genres = Genre ? Genre.split(", ") : []

    return (
        <div className={styles.page}>
            <h1 className={styles.header}>Super app</h1>
            <p className={styles.sectionLabel}>Featured movie</p>

            <div className={styles.card}>
                {/* ── Poster ── */}
                <div className={styles.posterWrap}>
                    {Rated && <span className={styles.rated}>{Rated}</span>}
                    <img
                        src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/300x450?text=No+Poster"}
                        alt={Title}
                        className={styles.poster}
                    />
                </div>

                {/* ── Info ── */}
                <div className={styles.info}>
                    {/* Genres */}
                    <div className={styles.genres}>
                        {genres.map((g) => (
                            <span key={g} className={styles.genre}>{g.toUpperCase()}</span>
                        ))}
                    </div>

                    {/* Title */}
                    <h1 className={styles.title}>{Title}</h1>

                    {/* Meta row */}
                    <div className={styles.meta}>
                        <span className={styles.metaItem}>
                            <Calendar size={14} strokeWidth={1.5} />
                            {Year}
                        </span>
                        <span className={styles.metaItem}>
                            <Clock size={14} strokeWidth={1.5} />
                            {Runtime}
                        </span>
                        <span className={styles.metaItem}>
                            <Globe size={14} strokeWidth={1.5} />
                            {Language}
                        </span>
                    </div>

                    {/* Plot */}
                    <p className={styles.plot}>{Plot}</p>

                    {/* Ratings row */}
                    <div className={styles.ratings}>
                        <div className={styles.ratingBox}>
                            <span className={styles.ratingLabel}>
                                <Star size={13} strokeWidth={1.5} /> IMDB
                            </span>
                            <span className={styles.ratingValue}>{imdbRating}/10</span>
                        </div>
                        <div className={styles.ratingBox}>
                            <span className={styles.ratingLabel}>
                                <Star size={13} strokeWidth={1.5} /> RT
                            </span>
                            <span className={styles.ratingValue}>{getRating("Rotten Tomatoes")}</span>
                        </div>
                        <div className={styles.ratingBox}>
                            <span className={styles.ratingLabel}>
                                <Star size={13} strokeWidth={1.5} /> META
                            </span>
                            <span className={styles.ratingValue}>{getRating("Metacritic")}</span>
                        </div>
                    </div>

                    {/* Credits */}
                    <div className={styles.credits}>
                        <div className={styles.creditRow}>
                            <div className={styles.creditItem}>
                                <span className={styles.creditLabel}>
                                    <Clapperboard size={13} strokeWidth={1.5} /> DIRECTOR
                                </span>
                                <span className={styles.creditValue}>{Director}</span>
                            </div>
                            <div className={styles.creditItem}>
                                <span className={styles.creditLabel}>
                                    <PenLine size={13} strokeWidth={1.5} /> WRITERS
                                </span>
                                <span className={styles.creditValue}>{Writer}</span>
                            </div>
                        </div>
                        <div className={styles.creditItem}>
                            <span className={styles.creditLabel}>
                                <Users size={13} strokeWidth={1.5} /> CAST
                            </span>
                            <span className={styles.creditValue}>{Actors}</span>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className={styles.footer}>
                        <span className={styles.footerItem}>
                            <DollarSign size={14} strokeWidth={1.5} className={styles.green} />
                            {BoxOffice ?? "N/A"}
                        </span>
                        <span className={styles.footerItem}>
                            <Award size={14} strokeWidth={1.5} className={styles.gold} />
                            {Awards ?? "N/A"}
                        </span>
                        <span className={styles.votes}>{imdbVotes} votes</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard