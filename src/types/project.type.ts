import { UserType } from './user.type'

interface EditableFields {
    company_id: boolean
    project_name: boolean
    project_first_name: boolean
    project_last_name: boolean
    project_address: boolean
    project_city: boolean
    project_state: boolean
    project_zip: boolean
    claim_number: boolean
    shingle_type: boolean
    valley_type: boolean
    roof_type: boolean
    roof_complexity: boolean
    actual_squares: boolean
    valleys: boolean
    ridges: boolean
    hips: boolean
    eaves: boolean
    rakes: boolean
    step_length: boolean
    wall_length: boolean
}

interface ProjectReport {
    id: number
    project_id: number
    report_path: string
    created_at: string
    updated_at: string
}

export interface ProjectSpec {
    id: number
    project_id: number
    shingle_type: number
    valley_type: number
    roof_complexity: number
    actual_squares: number
    valleys: number
    ridges: number
    hips: number
    eaves: number
    rakes: number
    step_length: number
    wall_length: number
    roof_type: number
    created_at: string
    updated_at: string
}
interface SupplementReport {
    id: number
    project_id: number
    path: string
    created_at: string
    updated_at: string
}

export interface WasteReport {
    id: number
    user_id: number
    company_id: number
    project_name: string
    project_first_name: string
    project_last_name: string
    project_address: string
    project_city: string
    project_state: string
    project_zip: string
    claim_number: string
    status: number
    group_id: number | null
    created_at: string
    updated_at: string
    job_hover_id: number | null
    editable_fields: EditableFields
    user: UserType
    project_report: ProjectReport
    project_spec: ProjectSpec
    supplement_report: SupplementReport
    material_order_documents: string | null
}

export type WasteReportForm = {
    company_id: number
    claim_number: string
    project_address: string
    project_city: string
    project_first_name: string
    project_last_name: string
    project_name: string
    project_state: string
    project_zip: string
    job_hover_id: number | null
    wasteReportMode: string
} & Omit<ProjectSpec, 'id' | 'project_id' | 'created_at' | 'updated_at'>
