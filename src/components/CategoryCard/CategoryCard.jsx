import styles from "./CategoryCard.module.css"

const colors = {
    Action: "#FF5209",
    Drama: "#d7a4ff",
    Romance: "#148a08",
    Thriller: "#84c2ff",
    Western: "#902500",
    Horror: "#7358ff",
    Fantasy: "#ff4ade",
    Music: "#e61e32",
    Fiction: "#6cd061"
}

const CategoryCard = ({ title, image, selected, onClick }) => {
    return (
        <div className={styles.cardContainer} style={{
            backgroundColor: colors[title],
            border: selected ? "4px solid #11b800" : "none"
        }}
        onClick={onClick}>
            <h1 className={styles.title}>{title}</h1>
            <img className={styles.img} src={image} alt={title} />
        </div>
    )
}

export default CategoryCard 