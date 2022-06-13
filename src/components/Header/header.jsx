import './header.scss'
import search from '../images/search.png'

const Header = () => {
    return (
        <>
            <div className='headerContainer'>
                <h2>User Management</h2>
                <div className='navOptionsContainer'>
                    <div className='searchBox'>
                        <img src={search} alt="searchIcon" />
                        <input type='search' placeholder='#Service id, #Customer number' />
                    </div>
                    <div>
                        <select className='statusOptionBox' value='all'>
                            <option selected>All Status</option>
                            <option>completed</option>
                            <option>Pending</option>
                        </select>
                    </div>
                    <div className='dateContainer'>
                        <input type="date" />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Header