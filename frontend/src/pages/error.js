
import { Link } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer'
import background from '../assets/img/home_background.jpg';


export default function Error () {
    
    return (
        <>
        <header>  
            <Header
                cover={background}
                alt={'Illustration couverture'}
                title={'Carole ROLLAND GRELLETY'}
                subtitle={<>Développeuse web <span className="bold">front-end</span></>}
            />
        </header>
        <main>
            <section className="error">
                <div className="container">
                    <div className="error-404">
                        <span>404</span>
                    </div>
                    <div className="error-message">
                        <p>Oups ! La page que vous demandez n'existe pas.</p>
                    </div>
                    <div className="error-back">
                        <Link to={"/"}> Retourner sur la page d’accueil</Link>
                    </div>
                </div>
            </section>
        </main>
        <footer>
            <Footer />
        </footer>
        </>
    )
}