import './edit-user.scss'
import { Link } from 'react-router-dom'

import LeftMenu from '../left-menu/left-menu'

const EditUser = () => {
    return (
        <div style={{ display: 'flex' }}>
            <LeftMenu />
            <div >
                <div className='edit-user-header'>
                    <div className='userHeading'>
                        <Link to = '/user'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                            </svg>
                        </Link>
                        <h2>Users</h2>
                    </div>
                    <hr/>
                </div>
                <div className="editUserContainer">
                    <h1>Edit User</h1>
                    <form>
                        <div className="formItem">
                            <h2>First Name</h2>
                            <input type=' text' />
                        </div>
                        <div className="formItem">
                            <h2>Last Name</h2>
                            <input type=' text' />
                        </div>
                        <div className="formItem">
                            <h2>Email</h2>
                            <input type='email' />
                        </div>
                        <div className="formItem">
                            <h2>Phone</h2>
                            <input type='number' />
                        </div>
                        <div className='formItem'>
                            <h2>Department</h2>
                            <select placeholderText='Department'>
                                <option disabled selected hidden >Department</option>
                            </select>
                        </div>
                        <div className='formItem'>
                            <h2>Role</h2>
                            <select placeholderText='Department'>
                                <option disabled selected hidden >Role</option>
                            </select>
                        </div>
                        <div className='formItem'>
                            <h2>Supervisor</h2>
                            <select placeholderText='Department'>
                                <option disabled selected hidden >Supervisor</option>
                            </select>
                        </div>
                        <button>
                            Create/Update
                        </button>
                    </form>


                </div>
            </div>
        </div>

    )
}

export default EditUser