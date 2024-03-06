export default function Image({source, alt}) {

    return (
        <div className="img">
            <img src={source} alt={alt} />
        </div>
    )
}