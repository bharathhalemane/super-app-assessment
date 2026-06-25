import styles from "./UserInfoCard.module.css"
import { useStore } from "../../store/useStore"
import userImg from "../../assets/userImg.png"

const UserInfoCard = ({ size }) => {
    const user = useStore((state) => state.user)
    let categories = useStore((state) => state.categories)

    if (categories.length > 4) {
        categories = categories.slice(0,4)
    }

    return <div
            className={
                size === "max"
                    ? styles.userInfoCardMax
                    : styles.userInfoCardMin
            }
        >
        <img className={styles.userImg} src={userImg} alt="user Image" />
        <div className={styles.infoSection}>
            <h1 className={styles.name}>{user.name}</h1>
            <h1 className={styles.email}>{user.email}</h1>
            <h1 className={styles.username}>{user.username}</h1>
            <div className={styles.categories}>
                {
                    categories.map((title) => (
                        <div className={styles.category}>
                            {title}
                        </div>
                    ))
                }
            </div>
        </div>
    </div >
}

export default UserInfoCard