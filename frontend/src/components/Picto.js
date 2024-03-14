export default function Picto({source, alt, info}) {
    return (
        <div className="picto_content">
            <div className="img_picto">
                <img src={source} alt={alt}/>
            </div>
            <div className="info_picto">{info}</div>
        </div>
    )
}
