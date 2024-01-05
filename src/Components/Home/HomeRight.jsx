import React from 'react'
import './HomeRight.css'
import Card from '../UI/Card'
import { PiDotOutline } from "react-icons/pi";
import logo from '../../images/login-logo.svg'

const HomeRight = () => {
  return (
    <div className='hr-wrapper'>
      <Card>
        <div className="hr-container">
          <p className='hr-heading'>LinkedIn News</p>
          <div className='hey'>
            <PiDotOutline size={21} />
            <div className="news">
              <p className="news-heading">Sales set to take automation route.</p>
              <p className='news-details'>4hrs ago | 2,125 readers</p>
            </div>
          </div>

          <div className='hey'>
            <PiDotOutline size={21} />
            <div className="news">
              <p className="news-heading">FMCG bets big on tech.</p>
              <p className='news-details'>19hrs ago | 2,476 readers</p>
            </div>
          </div>

          <div className='hey'>
            <PiDotOutline size={21} />
            <div className="news">
              <p className="news-heading">Decoding India's green jobs boom.</p>
              <p className='news-details'>1d ago | 190 readers</p>
            </div>
          </div>

          <div className='hey'>
            <PiDotOutline size={21} />
            <div className="news">
              <p className="news-heading">Retail loans touch record high.</p>
              <p className='news-details'>1d ago | 9,458 readers</p>
            </div>
          </div>

          <div className='hey'>
            <PiDotOutline size={21} />
            <div className="news">
              <p className="news-heading">UK toughens student visa rules.</p>
              <p className='news-details'>2d ago | 12,249 readers</p>
            </div>
          </div>
        </div>
      </Card>

      <div className='footer'>
        <img src={logo} alt="" />
        <p>LinkedIn Corporation &copy; 2024</p>
      </div>
    </div>
  )
}

export default HomeRight
