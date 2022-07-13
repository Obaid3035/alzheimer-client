import axios from "axios";

export const signUp = (userInput: any) => {
    return axios.post("/auth/register", userInput)
}