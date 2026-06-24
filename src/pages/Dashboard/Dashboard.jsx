import style from './Dashboard.module.css'
import UserInfoCard from '../../components/UserInfoCard/UserInfoCard'

const Dashboard = () => {
    return <div className={style.dashboardPage}>
        <h1>dashboard</h1>
        <UserInfoCard size="max"/>
    </div>
}

export default Dashboard