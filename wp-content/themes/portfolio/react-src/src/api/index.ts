import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:80/?rest_route=/wp/v2'
})