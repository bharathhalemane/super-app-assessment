import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./MovieModal.module.css";
import { searchMovieByGenre } from "../../services/movieApi";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MovieModal = ({ title }) => {
    const navigate = useNavigate();

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const response = await searchMovieByGenre(title);
                setMovies(response || []);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [title]);

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>{title}</h2>

            {loading ? (
                <div className={styles.loadingRow}>
                    {Array.from({ length: 4 }).map((_, i) => (
                        <Skeleton key={i} height={200} borderRadius={12} />
                    ))}
                </div>
            ) : (
                <Swiper
                    spaceBetween={22}
                    slidesPerView={6}
                    grabCursor={true}
                    watchOverflow={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 3,
                        },
                        600: {
                            slidesPerView: 4,
                        },
                        900: {
                            slidesPerView: 5,
                        },
                        1200: {
                            slidesPerView: 6,
                        },
                    }}
                >
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.imdbID}>
                            <div
                                className={styles.card}
                                onClick={() => navigate(`/movie/${movie.imdbID}`)}
                            >
                                <img
                                    src={
                                        movie.Poster !== "N/A"
                                            ? movie.Poster
                                            : "https://via.placeholder.com/300x450"
                                    }
                                    alt={movie.Title}
                                    className={styles.poster}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default MovieModal;