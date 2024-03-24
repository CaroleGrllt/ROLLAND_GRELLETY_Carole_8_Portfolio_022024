export default function Logo({el, alt}) {

    return (
        <div className="logo_content">
            <img src={el} alt={alt}/>
        </div>
    )
}