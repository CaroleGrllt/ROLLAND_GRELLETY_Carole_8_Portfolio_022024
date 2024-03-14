// import { Link } from "react-router-dom";

export default function Button({link, text, option}) {
return (
    <div className="btn">
        <a href={link} download>{text}</a>
    </div>
)
}