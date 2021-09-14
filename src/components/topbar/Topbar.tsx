import './topbar.css';
import {Link} from "react-router-dom";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className="topBarContainer">
            <div className="topBarLeft">
                <span className="logo">e-fandray</span>
            </div>
            <div className="topBarCenter">
                <div className="searchBar">
                    <Search className="searchIcon" />
                    <input type="search" placeholder="Search" className="searchInput" />
                </div>
            </div>
            <div className="topBarRight">
                <div className="topBarLinks">
                    <span className="topBarLink">Home</span>
                    <span className="topBarLink">Timeline</span>
                </div>
                <div className="topBarIcons">
                    <div className="topBarIconItem">
                        <Person />
                        <span className="topBarIconItemBadge">1</span>
                    </div>
                    <div className="topBarIconItem">
                        <Link to="/chat">
                            <Chat />
                        </Link>
                        <span className="topBarIconItemBadge">2</span>
                    </div>
                    <div className="topBarIconItem">
                        <Notifications />
                        <span className="topBarIconItemBadge">1</span>
                    </div>
                </div>
                <img src="/assets/images/1.webp" alt="" className="topBarImg" />
            </div>
        </div>
    )
}
