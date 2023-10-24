import { CompanyType } from 'src/types/company.type'
import { WasteReport, WasteReportForm } from 'src/types/project.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const apiProject = '/project'
const apiCompany = '/company'

const projectApi = {
    getWasteReportById(id: string) {
        return http.get<SuccessResponse<WasteReport>>(`${apiProject}/detail/${id}`)
    },
    getAllProject({ pageNum, key }: { pageNum?: string | number; key: string }) {
        return http.get<SuccessResponse<WasteReport[]>>(`${apiProject}/list?page=${pageNum}&key=${key}`)
    },
    getCompanyList() {
        return http.get<SuccessResponse<CompanyType[]>>(`${apiCompany}/list`)
    },
    updateWasteReport({ id, wasteReport }: { id: number; wasteReport: WasteReportForm }) {
        return http.post<SuccessResponse<WasteReport>>(`${apiProject}/update/${id}`, wasteReport)
    }
}

export default projectApi
