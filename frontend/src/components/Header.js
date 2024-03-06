

export default function Header({cover, alt, title, year, subtitle}) {
    return (
        <>
            <div className="navigation__container">
                <nav>
                    <ul>
                        <li>
                            <a href="/#about">A propos</a>
                        </li>
                        <li>
                            <a href="/#skills">Réalisations et compétences</a>
                        </li>
                        <li>
                            <a href="/#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="cover__container">
                <div className="background-cover">
                    <img src={cover} alt={alt}/>
                </div>
                <div className="title">
                    <h1>{title} <span className="regular_italic">{year}</span></h1>
                    <span>{subtitle}</span>
                </div>    
            </div>
        </>
    )
}