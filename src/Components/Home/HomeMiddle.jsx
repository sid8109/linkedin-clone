import React, { useEffect } from 'react'
import './HomeMiddle.css'
import { RiArticleLine } from "react-icons/ri";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import User from '../../images/user.svg'
import Card from '../UI/Card';
import Article from '.././Article/Article';
import { IoMdArrowDropdown } from "react-icons/io";
import Divider from '@mui/material/Divider';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { getArticleAPI } from '../../store/actions';

const HomeMiddle = (props) => {
    const user = useSelector(state => state.user.user)
    const loading = useSelector(state => state.articles.loading)
    const dispatch = useDispatch()
    const articles = useSelector(state => state.articles.articles)

    useEffect(() => {
        dispatch(getArticleAPI())
    }, [])

    return (
        <div className='hm-container'>
            <Card>
                <div className="post-input" onClick={props.onShowCreate}>
                    {user && user.photoURL ? <img src={user.photoURL} alt='' /> : <img src={User} alt="" />}
                    <div>
                        <p>Start a post</p>
                    </div>
                </div>
                <div className="post-type">
                    <div className="post-type-button">
                        <MdOutlinePhotoSizeSelectActual color='rgb(61, 142, 193)' size={22} />
                        <p>Media</p>
                    </div>
                    <div className="post-type-button">
                        <FaRegCalendarAlt color='rgba(172, 120, 23, 0.733)' size={21} />
                        <p>Event</p>
                    </div>
                    <div className="post-type-button">
                        <RiArticleLine color='orangered' size={22} />
                        <p>Write article</p>
                    </div>
                </div>
            </Card>

            <div className="divider">
                <div className="d-left">
                    <Divider style={{ color: "red" }} thiccness={10} />
                </div>
                <div className="d-right">
                    <span className='sort-by'>
                        Sort by:
                    </span>
                    <span className='top'>
                        <span>Top</span>
                        <IoMdArrowDropdown size={18} />
                    </span>
                </div>
            </div>

            {loading &&
                <div className='spinner'>
                    <CircularProgress />
                </div>
            }

            {articles.length !== 0 ?
                articles.map((article, key) => (
                    <Article key={key} article={article} />
                ))
                : <>
                    <p className='no-articles'>No articles available.</p>
                    <p className='no-articles'>Start a post.</p>
                </>
            }
        </div>
    )
}

export default HomeMiddle
