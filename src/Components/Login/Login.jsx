import React, { useEffect } from 'react'
import './Login.css'
import { FcGoogle } from "react-icons/fc";
import logo from '../../images/login-logo.svg'
import loginHero from '../../images/login-hero.svg'
import { signIn } from '../../store/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = localStorage.getItem('user')

  useEffect(() => {
    if (user) {
      return navigate('/feed')
    }
  }, [user])

  return (
    <div className='l-container'>
      <nav>
        <a href="/">
          <img src={logo} alt="" />
        </a>

        <div className='navbar-right'>
          <button className='joinnow'>Join Now</button>
          <button className='signin'>Sign in</button>
        </div>
      </nav>

      <div className="welcome">
        <div className="welcome-left">
          <span className='heading'>Welcome to your professional community.</span>
          <span className="loginwithgoogle" onClick={() => { dispatch(signIn()) }}><FcGoogle size={35} /> &nbsp; &nbsp; Sign In with Google</span>
        </div>
        <div className="welcome-right">
          <img src={loginHero} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login
