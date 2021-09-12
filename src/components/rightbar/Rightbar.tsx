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
            username: "Njiva Niaina",
            img: "/assets/images/1.webp"
        },
        {
            username: "Njiva Niaina",
            img: "/assets/images/1.webp"
        }
    ]);
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <CardGiftcard className="birthdayImg" htmlColor="orange" />
                    <span className="birthdayText">You and 3 others have birthday today</span>
                </div>
                <img src="/assets/images/1.webp" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <Online online={online} />
            </div>
        </div>
    )
}
