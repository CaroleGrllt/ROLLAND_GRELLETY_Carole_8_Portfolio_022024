import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout50 from '../layout/layout50-50';
import LayoutCard from '../layout/layoutCard';
import Text from '../components/Text';
import Image from '../components/Image';
import Card from '../components/Card';

import Projects from '../json/projects.json';
import background from '../assets/img/home_background.jpg';
import profil from '../assets/img/about_profil.webp';
import Cover from '../assets/img/cover/booki_cover.webp'


export default function Home () {
    return(
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
            <Layout50 
                id={"about"}
            >
                <>
                    <Text
                        el={<>Après plusieurs années dans la Fonction Publique Territoriale, j'ai décidé de me reconvertir et me former, chez OpenClassrooms, au métier de <span className="bold">Développeuse Web.</span><br/><br/>Spécialisée dans le développement <span className="bold">front-end</span>, mes connaissances en back-end me permettent d'avoir une compréhension globale d'un projet et de <span className="bold">faciliter le travail d'équipe.</span></>}
                    />
                </>
                <>
                    <Image
                        source={profil}
                        alt={"photo de profil"}
                    />
                </>
            </Layout50>
            <LayoutCard 
                id={"skills"}
                text={'Développement d\'application web front-end et de sites vitrines.'}
            >
                {Projects.map(project => {
                    return <Card
                        key={project.id}
                        id={project.id}
                        cover={Cover}
                        alt={project.alt}
                        title={project.title}
                        subtitle={project.subtitle}
                        tags={project.tags}
                    />
                })}
            </LayoutCard>
        </main>
        <footer>
            <Footer />
        </footer>

        </>
    )
}
