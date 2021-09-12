import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import {useState} from "react";


interface IState {
    post: {
        username: string,
        date: number,
        description: string,
        image: string,
        likeCounter: number,
        commentCounter: number
    }[]
}

export default function Feed() {

    const [post, setPost] = useState<IState['post']>([
        {
            username: "Njiva Niaina",
            date: 5,
            description: "This is my first post",
            image: "/assets/images/1.webp",
            likeCounter: 2,
            commentCounter: 2
        },
        {
            username: "Njiva Niaina",
            date: 5,
            description: "This is my first post",
            image: "/assets/images/1.webp",
            likeCounter: 2,
            commentCounter: 2
        }
    ])

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                <Post post={post} />
            </div>
        </div>
    )
}
