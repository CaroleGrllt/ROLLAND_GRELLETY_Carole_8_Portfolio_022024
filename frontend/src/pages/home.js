import Header from '../components/Header';
import Footer from '../components/Footer';
import background from '../assets/img/home_background.jpg';
// import Projects from '../json/projects.json'

export default function Home () {
    return(
        <>
        <header className="header">  
            <Header
                cover={background}
                alt={'Illustration couverture'}
                title={'Carole ROLLAND GRELLETY'}
                subtitle={'Développeuse web front-end'}
            />
        </header>
        <main>

        </main>
        <footer>
            <Footer />
        </footer>

        </>
    )
}
