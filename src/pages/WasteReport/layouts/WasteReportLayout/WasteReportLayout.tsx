import { ConfigProvider, Layout } from 'antd'
import SideNavWasteReport from '../../components/SideNavWasteReport'
import WasteReportDetail from '../../pages/WasteReportDetail'
import Supplement from 'src/pages/Supplement'
import Documents from 'src/pages/Documents'
import { useState } from 'react'
import { Content } from 'antd/es/layout/layout'

export default function WasteReportLayout() {
    const [tab, setTab] = useState('waste-report')

    return (
        <ConfigProvider
            theme={{
                components: {
                    Layout: {
                        siderBg: '#E6E8EB'
                    }
                }
            }}
        >
            <Layout>
                <SideNavWasteReport setTab={setTab} tab={tab} />
                <Content className='p-4 pl-0 text-base bg-[#E6E8EB] min-h-screen'>
                    {tab === 'waste-report' && <WasteReportDetail />}
                    {tab === 'supplement' && <Supplement />}
                    {tab === 'document' && <Documents />}
                </Content>
            </Layout>
        </ConfigProvider>
    )
}
