import { TODO } from "../utils/routes";
import Cookies from "js-cookie";

export const postList = (todo) => {
  const token = Cookies.get("_todo_token");
  return fetch(TODO, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token,
    },
    body: JSON.stringify(todo),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Request failed");
      return res.json();
    })
    
};
