import { TODO } from "../utils/routes";
import Cookies from "js-cookie";

export const deleteList = (id) => {
  const token = Cookies.get("_todo_token");

  return fetch(TODO, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      token,
    },
    body: JSON.stringify({
      _id: id,
    }).then((res) => {
      if (!res.ok) throw new Error("Request failed");
      return res.json();
    }),
  })
};
