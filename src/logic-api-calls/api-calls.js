import axios from "axios";

const baseUrl = 'http://localhost:9000'

export const loginPostRequest = (loginData) => {
    axios.post(baseUrl + '/api/login', loginData)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.error(err)
    })
}