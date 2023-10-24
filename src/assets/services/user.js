export function getUsers() {
    return fetch("http://localhost:3000/getAllUsers").then((res) => (res.json()))
}

export function getOneUser() {
    return fetch("http://localhost:3000/getAllUsers").then((res) => (res.json()))
}