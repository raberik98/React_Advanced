import { useParams } from "react-router-dom"

export default function Info() {
    const { id, animal } = useParams()

    return(
        <>
            <main>
                <h1>This is the id: {id}, and this is the animal: {animal} </h1>
            </main>
        </>
    )
}