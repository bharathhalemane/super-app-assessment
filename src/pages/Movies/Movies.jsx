import styles from "./Movie.module.css"
import MovieModal from "../../components/MovieModal/MovieModal"
import { useStore } from "../../store/useStore"
import userImg from "../../assets/userImg.png"

const Movies = () => {
    const categories = useStore((state) => state.categories)    

    return <div className={styles.moviesPage}>
        <div className={styles.header}>
            <h1>Super app</h1>
            <a href="/dashboard">
                <img className={styles.profile} src={userImg} alt="profile" />
            </a>
        </div>
        <h1 className={styles.description}>Entertainment according to your choice</h1>
        <div className={styles.moviesList}>
            {
                categories.map((title) => (
                    <MovieModal title={title} />
                ))
            }
        </div>

    </div>
}

export default Movies 