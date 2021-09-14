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
            username: "Bryan Thomas",
            date: 10,
            description: "",
            image: "/assets/images/12.jpg",
            likeCounter: 10,
            commentCounter: 2
        },
        {
            username: "Carlos Carter",
            date: 52,
            description: "",
            image: "/assets/images/13.jpg",
            likeCounter: 2,
            commentCounter: 5
        },
        {
            username: "Michael Prior",
            date: 15,
            description: "This is my first post",
            image: "/assets/images/14.jpg",
            likeCounter: 2,
            commentCounter: 2
        },
        {
            username: "Edward Bryan",
            date: 1,
            description: "Happy birthday to me",
            image: "/assets/images/15.jpg",
            likeCounter: 100,
            commentCounter: 100
        },
        {
            username: "Kenneth Camarena",
            date: 50,
            description: "",
            image: "/assets/images/16.jpg",
            likeCounter: 20,
            commentCounter: 2
        },
        {
            username: "Michael Hunt",
            date: 10,
            description: "This is my first post",
            image: "/assets/images/17.jpg",
            likeCounter: 2,
            commentCounter: 2
        },
        {
            username: "Mary Harper",
            date: 32,
            description: "",
            image: "/assets/images/18.jpg",
            likeCounter: 2,
            commentCounter: 2
        },
        {
            username: "Linda Collier",
            date: 5,
            description: "Good night all!",
            image: "/assets/images/19.jpg",
            likeCounter: 200,
            commentCounter: 5
        },
        {
            username: "Kimberly Gracia",
            date: 5,
            description: "",
            image: "/assets/images/20.jpg",
            likeCounter: 300,
            commentCounter: 10
        },
        {
            username: "Don Davis",
            date: 5,
            description: "",
            image: "/assets/images/21.jpg",
            likeCounter: 2,
            commentCounter: 2
        },
        {
            username: "Janet Tarver",
            date: 5,
            description: "",
            image: "/assets/images/22.jpg",
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
