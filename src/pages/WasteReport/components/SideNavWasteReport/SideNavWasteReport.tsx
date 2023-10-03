import Sider from 'antd/es/layout/Sider'
import BoxDetailWasteReport from '../BoxDetailWasteReport'
import { ConfigProvider, Menu } from 'antd'
import { COLORS } from 'src/constants/appConstants'

interface Props {
    tab: string
    setTab: React.Dispatch<React.SetStateAction<string>>
}

export default function SideNavWasteReport({ setTab, tab }: Props) {
    return (
        <Sider width={370} className='p-4 min-w-[260px]'>
            <BoxDetailWasteReport />
            <ConfigProvider
                theme={{
                    components: {
                        Menu: {
                            itemSelectedBg: COLORS.PRIMARY,
                            itemSelectedColor: COLORS.WHITE,
                            itemHoverColor: COLORS.LIGHT_NAVY,
                            itemHoverBg: COLORS.PALE_GRAY,
                            itemMarginInline: 0
                        }
                    }
                }}
            >
                <Menu
                    mode='inline'
                    defaultSelectedKeys={[tab]}
                    className='bg-[#E6E8EB] !border-none text-base text-[#1B97E4]'
                    items={[
                        {
                            label: 'Waste Report',
                            key: 'waste-report',
                            onClick: () => setTab('waste-report')
                        },
                        {
                            label: 'Supplement',
                            key: 'supplement',
                            onClick: () => setTab('supplement')
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
                            key: 'document',
                            onClick: () => setTab('document')
                        }
                    ]}
                />
            </ConfigProvider>
        </Sider>
    )
}
