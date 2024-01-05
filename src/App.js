import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Home from './Pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from './store/user';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import CreatePost from './Components/Post/CreatePost';

function App() {
  const dispatch = useDispatch()
  const [meIsShown, setMeIsShown] = useState(false);
  const [createPostIsShown, setCreatePostIsShown] = useState(false);

  const user = useSelector((state) => state.user.user)
  if (!user) {
    const user = JSON.parse(localStorage.getItem('user'))
    dispatch(userActions.setUser(user))
  }

  const showHideHandler = () => {
    setMeIsShown(prev => !prev)
  }

  const hideHandler = () => {
    if (meIsShown) {
      setMeIsShown(false)
    }
  }

  const showCreateHandler = () => {
    setCreatePostIsShown(true);
  }
  const hideCreateHandler = () => {
    setCreatePostIsShown(false);
 }
  return (
    <div className="App">
      {createPostIsShown && <CreatePost onClose={hideCreateHandler} />}
      <BrowserRouter>
        {user && <Navbar showHideHandler={showHideHandler} meIsShown={meIsShown} />}
        <Routes>
          <Route index path='/' element={<Login />} />
          <Route path='/feed' element={<Home hideHandler={hideHandler} onShowCreate={showCreateHandler} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
