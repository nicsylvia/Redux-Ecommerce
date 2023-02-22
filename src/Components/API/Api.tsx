import axios from "axios";

interface UserData {
    name: string,
    email: string,
    password: string,
}

const Endpoint = "http://localhost:4573/api"

export const CreateNewUser = async({name, email, password}: UserData) =>{
    return await axios.post(`${Endpoint}/register`,{name, email, password}).then((res) => res.data)
}