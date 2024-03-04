import { Link } from "react-router-dom";


export default function Header({cover, alt, title, year, subtitle}) {
    return (
        <div id="header" className="header">
            <div className="navigation__container">
                <nav>
                    <ul>
                        <li>
                            <Link to={"/#about"}>A propos</Link>
                        </li>
                        <li>
                            <Link to={"/#skills"}>Réalisations et compétences</Link>
                        </li>
                        <li>
                            <Link to={"/#contact"}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="cover__container">
                <div className="background-cover">
                    <img src={cover} alt={alt}/>
                    <div className="title">
                        <h1>{title} <span>{year}</span></h1>
                        <span>{subtitle}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}