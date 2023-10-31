import { useMutation, useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import projectApi from 'src/apis/project.api'

export const GetWasteReportById = (id: string | number) => {
    return useQuery({
        queryKey: ['WasteReportDetail', id],
        queryFn: () => projectApi.getWasteReportById(id as string)
    })
}

export const GetCompanyList = () => {
    const { id } = useParams()
    return useQuery({
        queryKey: ['GetCompanyList', id],
        queryFn: () => projectApi.getCompanyList()
    })
}

export const UpdateWasteReport = () => {
    return useMutation({
        mutationFn: projectApi.updateWasteReport
    })
}
