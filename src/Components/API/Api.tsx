import axios from "axios";

interface UserData {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

const Endpoint = "http://localhost:4573/api"

export const CreateNewUser = async({name, email, password, confirmPassword}: UserData) =>{
    return await axios.post(`${Endpoint}/register`,{name, email, password,confirmPassword}).then((res) => res.data)
}

// Get all products:
export const AllProducts = async() =>{
    return await axios.get(`${Endpoint}/all-products`).then((res) => res.data)
}

// Get single products:
export const SingleProducts = async() =>{
    return await axios.get(`${Endpoint}/all-products/:productID`).then((res) => res.data)
}