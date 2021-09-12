import "./online.css";

interface IProps {
    online: {
        username: string,
        img: string
    }[]
}

const Online : React.FC<IProps> = ({online}) => {
    const renderOnline = (): JSX.Element[] => {
        return online.map((online) => {
            return (
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src={online.img} alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightBarUsername">{online.username}</span>
                    </li>
                </ul>
            )
        })
    }
    return (
        <div>
            {renderOnline()}
        </div>
    )
}

export default Online