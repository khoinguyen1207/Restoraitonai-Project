import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'

const LOGIN_URL = 'auth/signin/email'
const LOGOUT_URL = '/auth/logout'

const authApi = {
    login(body: { email: string; password: string }) {
        return http.post<AuthResponse>(LOGIN_URL, body)
    },
    logout() {
        return http.post(LOGOUT_URL)
    }
}

export default authApi
