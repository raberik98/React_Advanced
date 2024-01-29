export async function fetchAllData() {
    try {
        const resp = await fetch("/api/v1/data")
        const data = await resp.json() 
    
        return { resp: resp.status, data: data }
    } catch (error) {
        return { resp: 500, data: error }
    }

}