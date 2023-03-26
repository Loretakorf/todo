import { REGISTER } from "../utils/routes"

export const registerUser = (user) => {
    return fetch(REGISTER, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
};