import { Link } from "react-router-dom";

export default function Button({link, text}) {
return (
    <div className="btn">
        <Link to={link}>
            <span>{text}</span>
        </Link>
    </div>
)
}