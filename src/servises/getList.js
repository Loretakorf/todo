export const getList = () => {
  return fetch("https://codeacademy-todo.vercel.app/api/list?user=loreta")
    .then((response) => response.json())
    
};
