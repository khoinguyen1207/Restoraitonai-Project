import { useMemo, useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'

export default function BoxDetailWasteReport() {
    const { wasteReport: wasteReportDetail, companyList } = useContext(AppContext)

    const company = useMemo(() => {
        return companyList?.find((company) => company.id === wasteReportDetail?.company_id)
    }, [wasteReportDetail, companyList])

    return (
        <div className='bg-white shadow-sm mb-5 rounded-sm p-7 text-base'>
            <div className='flex'>
                <div className='w-20 h-20 mr-6 rounded-full overflow-hidden'>
                    <img src={company?.logo.path} alt='projectimg' className='w-full h-full' />
                </div>
                <div className='font-bold'>{wasteReportDetail?.project_name}</div>
            </div>
            <div className='mt-3 mb-1 text-sm font-semibold text-gray-600'>Contact infomation</div>
            <div className='flex'>
                <div className='font-bold'>First name</div>
                <div className='ml-4'>{wasteReportDetail?.project_first_name}</div>
            </div>
            <div className='flex'>
                <div className='font-bold'>Last Name</div>
                <div className='ml-4'>{wasteReportDetail?.project_last_name}</div>
            </div>
            <div className='flex'>
                <div className='font-bold'>Company</div>
                <div className='ml-4'>{company?.company_name}</div>
            </div>
        </div>
    )
}
