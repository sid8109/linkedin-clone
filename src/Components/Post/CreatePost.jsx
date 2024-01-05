import React, { useState } from 'react'
import Modal from '../UI/Modal'
import User from '../../images/user.svg'
import { IoClose } from "react-icons/io5";
import './CreatePost.css'
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import validator from 'validator';
import { postArticleAPI } from '../../store/actions';

const CreatePost = (props) => {
    const user = useSelector(state => state.user.user)
    const [inputValue, setInputValue] = useState('');
    const [shareImage, setSharedImage] = useState('')
    const [videoLink, setVideoLink] = useState('')
    const [enterLink, setEnterLink] = useState('')
    const [showLink, setShowLink] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch();

    let timeout
    const onInputChangehandler = (e) => {
        const value = e.target.value;
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            setInputValue(value)
        }, 500)
    }

    const onChangeHandler = (e) => {
        const image = e.target.files[0];
        if (image === '' || image === undefined) {
            alert(`not an image, the file is a ${typeof image}`)
            return
        }
        setSharedImage(image)
    }

    const onShowLinkHandler = () => {
        setShowLink(prev => !prev)
        setError('')
    }

    const onChangeMediaLinkHandler = (e) => {
        const value = e.target.value
        if (validator.isURL(value)) {
            setEnterLink(e.target.value)
            setError('')
            setShowLink(false)
        } else {
            setError("Invalid URL")
        }
    }

    const postArticle = (e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget) {
            return;
        }

        const payload = {
            image: shareImage,
            video: enterLink,
            user,
            description: inputValue,
            timestamp: new Date()
        }
        dispatch(postArticleAPI(payload))
        reset(e);
    }

    const reset = (e) => {
        setInputValue('')
        setSharedImage('')
        setVideoLink('')
        setShowLink('')
        setError('')
        setEnterLink('')
        props.onClose(e)
    }

    return (
        <Modal onClose={props.onClose}>
            <div className="post-top">
                <div className="details">
                    {user && user.photoURL ? <img src={user.photoURL} alt='' /> : <img src={User} alt="" />}
                    <p>{user.displayName}</p>
                </div>
                <div className="cross" onClick={props.onClose}>
                    <IoClose size={30} />
                </div>
            </div>
            <div className='post-talk'>
                <textarea type="text" rows={10} placeholder='What do you want to talk about?' onChange={onInputChangehandler} />
            </div>
            {showLink && <input className='medialink' type='url' placeholder='Please enter a video link' onChange={onChangeMediaLinkHandler} />}
            {error && <p className='error'>{error}</p>}
            {shareImage && <img src={URL.createObjectURL(shareImage)} className='sharedimg' />}
            {videoLink && <ReactPlayer className='sharedimg' url={URL.createObjectURL(videoLink)} controls={true} />}
            {enterLink && <ReactPlayer className='sharedimg' url={enterLink} />}
            <div className="post-bottom">
                <div className="post-icons">
                    <input type="file" accept='image/gif, image/png, image/jpeg' name="image" id='file' onChange={onChangeHandler} />
                    <input type="file" accept='video/mp4, video/mp3' name='video' id='videofile' onChange={(e) => setVideoLink(e.target.files[0])} />
                    <label htmlFor="file">
                        <div className="post-icon">
                            <MdOutlinePhotoSizeSelectActual size={23} />
                        </div>
                    </label>
                    <div className="post-icon" onClick={onShowLinkHandler}>
                        <IoLogoYoutube size={23} />
                    </div>
                </div>
                <button disabled={!inputValue ? true : false} onClick={postArticle}>Post</button>
            </div>
        </Modal>
    )
}

export default CreatePost