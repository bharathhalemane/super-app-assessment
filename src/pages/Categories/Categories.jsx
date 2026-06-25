import styles from "./Categories.module.css"
import CategoryCard from "../../components/CategoryCard/CategoryCard"
import { useState } from "react"
import { useStore } from "../../store/useStore"
import { useNavigate } from "react-router-dom"


import action from "../../assets/categories/action.png";
import drama from "../../assets/categories/drama.png";
import romance from "../../assets/categories/romance.png";
import thriller from "../../assets/categories/thriller.png";
import western from "../../assets/categories/western.png";
import horror from "../../assets/categories/horror.png";
import fantasy from "../../assets/categories/fantasy.png";
import music from "../../assets/categories/music.png";
import fiction from "../../assets/categories/fiction.png";
import { X } from "lucide-react";

const categories = [
    { title: "Action", image: action },
    { title: "Drama", image: drama },
    { title: "Romance", image: romance },
    { title: "Thriller", image: thriller },
    { title: "Western", image: western },
    { title: "Horror", image: horror },
    { title: "Fantasy", image: fantasy },
    { title: "Music", image: music },
    { title: "Fiction", image: fiction },
];

const Categories = () => {
    const navigate = useNavigate()
    const setCategories = useStore((state) => state.setCategories)

    const [selectedCategories, setSelectedCategories] = useState([])

    const handleSelectedCategory = (title) => {
        if (selectedCategories.includes(title)) {
            setSelectedCategories(
                selectedCard.filter((item) => item !== title)
            )
        } else {
            setSelectedCategories([...selectedCategories, title])
        }
    }

    const removeCategory = (title) => {
        setSelectedCategories(
            selectedCategories.filter((item) => item !== title)
        )
    }

    const handleNextPage = () => {
        setCategories(selectedCategories)
        navigate("/dashboard")
    }
    return <>
        <div className={styles.categoriesPage}>
            <div className={styles.selectedSection}>
                <h1 className={styles.title}>Super app</h1>
                <p className={styles.heading}>
                    Choose your entertainment category
                </p>
                <div className={styles.selectedCategories}>
                    {
                        selectedCategories.map((category) => (
                            <div
                                key={category}
                                className={styles.selectedCard}
                            >
                                <span>{category}</span>
                                <button onClick={() => removeCategory(category)}><X size={14} /></button>
                            </div>
                        ))
                    }
                </div>
                <p className={styles.error}>Minimum 3 category required</p>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.categoriesSection}>{
                    categories.map((item, index) => (
                        <CategoryCard key={index} title={item.title} selected={selectedCategories.includes(item.title)} image={item.image} onClick={() => handleSelectedCategory(item.title)} />
                    ))
                }</div>
                <div className={styles.nextBtnCon}>
                    <button className={`${styles.nextBtn} ${selectedCategories.length < 3 ? styles.disableBtn : ""}`}
                        disabled={selectedCategories.length < 3}
                        onClick={handleNextPage}
                    >Next Page</button>
                </div>
            </div>
        </div>
    </>
}

export default Categories 