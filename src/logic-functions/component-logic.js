import axios from "axios";

const baseUrl = 'http://localhost:9000'

export const loginPostRequest = (loginData) => {
    return axios.post(baseUrl + '/api/login', loginData)
}

export const setToLocalStorage = (key, token) => {
    localStorage.setItem(key, token)
}