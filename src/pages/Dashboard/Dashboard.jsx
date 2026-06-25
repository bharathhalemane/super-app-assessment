import styles from './Dashboard.module.css'
import UserInfoCard from '../../components/UserInfoCard/UserInfoCard'
import NewsWidget from '../../components/NewsWidget/NewsWidget'
import WeatherWidget from '../../components/WeatherWidget/WeatherWidget'
import NotesWidget from '../../components/NotesWidget/NotesWidget'
import TimerWidget from '../../components/TimerWidget/TimerWidget'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Dashboard = () => {
    const [notes, setNotes] = useState(false)

    const handleNotes = () => {
        setNotes(true)
    }

    const navigate = useNavigate()

    return (
        <div className={styles.dashboardPage}>
            <div className={styles.notesTimerSection}>
                <div className={styles.notesWeatherSection}>
                    <div className={styles.userWeatherSection}>
                        <UserInfoCard size={notes ? "min" : "max"} />
                        <WeatherWidget size={notes ? "min" : "max"} />
                    </div>

                    {/* NotesWidget: slides in from the left */}
                    <div className={notes ? styles.slideInLeft : styles.slideOutLeft}>
                        <NotesWidget />
                    </div>
                </div>

                {/* TimerWidget: slides up from below */}
                <div className={notes ? styles.slideInUp : styles.slideOutDown}>
                    <TimerWidget />
                </div>
            </div>

            <div className={styles.newsSection}>
                <NewsWidget />

                {/* Plus button: spins + shrinks away */}
                <button
                    className={!notes ? styles.plusBtn : styles.plusHidden}
                    onClick={handleNotes}
                    aria-label="Show more widgets"
                >
                    +
                </button>

                {/* Browse button: fades in */}
                <button
                    className={`${styles.browserBtn} ${notes ? styles.fadeIn : styles.fadeOut}`}
                    onClick={() => navigate("/movies")}
                >
                    Browse
                </button>
            </div>
        </div>
    )
}

export default Dashboard