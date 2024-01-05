import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import './Navbar.css'
import Icon from '../Icon/Icon';
import Home from '../../images/nav-home.svg'
import Network from '../../images/nav-network.svg'
import Messaging from '../../images/nav-messaging.svg'
import Notifications from '../../images/nav-notifications.svg'
import User from '../../images/user.svg'
import Work from '../../images/nav-work.svg'
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../store/actions';

const Navbar = (props) => {
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(signOut())
    }

    const content = <div className='options'>
        <div className="profile">
            <div className="p-left">
                {user && user.photoURL ? <img src={user.photoURL} alt='' /> : <img src={User} alt='' />}
            </div>
            <div className="p-right">
                <p className='name'>{user.displayName}</p>
                <p className='title'>CSE Sophomore @IIITV</p>
            </div>
        </div>
        <button className='viewProfile'>View Profile</button>
        <p className='signout' onClick={handleLogout}>Sign Out</p>
    </div>

    return (
        <div className="n-wrapper">
            <div className='n-container'>
                <div className="n-left">
                    <BsLinkedin color='#07638e' size={36} />
                    <div className="search">
                        <FaSearch />
                        <input type="text" placeholder='Search' />
                    </div>
                </div>

                <div className="n-right">
                    <Icon image={Home} name="Home" />
                    <Icon image={Messaging} name="Messaging" />
                    <Icon image={Notifications} name="Notifications" />
                    <div className="user" onClick={props.showHideHandler}>
                        {user && user.photoURL ? <img src={user.photoURL} alt='' /> : <img src={User} alt="" />}
                        <div className='icon-name'>
                            <p>Me</p>
                            <IoMdArrowDropdown size={15} />
                        </div>

                        {props.meIsShown && content}
                    </div>
                    <div className="work">
                        <img src={Work} alt="" />
                        <div className='icon-name'>
                            <p>For Business</p>
                            <IoMdArrowDropdown size={15} />
                        </div>
                    </div>
                    <div className="premium">
                        <p>Network Smarter,</p>
                        <p>Try Premium Free</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
