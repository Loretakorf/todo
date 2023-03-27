import Cookies from "js-cookie";

export const updateTodo = (todo) => {
    const token = Cookies.get("_todo_token");
    return  fetch('https://codeacademy-todo.vercel.app/api/todo?user=loreta', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            token,
        },
        body: JSON.stringify(todo),
    })
    .then((res) => {
        if(!res.ok) throw new Error("Request failed")
        return res.json()
    })
       
}