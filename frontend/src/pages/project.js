import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Projects from '../json/projects.json';
import Footer from '../components/Footer';
import Error from './error';



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
                <footer>
                    <Footer />
                </footer>
            </>
        )
    }
}
