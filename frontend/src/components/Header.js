import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

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
                            <Link to="/" onClick={closeShowLinks}>Accueil</Link>
                        </li>
                        <li>
                            <HashLink to="/#about" onClick={closeShowLinks}>A propos</HashLink>
                        </li>
                        <li>
                            <HashLink to="/#works" onClick={closeShowLinks}>Réalisations</HashLink>
                        </li>
                        <li>
                            <HashLink to="/#skills" onClick={closeShowLinks}>Compétences</HashLink>
                        </li>
                        <li>
                            <HashLink to="/#contact" onClick={closeShowLinks}>Contact</HashLink>
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