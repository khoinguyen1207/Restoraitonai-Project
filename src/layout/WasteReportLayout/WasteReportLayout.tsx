import { useRef, useState } from 'react'
import { Content } from 'antd/es/layout/layout'
import { Button, Layout } from 'antd'
import SideNavWasteReport from '../../pages/WasteReport/components/SideNavWasteReport'
import WasteReportDetail from '../../pages/WasteReport/pages/WasteReportDetail'
import Supplement from 'src/pages/Supplement'
import Documents from 'src/pages/Documents'
import Loading from 'src/components/Loading'
import { GetCompanyList, GetWasteReportById } from 'src/services/project.service'
import { SaveFilled } from '@ant-design/icons'
import useQueryParams from 'src/hooks/useQueryParams'
import { useParams } from 'react-router-dom'

export default function WasteReportLayout() {
    const { tabName } = useQueryParams()
    const [tab, setTab] = useState(tabName || 'waste-report')
    const { id } = useParams()

    GetWasteReportById(id as string)
    const getCompany = GetCompanyList()

    const btnRef = useRef<HTMLButtonElement>(null)

    const handleOnClick = () => {
        btnRef.current?.click()
    }

    return (
        <div>
            <Layout>
                <Loading isVisible={getCompany.isFetching} />
                <SideNavWasteReport setTab={setTab} tab={tab} />
                <Content className='p-4 pb-10 pl-0 text-base bg-[#E6E8EB] min-h-screen'>
                    {tab === 'waste-report' && <WasteReportDetail btnRef={btnRef} />}
                    {tab === 'supplement' && <Supplement />}
                    {tab === 'document' && <Documents />}
                </Content>
            </Layout>
            {tab !== 'document' && (
                <div className='sticky bottom-0 z-10 shadow-top bg-white text-end px-4 py-3'>
                    {tab === 'supplement' && (
                        <Button type='default' size='large' icon={<SaveFilled />}>
                            Save as Draft
                        </Button>
                    )}
                    <Button type='primary' onClick={handleOnClick} size='large' className='min-w-[10%] ml-4'>
                        {tab === 'waste-report' ? 'Save' : 'Create'}
                    </Button>
                </div>
            )}
        </div>
    )
}
