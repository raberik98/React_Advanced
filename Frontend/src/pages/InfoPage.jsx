import { useContext } from "react"
import { GlobalContext } from "../components/Layout"
import { Link } from "react-router-dom"

export default function InfoPage() {
    const { globalData } = useContext(GlobalContext)
    
    return (
        <div>
            <h1>Info page</h1>
            {
                globalData ? globalData.map((data) => (
                    <div key={data.id}>
                        <h1>{data.name}</h1>
                        <Link to={`/display/${data.id}`}>Details</Link>
                    </div>
                ))
                :
                <h1>No data have been found!</h1>
            }
        </div>
    )
}