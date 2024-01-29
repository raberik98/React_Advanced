import { useEffect, useState } from "react"
import { fetchAllData } from "../services/data.service"

import Loading from "../../components/Loading/Loading"

export default function MainPage() {
    const [data,setData] = useState(null)

    useEffect(() => {
        fetchAllData().then((resp) => {
            if (resp.resp == 200) {
                setData(resp.data)
            }
            else {
                alert(resp.data)
            }
        })
    }, [])
    
    return(
        <main>
            <h1>Main page</h1>

            {
                data === null ?
                <Loading />
                :
                data.map(nextData => <div key={nextData.id}>{nextData.info}</div>)
            }
        </main>
    )
}