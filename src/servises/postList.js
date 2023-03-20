import { TODO } from "../utils/routes"

export const postList = (todo) => {
    return  fetch(TODO, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
        })
    .then(response => response.json())
   
        
}   