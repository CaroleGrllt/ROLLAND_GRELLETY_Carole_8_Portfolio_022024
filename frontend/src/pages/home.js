import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout50 from '../layout/layout50-50';
import LayoutCard from '../layout/layoutCard';
import Text from '../components/Text';
import Image from '../components/Image';
import Card from '../components/Card';

import Projects from '../json/projects.json';
import background from '../assets/img/home_background.jpg';
import profil from '../assets/img/profil.jpeg'


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
            <Layout50>
                <>
                    <Text
                        el={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel mi porta, posuere urna vitae, condimentum quam. Aliquam tincidunt dui lacus, eget finibus sapien vehicula eu. In posuere purus ut tempor feugiat. Sed nisl erat, blandit sit amet scelerisque in, eleifend sit amet purus. Duis pellentesque magna ac scelerisque fermentum. Morbi et lectus massa.'}
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
            title={'eee'}
            text={'rrrr'}
            >
                
                {Projects.map(project => {
                    return <Card
                        key={project.id}
                        id={project.id}
                        cover={project.cover}
                        title={project.title}
                        subtitle={project.subtitle}
                        tag={project.tags}
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
