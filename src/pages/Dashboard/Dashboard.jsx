import styles from './Dashboard.module.css'
import UserInfoCard from '../../components/UserInfoCard/UserInfoCard'
import NewsWidget from '../../components/NewsWidget/NewsWidget'
import WeatherWidget from '../../components/WeatherWidget/WeatherWidget'
import NotesWidget from '../../components/NotesWidget/NotesWidget'
import TimerWidget from '../../components/TimerWidget/TimerWidget'

const Dashboard = ({ notes }) => {
    return !notes ? <div className={styles.dashboardPage}>
        <div className={styles.userWeatherSection}>
            <UserInfoCard size="max" />
            <WeatherWidget size="max" />
        </div>
        <NewsWidget />
    </div> : <div className={styles.dashboardPage}>
        <div className={styles.notesTimerSection}>
            <div className={styles.notesWeatherSection}>
                <div className={styles.userWeatherSection}>
                    <UserInfoCard size="min" />
                    <WeatherWidget size="min" />
                </div>
                <NotesWidget />
            </div>
            <TimerWidget />
        </div>
        <NewsWidget />
    </div>
}

export default Dashboard