
export default function Button({link, text, option}) {
return (
    <div className="btn">
        <a href={link}>{text}</a>
    </div>
)
}