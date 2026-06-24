import styles from './Dashboard.module.css'
import UserInfoCard from '../../components/UserInfoCard/UserInfoCard'
import NewsWidget from '../../components/NewsWidget/NewsWidget'
import WeatherWidget from '../../components/WeatherWidget/WeatherWidget'

const Dashboard = () => {
    return <div className={styles.dashboardPage}>
        <div className={styles.userWeatherSection}>
            <UserInfoCard size="max" />
            <WeatherWidget size="max"/>
        </div>
        <NewsWidget />
    </div>
}

export default Dashboard