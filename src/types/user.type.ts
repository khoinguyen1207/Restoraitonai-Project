import { PaymentType } from './payment.type'

export interface UserType {
    id: number
    first_name: string
    last_name: string
    email: string
    phone_number: string
    reset_code: string
    status: number
    created_at: string
    updated_at: string
    referral: string
    referral_other: string | null
    banned: number
    profile_picture: string | null
    payments: PaymentType[]
}
