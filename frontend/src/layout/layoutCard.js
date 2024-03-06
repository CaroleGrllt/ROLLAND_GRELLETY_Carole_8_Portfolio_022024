import Text from "../components/Text"

export default function LayoutCard({title, text, children}) {
    return (
        <section class="layout__card">
            <h2>{title}</h2>
            <Text 
                el={text}
            />
            <div>{children}</div>
        </section>
    )
}