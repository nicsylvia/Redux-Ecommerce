import axios from "axios";

const Endpoint = "http://localhost:4573/api"

export const CreateNewUser = async() =>{
    return await axios.post(`${Endpoint}/register`)
}