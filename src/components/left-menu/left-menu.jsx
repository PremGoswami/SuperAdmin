import './left-menu.scss'
import hashtag from '../images/hashtag.png'
import bookmark from '../images/bookmark.png'
import user from '../images/user.png'
import {Link} from 'react-router-dom'

const LeftMenu = () => {
    return (
        <div className="leftMenuContainer">
            <div className='leftMenuItem'>
                <img src={hashtag} alt="logo" />
                <p>Dashboard</p>
            </div>
            <div className='leftMenuItem'>
                <img src={bookmark} alt="logo" />
                <p>Services</p>
            </div>
            <div className='leftMenuItem'>
                <img src={user} alt="logo" />
                <div className='userAdminOptions'>
                    <p>User Management</p>
                    <Link to='/'>Consumers</Link>
                    <Link to='/user'>Users</Link>
                </div>
            </div>
        </div>
    )
}

export default LeftMenu