import { useContext } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import projectApi from 'src/apis/project.api'
import { AppContext } from 'src/contexts/app.context'

export const GetWasteReportById = (id: string | number) => {
    const { setWasteReport } = useContext(AppContext)
    return useQuery({
        queryKey: ['WasteReportDetail', id],
        queryFn: () => projectApi.getWasteReportById(id as string),
        onSuccess(data) {
            setWasteReport(data.data.data)
        }
    })
}

export const GetCompanyList = () => {
    const { id } = useParams()
    const { setCompanyList } = useContext(AppContext)
    return useQuery({
        queryKey: ['GetCompanyList', id],
        queryFn: () => projectApi.getCompanyList(),
        onSuccess(data) {
            setCompanyList(data.data.data)
        }
    })
}

export const UpdateWasteReport = () => {
    return useMutation({
        mutationFn: projectApi.updateWasteReport
    })
}
