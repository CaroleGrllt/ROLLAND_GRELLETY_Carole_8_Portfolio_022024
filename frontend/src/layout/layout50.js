export default function Layout50({id, children}) {
    return (
        <section id={id} className="layout50">
            <div className="child first_child">{children[0]}</div>
            <div className="child second_child">{children[1]}</div>
        </section>
    )
}