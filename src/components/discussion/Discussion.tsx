import "./discussion.css";

interface IProps {
    discussion: {
        content: string,
        isReceived: boolean,
        userImg: string
    }[]
}

const Discussion : React.FC<IProps> = ({discussion}) => {

    const renderReceivedMessage = (messageContent:string, userImg:string) : JSX.Element => {
        return(
            <div className="receivedMessage">
                <img src={userImg} alt="" className="senderImg" />
                <span className="receivedMessageContent">{messageContent}</span>
            </div>
        )
    }

    const renderSentMessage = (messageContent:string, userImg:string) : JSX.Element => {
        return(
            <div className="responseMessage">
                <span className="responseMessageContent">{messageContent}</span>
                <img src={userImg} alt="" className="userImg" />
            </div>
        )
    }

    const renderDiscussion = () : JSX.Element[] => {
        return discussion.map((discussion) => {
            return (
                <div>
                    {discussion.isReceived ? renderReceivedMessage(discussion.content, discussion.userImg) : renderSentMessage(discussion.content, discussion.userImg)}
                </div>
            )
        })
    }

    return (
        <div>
            {renderDiscussion()}
        </div>
    )
}

export default Discussion