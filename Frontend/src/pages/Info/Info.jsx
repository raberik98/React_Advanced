import { useParams } from "react-router-dom"

export default function Info() {
    const { person, module } = useParams()

    return (<main>
        <h1>Info page:</h1>
        <h2>Name: {person} and module: {module}</h2>
    </main>)
}