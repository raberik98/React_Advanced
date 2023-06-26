import { useParams } from "react-router-dom"

export default function Items() {
    const params = useParams()
    console.log(params);

    return (
        <>
            <h1>This is the id: {params.id}, ez az allat: {params.allat}, {params.miteszik} eszik</h1>
            <h2>Beer</h2>
            <h2>Water</h2>
            <h2>Butter</h2>
        </>
    )
}