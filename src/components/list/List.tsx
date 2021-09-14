import "./list.css";
import {CreateOutlined, Search} from "@material-ui/icons";
import Item from "../item/Item";
import {useState} from "react";

interface IState{
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

export default function List() {

    const [person, setPerson] = useState<IState['person']>([
        {
            date: "10:56 AM",
            username: "Brian Solo",
            isOnline: true,
            isSent: true,
            content: "Hi",
            image: "assets/images/5.JPG",
            msgCounter: 0
        },
        {
            date: "07:56 AM",
            username: "Carole Jane",
            isOnline: false,
            isSent: false,
            content: "Bye!",
            image: "assets/images/10.JPG",
            msgCounter: 1
        },
        {
            date: "07:06 AM",
            username: "Lillian Hartwell",
            isOnline: true,
            isSent: true,
            content: "How are you?",
            image: "assets/images/12.JPG",
            msgCounter: 0
        },
        {
            date: "06:51 AM",
            username: "Martin Dell",
            isOnline: true,
            isSent: false,
            content: "Where are you?",
            image: "assets/images/14.JPG",
            msgCounter: 2
        },
        {
            date: "05:16 AM",
            username: "Ernesto Bourke",
            isOnline: false,
            isSent: true,
            content: "You're welcome",
            image: "assets/images/30.JPG",
            msgCounter: 0 
        }
    ])

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
            <Item person={person} />
        </div>
    )
}
