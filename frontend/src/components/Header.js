import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Header({cover, alt, title, year, subtitle}) {

    const [showLinks, setShowLinks] = useState(false)
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    const closeShowLinks = () => {
        setShowLinks(false)
    }

    return (
        <>
            <div className="navigation__container">
                <nav className="navbar ">
                    <ul className={(showLinks ? "show-nav" : "" ) }>
                        <li>
                            <a href="/" onClick={closeShowLinks}>Accueil</a>
                        </li>
                        <li>
                            <a href="/#about" onClick={closeShowLinks}>A propos</a>
                        </li>
                        <li>
                            <a href="/#works" onClick={closeShowLinks}>Réalisations</a>
                        </li>
                        <li>
                            <a href="/#skills" onClick={closeShowLinks}>Compétences</a>
                        </li>
                        <li>
                            <a href="/#contact" onClick={closeShowLinks}>Contact</a>
                        </li>
                    </ul>
                    <div className='navbar_burger' onClick={handleShowLinks}>
                        <FontAwesomeIcon icon={faBars} className={"fa_bars"}></FontAwesomeIcon>
                    </div>
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