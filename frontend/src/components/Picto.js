export default function Picto({source, alt, info, link}) {
    return (
        <div className="picto_content">
            <a href={link}>
                <div className="img_picto">
                    <img src={source} alt={alt}/>
                </div>
                <div className="info_picto">{info}</div>
            </a>
        </div>
    )
}
