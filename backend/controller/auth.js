import { loginUserServices, signUpUserServices } from '../services/auth.js'
export const login = async (req, res) => {
    const responce=await loginUserServices(req,res)
    return responce
}

export const signUp = async (req, res) => {
    const responce=await signUpUserServices(req,res)
    return responce;
}


