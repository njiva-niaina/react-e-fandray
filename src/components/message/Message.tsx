import "./message.css";
import List from "../list/List";
import Content from "../content/Content";
import Information from "../information/Information";

export default function Message() {
    return (
        <div className="message">
            <List />
            <Content />
            <Information />
        </div>
    )
}
