import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Projects from '../json/projects.json';
import Footer from '../components/Footer';
import Error from './error';
import Image from '../components/Image';
import Layout50 from '../layout/layout50';
import Collapse from '../components/Collapse';
import Button from '../components/LinkButton';


export default function Project () {

    const {id} = useParams();
    const project = Projects.find(project => project.id === id)

    if (project === undefined) {
        return <Error />
    } else {
        return (
            <>
                <header>
                    <Header
                            key={project.id}
                            cover={project.cover}
                            alt={project.alt}
                            title={project.title}
                            year={project.year}
                            subtitle={project.subtitle}
                        />
                </header>
                <main>
                    <section className='image__container'>
                        <Image 
                            source={project.picture}
                            alt={project.alt}
                        />
                    </section>
                    <Layout50>
                        <Collapse title={'Missions et problématiques'} description={project.description}/>
                        <Collapse title={'Compétences développées'} description={project.skills.map((el, key) => <span key={"equipements-"+key} className="equipments-list">{el}</span>)}/>
                    </Layout50>
                    <section className='btn'>
                        <Button link={project.code} text={"Voir le projet"} />
                        <Button link={"/"} text={"Retour accueil"}/>
                    </section>
                </main>
                <footer>
                    <Footer />
                </footer>
            </>
        )
    }
}
