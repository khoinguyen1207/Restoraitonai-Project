import axios, { AxiosError, AxiosInstance } from 'axios'
import { API_URL } from 'src/constants/appConstants'
import { clearLocalStorage, getTokenFromLocalStorage, setProfileToLS, setTokenToLocalStorage } from './auth'
import { AuthResponse } from 'src/types/auth.type'

class Http {
    instance: AxiosInstance
    private token: string
    constructor() {
        this.token = getTokenFromLocalStorage()
        this.instance = axios.create({
            baseURL: API_URL,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        this.instance.interceptors.request.use(
            (config) => {
                if (this.token && config.headers) {
                    config.headers.Authorization = `Bearer ${this.token}`
                }
                return config
            },
            (error) => {
                return Promise.reject(error)
            }
        )
        this.instance.interceptors.response.use(
            (response) => {
                if (response.config.url === 'auth/signin/email') {
                    this.token = (response.data as AuthResponse).data.token
                    setTokenToLocalStorage(this.token)
                    setProfileToLS((response.data as AuthResponse).data)
                } else if (response.config.url === '/auth/logout') {
                    this.token = ''
                    clearLocalStorage()
                }
                return response
            },
            (error: AxiosError) => {
                return Promise.reject(error)
            }
        )
    }
}

const http = new Http().instance
export default http
