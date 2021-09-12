import "./post.css"
import {useState} from "react"
import { MoreVert, ThumbUp, Favorite } from "@material-ui/icons"

interface IProps {
    post: {
        username: string,
        date: number,
        description: string,
        image: string,
        likeCounter: number,
        commentCounter: number
    }[]
}

const Post: React.FC<IProps> = ({post}) => {
    const renderPost = (): JSX.Element[] => {
        return post.map((post) => {
            return (
                <div className="post">
                    <div className="postWrapper">
                        <div className="postTop">
                            <div className="postTopLeft">
                                <img src={post.image} alt="" className="postProfileImg"/>
                                <span className="postUsername">{post.username}</span>
                                <span className="postDate">{post.date} min ago</span>
                            </div>
                            <div className="postTopRight">
                                <MoreVert className="postTopRightIcon"/>
                            </div>
                        </div>
                        <div className="postCenter">
                            <span className="postText">{post.description}</span>
                            <img src={post.image} alt="" className="postImg" />
                        </div>
                        <div className="postBottom">
                            <div className="postBottomLeft">
                                <ThumbUp className="likeIcon" htmlColor="blue" />
                                <Favorite className="likeIcon" htmlColor="red" />
                                <span className="postLikeCounter">{post.likeCounter}</span>
                            </div>
                            <div className="postBottomRight">
                                <span className="postCommentText">{post.commentCounter} comments</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className=""> 
            {renderPost()}
        </div>
    )
}

export default Post