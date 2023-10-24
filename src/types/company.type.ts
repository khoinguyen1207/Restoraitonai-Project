export interface LogoCompany {
    id: number
    title: string
    path: string
    thumbnail: string
    mime: string
    size: number
}

export interface CompanyType {
    id: number
    user_id: number
    company_name: string
    company_phone: string
    company_fax: string
    company_address: string
    company_city: string
    company_state: string
    company_zip: string
    company_logo: number
    price_laminated_shingles: number
    price_3tab_shingles: number
    price_cap: number
    price_starter: number
    default: number
    active: number
    created_at: string
    updated_at: string
    logo: LogoCompany
}
