import "./friend.css"

interface IProps {
    friend: {
        username: string,
        img: string
    }[]
}


const Friend: React.FC<IProps> = ({friend}) => {
    const renderFriend = (): JSX.Element[] => {
        return friend.map((friend) => {
            return (
                <li className="sideBarFriend">
                    <img src={friend.img} alt="" className="sideBarFriendImg" />
                    <span className="sideBarFriendName">{friend.username}</span>
                </li>   
            )
        })
    }
    return (
        <ul className="sideBarFriendList">
            {renderFriend()}
        </ul>
    )
}

export default Friend;