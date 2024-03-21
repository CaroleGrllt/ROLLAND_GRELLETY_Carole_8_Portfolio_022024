import { Link } from "react-router-dom";
import MoreButton from './MoreBtn';
import Tag from './Tag'

export default function Card({id, cover, alt, title, subtitle, tags, btn}) {
    return (
        <article className="project_item">
            <Link to={"/project/" + id}>
                <div className="card__item">
                    <div className="cover__container">
                        <img src={cover} alt={alt}/>
                    </div>
                    <div className="txt__container">
                        <h3 className="card__title bold_italic">{title}</h3>
                        <span className="card__subtitle">{subtitle}</span>
                        <div className="tags-list">
                        {tags.map((tag, key) => {
                            return <Tag 
                            key={"tag-"+key}
                            el={tag}
                        />
                        })}
                        </div>
                        <MoreButton 
                            link={"/project/" + id}
                            text={"En savoir plus"}
                        />
                    </div>
                </div>
            </Link>
        </article>
    )
}