import "./rightbar.css";
import Online from "../online/Online";
import {useState} from "react";
import {CardGiftcard} from "@material-ui/icons";

interface IState {
    online: {
        username: string,
        img: string
    }[]
}

export default function Rightbar() {
    const [online, setOnline] = useState<IState["online"]>([
        {
            username: "Crystal Halladay",
            img: "/assets/images/23.jpg"
        },
        {
            username: "Maria Fernandez",
            img: "/assets/images/24.jpg"
        },
        {
            username: "Scott Baker",
            img: "/assets/images/25.jpg"
        },
        {
            username: "Todd Knutson",
            img: "/assets/images/26.jpg"
        },
        {
            username: "Kimberly Kay",
            img: "/assets/images/27.jpg"
        },
        {
            username: "Tamera McKay",
            img: "/assets/images/28.jpg"
        },
        {
            username: "Thomas Shackelford",
            img: "/assets/images/29.jpg"
        },
        {
            username: "Rickey Killion",
            img: "/assets/images/31.jpg"
        }
    ]);
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <CardGiftcard className="birthdayImg" htmlColor="orange" />
                    <span className="birthdayText">You and 3 others have birthday today</span>
                </div>
                <img src="/assets/images/ad.jpg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <Online online={online} />
            </div>
        </div>
    )
}
