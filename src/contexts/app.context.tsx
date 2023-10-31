import React, { createContext, useState } from 'react'
import { UserType } from 'src/types/user.type'
import { getProfileFromLS, getTokenFromLocalStorage } from 'src/utils/auth'

interface AppContextInterface {
    isAuthenticated: boolean
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
    profile: UserType | null
    setProfile: React.Dispatch<React.SetStateAction<UserType | null>>
}

const initialContext = {
    isAuthenticated: Boolean(getTokenFromLocalStorage()),
    setIsAuthenticated: () => null,
    profile: getProfileFromLS(),
    setProfile: () => null
}

export const AppContext = createContext<AppContextInterface>(initialContext)

export default function AppProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(initialContext.isAuthenticated)
    const [profile, setProfile] = useState<UserType | null>(initialContext.profile)

    return (
        <AppContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
                profile,
                setProfile
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
