export async function fetchSpecificPerson(id) {
    const data = await fetch(`/api/person/${id}`).then(resp => resp.json())
    return data
}

export async function fetchEveryone() {
    const data = await fetch(`/api/allPeople`).then(resp => resp.json())
    return data
}