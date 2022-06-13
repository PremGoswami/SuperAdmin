import ConsumerTableData from '../TableConsumer/consumer-table'
import Header from "../Header/header"
import LeftMenu from '../left-menu/left-menu'
import UserTableData from '../TableUser/user-table-data'


import './user-data.scss'

const UserData = () => {
    return (
        <div className='consumerPage'>
            <LeftMenu />
            <div className='rightContainer'>
                <Header />
                <div className='dataContiner'>
                    <h1>Users</h1>
                    <UserTableData />
                </div>
            </div>
        </div>
    )
}

export default UserData