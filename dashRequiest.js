export async function dashRequiest(){
    const response = await fetch('http://localhost:3030/data/offers?sortBy=_createdOn%20desc')
    const result = await response.json()
    return result
}