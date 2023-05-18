import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.25.193.65:3333',
})
