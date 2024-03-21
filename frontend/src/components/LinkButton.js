export default function Button({link, text}) {
return (
    <div className="btn">
        <a href={link}>{text}</a>
    </div>
)
}