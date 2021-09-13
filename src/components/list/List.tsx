import "./list.css";
import {CreateOutlined, Search} from "@material-ui/icons";
import Item from "../item/Item";

export default function List() {
    return (
        <div className="list">
            <div className="listProfile">
                <img src="/assets/images/1.webp" alt="" className="listProfileImg"/>
                <div className="listProfileDesc">
                    <h4>Njiva Niaina</h4>
                    <small>Junior developer</small>
                </div>
                <CreateOutlined className="listProfileCreateIcon"/>
            </div>
            <div className="listSearch">
                <Search className="listSearchIcon"/>
                <input type="search" placeholder="Search conversation" className="listSearchInput" />
            </div>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />

        </div>
    )
}
