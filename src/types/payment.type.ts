interface PlanExpired {
    date: string
    timezone_type: number
    timezone: string
}
export interface PaymentType {
    id: number
    user_id: number
    payment_type: string
    project_count: number
    plan_expired: PlanExpired | null
    supplement_count: number
    reminded_at: string | null
    created_at: string
    updated_at: string
}
