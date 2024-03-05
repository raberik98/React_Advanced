import { useState, useEffect } from "react"
import { fetchSpecificPerson } from "../services/people.service"
import { useParams } from "react-router-dom"

export default function DisplayParams() {

    const [selectedPerson, setSelectedPerson] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetchSpecificPerson(id).then(data => setSelectedPerson(data))
    }, [])
    
    return <div>
    {
        selectedPerson ? <div>
            <h1>{selectedPerson.name}</h1>
            <h2>{selectedPerson.pref}</h2>
            <p>{selectedPerson.comment}</p>
        </div>
    : <h1>Loading...</h1>
    }
        
    </div>
}