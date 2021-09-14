import "./content.css";
import Discussion from "../discussion/Discussion";
import {useState} from "react";
import {Search, FavoriteBorderOutlined, NotificationsNoneOutlined, MicNoneOutlined, AttachFileOutlined, CameraAltOutlined, SentimentSatisfiedOutlined, Send} from "@material-ui/icons";
import { send } from "process";

interface IState{
    discussion: {
        content: string,
        isReceived: boolean,
        userImg: string
    }[], 
}

export default function Content() {

    const [discussion, setDiscussion] = useState<IState['discussion']>([
        {
            content: "Hey dude",
            isReceived: true,
            userImg: "/assets/images/5.jpg"
        },
        {
            content: "Hi",
            isReceived: false,
            userImg: "/assets/images/1.webp"
        },
    ]);

    return (
        <div className="content">
            <div className="contentContact">
                <div className="contactDesc">
                    <img src="/assets/images/5.jpg" alt="" className="contactImg" />
                    <span>Brian Solo</span>
                    <span className="contactStatus"></span>
                </div>
                <div className="contactIcon">
                    <Search />
                    <FavoriteBorderOutlined />
                    <NotificationsNoneOutlined />
                </div>
            </div>
            <div className="contentConversation">
                <Discussion discussion={discussion} />
            </div>
            <div className="contentMessageInputField">
                <div className="contentInput">
                    <MicNoneOutlined className="micIcon" />
                    <input type="text" placeholder="Write something" className="contentMessage" />
                </div>
                <div className="contentMessageIcon">
                    <AttachFileOutlined className="icon"/>
                    <CameraAltOutlined className="icon"/>
                    <SentimentSatisfiedOutlined className="icon"/>
                    <Send className="sendIcon" />
                </div>
            </div>
        </div>
    )
}

