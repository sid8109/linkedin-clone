import React from 'react'
import './Icon.css'

const Icon = (props) => {
    return (
        <div className='i-container'>
            <img src={props.image} alt="" />
            <p>{props.name}</p>
        </div>
    )
}

export default Icon
