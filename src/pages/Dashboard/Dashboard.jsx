import style from './Dashboard.module.css'
import UserInfoCard from '../../components/UserInfoCard/UserInfoCard'
import NewsWidget from '../../components/NewsWidget/NewsWidget'


const Dashboard = () => {
    return <div className={style.dashboardPage}>
        <UserInfoCard size="max" />
        <NewsWidget/>
    </div>
}

export default Dashboard