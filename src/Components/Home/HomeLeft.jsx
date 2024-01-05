import React from 'react'
import './HomeLeft.css'
import Photo from '../../images/photo.svg'
import { MdBookmark } from "react-icons/md";
import Card from '../UI/Card';
import { FiPlus } from "react-icons/fi";
import { useSelector } from 'react-redux';

const HomeLeft = () => {
    const user = useSelector(state => state.user.user)

    return (
        <div className="hl-container">
            <Card>
                <div className="info"></div>
                <div className='photo'>
                    {user && user.photoURL ? <img src={user.photoURL} alt='' /> : <img src={Photo} alt="" />}
                </div>
                <p className='profile-name'>{user.displayName}</p>
                <p className='profile-title'>CSE Sophomore @IIITV</p>
                <div className="acc-details">
                    <div className="profile-views">
                        <p className='profile-viewers'>Profile viewers</p>
                        <p className='pvnum'>49</p>
                    </div>
                    <div className="connections">
                        <div>
                            <p className='profile-viewers'>Connections</p>
                            <p>Connect with alumni</p>
                        </div>
                        <div className='pvnum'>444</div>
                    </div>
                </div>

                <div className="ai-network">
                    Strengthen your profile wi  th an AI writing assistant.
                </div>

                <div className="my-items">
                    <MdBookmark size={18} color='rgb(98, 98, 98)' />
                    <span>&nbsp;&nbsp;My items</span>
                </div>
            </Card>

            <Card>
                <div className="hl-links">
                    <span className='groups'>Groups</span>
                    <div className="event">
                        <span className='events'>Events</span>
                        <div className="plus"><FiPlus size={13} /></div>
                    </div>
                    <span className='follow-hashtags'>Follow Hashtags</span>
                </div>
                <p className='discover'>Discover More</p>
            </Card>
        </div>
    )
}
export default HomeLeft
