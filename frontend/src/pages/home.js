import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout50 from '../layout/layout50';
import LayoutCard from '../layout/layoutCard';
import Text from '../components/Text';
import Image from '../components/Image';
import Card from '../components/Card';
import Title from '../components/Title';
import Download from '../components/Download';
import Bandeau from '../components/Bandeau';
import Picto from '../components/Picto';
import Projects from '../json/projects.json';

import background from '../assets/img/cover/home_background.webp';
import profil from '../assets/img/about_profil.webp';
import cv from '../download/CV_ROLLAND_GRELLETY_Carole.pdf';
import team from '../assets/img/cover/team.webp'

import call from '../assets/img/pictogrammes/call.png';
import email from '../assets/img/pictogrammes/email.png';
import github from '../assets/img/pictogrammes/github.png';
import linkedin from '../assets/img/pictogrammes/linkedin.png';

import Cover from '../assets/img/cover/booki_cover.webp';

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
            <section id="skills" className="layout__card">
                <div className="container">
                    <Title 
                        title={<>Découvrir mes <span className='bold'>réalisations</span> <br className="hide"/>et mes <span className='bold'>compétences</span></>}
                    />
                    <Text 
                        el="Développement d'applications web front-end et de sites vitrines."
                    />
                    <LayoutCard >
                        {Projects.map((project, key) => {
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
                    <Download 
                        link={cv}
                        text={"Télécharger mon CV"}
                    />
                </div>
            </section>

            <section id="contact" className='contact'>
                <div className="container">
                <Title title={<>Vous avez un <span className='bold'>projet</span> ? Parlons-en !</>} />
                <Bandeau img={team} alt={"Illustration équipe"}/>
                <div className='picto_container'>
                    <Picto source={call} alt={"pictogramme téléphone"} info={"06.10.84.38.67"} link={'tel:0033610843867'}/>
                    <Picto source={email} alt={"pictogramme email"} info={"carole.rolland.grellety@gmail.com"} link={'mailto:carole.rolland.grellety@gmail.com'}/>
                    <Picto source={github} alt={"pictogramme GitHub"} info={"CaroleGrllt"} link={'https://github.com/CaroleGrllt/'} />
                    <Picto source={linkedin} alt={"pictogramme LinkedIn"} info={"Carole Rolland Grellety"} link={'https://www.linkedin.com/in/carole-rolland-grellety/'} />
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
