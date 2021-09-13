import "./information.css"
import {Search, ChatBubble, Videocam, PersonOutlineOutlined, FavoriteBorderOutlined} from "@material-ui/icons"

export default function Information() {
    return (
        <div className="information">
            <div className="informationSearch">
                <Search className="icon"/>
                <input type="search" placeholder="Search people" className="informationSearchField" />
            </div>
            <div className="profile">
                <img src="/assets/images/1.webp" alt="" className="profileImg"/>
                <span>Njiva Niaina</span>
                <span>Junior Developer</span>
            </div>
            <div className="btn">
                <div className="btnField">
                    <ChatBubble className="btnFieldItem" />
                    <span>Chat</span>
                </div>
                <div className="btnField">
                    <Videocam className="btnFieldItem" />
                    <span>Video</span>
                </div>
            </div>
            <div className="contact">
                <PersonOutlineOutlined />
                <span>View friends</span>
            </div>
            <div className="contact">
                <FavoriteBorderOutlined />
                <span>View friends</span>
            </div>
            <div className="attachement">
                <span>Attachments</span>
                <div className="attachmentCards">
                    <span className="attachmentCard">PDF</span>
                    <span className="attachmentCard">Video</span>
                    <span className="attachmentCard">MP3</span>
                    <span className="attachmentCard">Image</span>
                </div>
            </div>
        </div>
    )
}
