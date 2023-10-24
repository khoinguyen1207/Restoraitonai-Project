import Sider from 'antd/es/layout/Sider'
import BoxDetailWasteReport from '../BoxDetailWasteReport'
import { Menu } from 'antd'

interface Props {
    tab: string
    setTab: React.Dispatch<React.SetStateAction<string>>
}

export default function SideNavWasteReport({ setTab, tab }: Props) {
    return (
        <Sider width={370} className='p-4'>
            <BoxDetailWasteReport />
            <Menu
                mode='inline'
                defaultSelectedKeys={[tab]}
                className='bg-[#E6E8EB] !border-none text-base text-[#1B97E4]'
                onClick={(info) => {
                    setTab(info.key)
                }}
                items={[
                    {
                        label: 'Waste Report',
                        key: 'waste-report'
                    },
                    {
                        label: 'Supplement',
                        key: 'supplement'
                    },
                    {
                        label: 'Material Order',
                        key: '3'
                    },
                    {
                        label: 'Roof Work Order',
                        key: '4'
                    },
                    {
                        label: 'Insurance Invoice',
                        key: '5'
                    },
                    {
                        label: 'Documents',
                        key: 'document'
                    }
                ]}
            />
        </Sider>
    )
}
