import "./item.css"

interface IProps{
    person:{
        "date": string,
        "username": string,
        "isOnline": boolean,
        "isSent": boolean,
        "content":string,
        "image":string,
        "msgCounter":number
    }[]
}

const Item : React.FC<IProps> = ({person}) => {
    const onLine =  <span className="listItemProfileIsOnline"></span>

    const sent = (user:string) => {
        return (
            <p className="username">{user}</p>
        )
    }

    const received = (user:string) => {
        return (
            <h4 className="username">{user}</h4>
        )
    }

    const notif = (counter:number) => {
        return(
            <small className="listChatNotification">{counter}</small>
        )
    }

    const renderItem = () : JSX.Element[] => {
        return person.map((person) => {
            return (
                <div className="listItemWrapper">
                    <ul className="listItems">
                        <li className="listItem">
                            <div className="listItemProfile">
                                <div className="listItemProfileImgContainer">
                                    <img src={person.image} className="listItemProfileImg" alt="" />
                                    {person.isOnline ? onLine : ""}
                                </div>
                                <div className="listItemProfileDesc">
                                    {person.isSent ? sent(person.username) : received(person.username)}
                                    <small>{person.isSent ? "You: " : ""}{person.content}</small>
                                </div>
                                <div className="listProfileDate">
                                    <small className="date">{person.date}</small>
                                    {person.isSent ? "" : notif(person.msgCounter)}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            )
        })
    }
    
    return (
        <div>
            {renderItem()}
        </div>
    )
}

export default Item