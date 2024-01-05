import React from 'react'
import './Article.css'
import Card from '../UI/Card'
import { SlLike } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";
import like from '../../images/like-reaction.svg'
import heart from '../../images/heart-reaction.svg'
import clap from '../../images/clap-reaction.svg'
import ReactPlayer from 'react-player'

const Article = (props) => {
    return (
        <div className='a-wrapper'>
            <Card>
                <div className='a-container'>
                    <div className="article-info">
                        <div className="ai-left">
                            <img src={props.article.actor.image} alt="" />
                        </div>
                        <div className="ai-right">
                            <div className="name">{props.article.actor.title}</div>
                            <div className="ai-info">{props.article.actor.description}</div>
                            <div className="date">{props.article.actor.date.toDate().toLocaleDateString()}</div>
                        </div>
                    </div>

                    <div className="description">{props.article.description}</div>
                    <div className="article-photo">
                        {props.article.sharedimg && <img src={props.article.sharedimg} />}
                        {props.article.video && <ReactPlayer width={"100%"} url={props.article.video} />}
                    </div>

                    <div className="reactions-comments">
                        <div className="rc-left">
                            <img src={like} alt="" />
                            <img src={heart} alt="" />
                            <img src={clap} alt="" />
                            <p>Chris Morris and 836 others.</p>
                        </div>
                        <div className="rc-right">
                            <p>20 replies</p>
                        </div>
                    </div>

                    <div className="lcrs">
                        <div className="lcrs-button">
                            <SlLike size={19} />
                            <p>Like</p>
                        </div>
                        <div className="lcrs-button">
                            <FaRegCommentDots size={19} />
                            <p>Comment</p>
                        </div>
                        <div className="lcrs-button">
                            <BiRepost size={20} />
                            <p>Repost</p>
                        </div>
                        <div className="lcrs-button">
                            <RiSendPlaneFill size={19} />
                            <p>Send</p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Article
