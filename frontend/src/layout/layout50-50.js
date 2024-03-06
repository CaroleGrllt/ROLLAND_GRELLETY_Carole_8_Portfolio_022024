export default function Layout50({id, children}) {
    return (
        <section id={id} class="layout50">
            <div className="first_child">{children[0]}</div>
            <div className="second_child">{children[1]}</div>
        </section>
    )
}