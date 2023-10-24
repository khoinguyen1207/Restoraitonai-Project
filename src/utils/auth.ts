import { UserType } from 'src/types/user.type'

const TOKEN_KEY = 'RESTORATION_APP_TOKEN'
const PROFILE_KEY = 'RESTORATION_PROFILE'

export const setTokenToLocalStorage = (token: string) => {
    return localStorage.setItem(TOKEN_KEY, token)
}

export const getTokenFromLocalStorage = () => {
    return localStorage.getItem(TOKEN_KEY) || ''
}

export const setProfileToLS = (profile: UserType) => {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile))
}

export const getProfileFromLS = () => {
    const storage = localStorage.getItem(PROFILE_KEY)
    return storage ? JSON.parse(storage) : null
}

export const clearLocalStorage = () => {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(PROFILE_KEY)
}
