import "./sidebar.css";
import Friend from "../friend/Friend";
import {useState} from "react";
import { RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from "@material-ui/icons";

interface IState {
    friend: {
        username: string,
        img: string
    }[]
}

export default function Sidebar() {
    const [friend, setFriend] = useState<IState["friend"]>([
        {
            username: "Njiva Niaina",
            img: "/assets/images/1.webp",
        },
        {
            username: "Njiva Niaina",
            img: "/assets/images/1.webp",
        }
    ]);
    return (
        <div className="sidebar">
            <div className="sideBarWrapper">
                <ul className="sideBarList">
                    <li className="sideBarListItem">
                        <RssFeed className="sideBarIcon" />
                        <span className="sideBarListItemText">Feed</span>
                    </li>
                    <li className="sideBarListItem">
                        <Chat className="sideBarIcon" />
                        <span className="sideBarListItemText">Chats</span>
                    </li>
                    <li className="sideBarListItem">
                        <PlayCircleFilledOutlined className="sideBarIcon" />
                        <span className="sideBarListItemText">Videos</span>
                    </li>
                    <li className="sideBarListItem">
                        <Group className="sideBarIcon" />
                        <span className="sideBarListItemText">Groups</span>
                    </li>
                    <li className="sideBarListItem">
                        <Bookmark className="sideBarIcon" />
                        <span className="sideBarListItemText">Bookmarks</span>
                    </li>
                    <li className="sideBarListItem">
                        <HelpOutline className="sideBarIcon" />
                        <span className="sideBarListItemText">Questions</span>
                    </li>
                    <li className="sideBarListItem">
                        <WorkOutline className="sideBarIcon" />
                        <span className="sideBarListItemText">Jobs</span>
                    </li>
                    <li className="sideBarListItem">
                        <Event className="sideBarIcon" />
                        <span className="sideBarListItemText">Events</span>
                    </li>
                    <li className="sideBarListItem">
                        <School className="sideBarIcon" />
                        <span className="sideBarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sideBarButton">Show More</button>
                <hr className="sideBarHr" />
                <Friend friend={friend} />
            </div>
        </div>
    )
}
