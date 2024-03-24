import Logo from './Logo';

export default function SkillCard({title, logos}) {
    return (
        <div className="skillcard_item">
            <div className="title_container">
                <h3>{title}</h3>
            </div>
            <div className="logos_container">
                {logos.map((logo, key) => {
                    return <Logo
                    key={"logo-"+key}
                    el={logo}
                    />
                })}
            </div>
        </div>
    )
}