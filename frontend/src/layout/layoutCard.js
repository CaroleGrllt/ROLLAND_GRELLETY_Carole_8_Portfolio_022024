import Text from "../components/Text";
import Button from "../components/Button";
import Title from '../components/Title';

export default function LayoutCard({id, title, text, children}) {
    return (
        <section id={id} class="layout__card">
            <div className="container">
                <Title 
                    title={<>Découvrir mes <span className='bold'>réalisations</span> <br className="hide"/>et mes <span className='bold'>compétences</span></>}
                />
                <Text 
                    el={text}
                />
                <div className="cards">{children}</div>
                <Button 
                    link={"#"}
                    text={"Télécharger mon CV"}
                />
            </div>
        </section>
    )
}