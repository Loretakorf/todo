import { LIST } from "../utils/routes";

export const getList = () => {
  return fetch(LIST)
    .then((response) => response.json())
    
};
