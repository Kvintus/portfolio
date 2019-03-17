import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:8080/?rest_route=/wp/v2'
})