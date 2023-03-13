export const deleteList = (id) => {
    return   fetch('https://codeacademy-todo.vercel.app/api/todo?user=loreta', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            _id: id,
        })
    })
        .then(response => response.json())
       
}