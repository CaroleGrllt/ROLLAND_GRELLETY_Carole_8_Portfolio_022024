export default function Image({source, alt}) {

    return (
        <>
            <img className="img" src={source} alt={alt} />
        </>
    )
}