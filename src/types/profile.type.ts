import { CompanyType } from './company.type'
import { UserType } from './user.type'

export interface Profile extends UserType {
    company: CompanyType
    last_access_project: number
    company_cam_token: string | null
    eagle_view_token: string | null
}
