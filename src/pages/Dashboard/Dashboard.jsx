import styles from './Dashboard.module.css'
import UserInfoCard from '../../components/UserInfoCard/UserInfoCard'
import NewsWidget from '../../components/NewsWidget/NewsWidget'
import WeatherWidget from '../../components/WeatherWidget/WeatherWidget'
import NotesWidget from '../../components/NotesWidget/NotesWidget'
import TimerWidget from '../../components/TimerWidget/TimerWidget'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Plus } from 'lucide-react'

const Dashboard = () => {
    const [notes, setNotes] = useState(false)

    const handleNotes = () => {
        setNotes(true)
    }

    const navigate = useNavigate()
    return <div className={styles.dashboardPage}>
        <div className={styles.notesTimerSection}>
            <div className={styles.notesWeatherSection}>
                <div className={styles.userWeatherSection}>
                    <UserInfoCard size={notes ? "min" : "max"} />
                    <WeatherWidget size={notes ? "min" : "max"} />
                </div>
                <div className={notes ? "" : `${styles.dnone}`}>
                    <NotesWidget />
                </div>
            </div>
            <div className={notes ? "" : `${styles.dnone}`}>
                <TimerWidget />
            </div>
        </div>
        <div className={styles.newsSection}>
            <NewsWidget />
            <button className={!notes ? `${styles.plusBtn}` : `${styles.dnone}`} onClick={handleNotes}>+</button>
            <button className={notes ? `${styles.browserBtn}` : `${styles.dnone}`} onClick={() => navigate("/movies")}>Browse</button>
        </div>
    </div>
}

export default Dashboard