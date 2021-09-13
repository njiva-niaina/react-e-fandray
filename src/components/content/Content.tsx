import "./content.css";
import {Search, FavoriteBorderOutlined, NotificationsNoneOutlined, MicNoneOutlined, AttachFileOutlined, CameraAltOutlined, SentimentSatisfiedOutlined, Send} from "@material-ui/icons";

export default function Content() {
    return (
        <div className="content">
            <div className="contentContact">
                <div className="contactDesc">
                    <img src="/assets/images/1.webp" alt="" className="contactImg" />
                    <span>Njiva Niaina</span>
                    <span className="contactStatus"></span>
                </div>
                <div className="contactIcon">
                    <Search />
                    <FavoriteBorderOutlined />
                    <NotificationsNoneOutlined />
                </div>
            </div>
            <div className="contentConversation">
                <div className="receivedMessage">
                    <img src="/assets/images/1.webp" alt="" className="senderImg" />
                    <span className="receivedMessageContent">Kaiza</span>
                </div>
                <div className="responseMessage">
                    <span className="responseMessageContent">Kaiza</span>
                    <img src="/assets/images/1.webp" alt="" className="userImg" />
                </div>
                <div className="receivedMessage">
                    <img src="/assets/images/1.webp" alt="" className="senderImg" />
                    <span className="receivedMessageContent">Kaiza</span>
                </div>
                <div className="responseMessage">
                    <span className="responseMessageContent">Kaiza</span>
                    <img src="/assets/images/1.webp" alt="" className="userImg" />
                </div>
                <div className="receivedMessage">
                    <img src="/assets/images/1.webp" alt="" className="senderImg" />
                    <span className="receivedMessageContent">Kaiza</span>
                </div>
                <div className="responseMessage">
                    <span className="responseMessageContent">Kaiza</span>
                    <img src="/assets/images/1.webp" alt="" className="userImg" />
                </div>
                <div className="responseMessage">
                    <span className="responseMessageContent">Kaiza</span>
                    <img src="/assets/images/1.webp" alt="" className="userImg" />
                </div>
                <div className="receivedMessage">
                    <img src="/assets/images/1.webp" alt="" className="senderImg" />
                    <span className="receivedMessageContent">Kaiza</span>
                </div>
                <div className="receivedMessage">
                    <img src="/assets/images/1.webp" alt="" className="senderImg" />
                    <span className="receivedMessageContent">Kaiza</span>
                </div>
                <div className="receivedMessage">
                    <img src="/assets/images/1.webp" alt="" className="senderImg" />
                    <span className="receivedMessageContent">Kaiza</span>
                </div>
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
                    <Send className="sendIcon"/>
                </div>
            </div>
        </div>
    )
}
