import axios from "axios";

const loginService = (email: string, password: string) =>  axios.post("auth/signin", { email, password });
const registerService = (email: string, password: string) => axios.post("auth/signup", { email, password });


export { loginService, registerService };