import React, { useEffect } from 'react'
import './Home.css'
import HomeLeft from '../Components/Home/HomeLeft';
import HomeMiddle from '../Components/Home/HomeMiddle';
import HomeRight from '../Components/Home/HomeRight';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
    const user = localStorage.getItem('user')
    const navigate = useNavigate();

    useEffect(() => {
        if(!user) {
            return navigate("/")
        } 
    }, [])

    if(!user) {  
        return navigate("/")
    }

    return (
        <div className='home-container' onClick={props.hideHandler}> 
            <div className="container">
                <HomeLeft />
                <HomeMiddle onShowCreate={props.onShowCreate} />
                <HomeRight />
            </div>
        </div>
    )
}

export default Home
