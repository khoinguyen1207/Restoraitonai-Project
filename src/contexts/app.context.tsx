import React, { createContext, useState } from 'react'
import { CompanyType } from 'src/types/company.type'
import { WasteReport } from 'src/types/project.type'
import { UserType } from 'src/types/user.type'
import { getProfileFromLS, getTokenFromLocalStorage } from 'src/utils/auth'

interface AppContextInterface {
    isAuthenticated: boolean
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
    profile: UserType | null
    setProfile: React.Dispatch<React.SetStateAction<UserType | null>>
    wasteReport: WasteReport | null
    setWasteReport: React.Dispatch<React.SetStateAction<WasteReport | null>>
    companyList: CompanyType[] | null
    setCompanyList: React.Dispatch<React.SetStateAction<CompanyType[] | null>>
}

const initialContext = {
    isAuthenticated: Boolean(getTokenFromLocalStorage()),
    setIsAuthenticated: () => null,
    profile: getProfileFromLS(),
    setProfile: () => null,
    wasteReport: null,
    setWasteReport: () => null,
    companyList: null,
    setCompanyList: () => null
}

export const AppContext = createContext<AppContextInterface>(initialContext)

export default function AppProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(initialContext.isAuthenticated)
    const [profile, setProfile] = useState<UserType | null>(initialContext.profile)
    const [wasteReport, setWasteReport] = useState<WasteReport | null>(initialContext.wasteReport)
    const [companyList, setCompanyList] = useState<CompanyType[] | null>(initialContext.companyList)

    return (
        <AppContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
                profile,
                setProfile,
                wasteReport,
                setWasteReport,
                companyList,
                setCompanyList
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
