import { ConfigProvider, Tabs, TabsProps } from 'antd'
import ChangePassword from 'src/pages/Account/pages/ChangePassword'
import CompanyProfile from 'src/pages/Account/pages/CompanyProfile'
import EmailList from 'src/pages/Account/pages/EmailList'
import Profile from 'src/pages/Account/pages/Profile/Profile'
import PurchaseProject from 'src/pages/Account/pages/PurchasedProject'

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'My Profile',
        children: <Profile />
    },
    {
        key: '2',
        label: 'Company Profile',
        children: <CompanyProfile />
    },
    {
        key: '3',
        label: 'Change Password',
        children: <ChangePassword />
    },
    {
        key: '4',
        label: 'Purchased Projects',
        children: <PurchaseProject />
    },
    {
        key: '5',
        label: 'Email List',
        children: <EmailList />
    }
]

export default function AccountLayout() {
    return (
        <div className='bg-paleGray min-h-screen'>
            <div className='w-[66%] m-auto pt-5 pb-12'>
                <ConfigProvider
                    theme={{
                        components: {
                            Tabs: {
                                horizontalMargin: '0'
                            }
                        }
                    }}
                >
                    <Tabs items={items} defaultActiveKey={'1'} size='large' />
                </ConfigProvider>
            </div>
        </div>
    )
}
