import "./item.css"

export default function Item() {
    return (
            <div className="listItemWrapper">
                <ul className="listItems">
                    <li className="listItem">
                        <div className="listItemProfile">
                            <div className="listItemProfileImgContainer">
                                <img src="/assets/images/1.webp" className="listItemProfileImg" alt="" />
                                <span className="listItemProfileIsOnline"></span>
                            </div>
                            <div className="listItemProfileDesc">
                                <h4>Njiva Niaina</h4>
                                <small>Where are you?</small>
                            </div>
                            <div className="listProfileDate">
                                <small className="date">10:34 AM</small>
                                <small className="listChatNotification">1</small>
                            </div>
                        </div>
                    </li>
    
                </ul>
            </div>
    )
}
