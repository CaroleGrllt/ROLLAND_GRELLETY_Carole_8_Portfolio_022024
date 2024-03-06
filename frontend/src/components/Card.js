import { Link } from "react-router-dom";

export default function Card({id, cover, title, subtitle, tag, btn}) {
    return (
        <article className="project_item">
            <Link to={"/project/" + id}>
                <p>{title}</p>
            </Link>
        </article>
    )
}