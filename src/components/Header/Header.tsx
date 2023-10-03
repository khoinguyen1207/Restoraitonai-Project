import logo from 'src/assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from 'src/constants/routes'
import { Space, Button, Select, Popover } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

export default function Header() {
    const navigate = useNavigate()
    return (
        <div className='px-4 py-3 bg-lightNavy'>
            <div className='flex items-center justify-between'>
                <Space direction='horizontal' size={30}>
                    <Link to={ROUTES.HOME} className='flex items-center'>
                        <img src={logo} alt='logo' className='w-[145px] h-10' />
                    </Link>
                    <Link to={ROUTES.DASHBOARD} className=' font-medium hover:text-[#136aa0] text-white'>
                        Dashboard
                    </Link>
                    <Link to={ROUTES.USER_ITEMS_MANAGER} className=' font-medium hover:text-[#136aa0] text-white'>
                        User Items Manager
                    </Link>
                    <Link to={ROUTES.PAYMENT} className='font-medium hover:text-[#136aa0] text-white'>
                        Purchase
                    </Link>
                </Space>
                <Space direction='horizontal' size={25}>
                    <Space direction='horizontal' align='center' size={8}>
                        <Select showSearch className='w-52 text-black' placeholder='Search Project'></Select>
                        <Button
                            type='primary'
                            onClick={() => navigate(ROUTES.CREATE_WASTE_REPORT)}
                            className='text-sm'
                            icon={<PlusOutlined />}
                        >
                            Create Waste Report
                        </Button>
                    </Space>
                    <Space className='flex items-center' size={8}>
                        <div className='w-6 h-6'>
                            <img
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA2NJREFUWAnlV01IVFEUPue9GR2HdBw3baKBMFxIBVERtHKKoE2DLqaIEEKLIiFo7bJ1W6kZiUwEB1ImkEBMV0FWBCUuhAgmgqCFOhY2OvPe7Zz73puZN/p+dLQWXXiPd+/9vnu+c3/OuQ9hh+Xx2ItOUdL6AcRFeg4bdPwKgNMYUNO3rl1e3MmQ6BecySw2rBSWHoIQd4ijOPB0QByKhjruJ5Odmw4YW7PTQDYQG18tLL0k43fRKClA9Wy0qa2ZH/6m5hR3MYaxzLEN4lAJOLTbmk3P4+Tdd5qy6zd7e2ZtAIB5qs+nRyfHNR2eCSHikgMwUIPbUvVcArnmxeIn6TjAhW2M2wZNjUzEBcAMiRAYDB732hOeS2BsOLnmaS/jrMTEpOlTMbk2gbUVTwHGbqc3KMO1ZKd6Bcsnxb34ESCPWjQU8X28KljrmDqL8BYg4ADTk8muX87D2HvKWJNr77XXvAXY8Xte8xaAID3PZObkTPhRUMaaXDeOtwDgMAuwUsh3ug1U3VfBGtzqvtpvPwKmmYSg99WSneoVLEquE47bPQVwgiGcTk8/BxkmuRUTQ8kKdJPrBvcWICMZJRgObKRi1E0E9zGGsZyUvKIgK/MMxQyykhENHKeQTJEW0hxsrPPOa25Oez8bpzLbGuq45Ccj+hJgidiPdOxbAIvgstcXEmPU//ntugQc0fIbq6dAF6d1FO0EjgkBMdrhEcqPYUqRYTl5COu0n9fpNpSnO1GOdmlOEfgZFHwXaWx9X84N28z0FgG8xlDSugXoCTJwkjiesWKbcaub6J4IHxCULATUydqjWRaQGsseFEVtSIDottjkDV0s8SN59Ja8XiSvciKg5IRWXIbGlnU4EiXPqXxZCcPGWhjVYBuW9BjNVoxmg44mnKGZOkGzVr4fUoCYDCHc7u3t+cFUKWA4m20u5bXXRDpGhtaocVygyDYcant1o6urwMDdlidzc6HNb8vnUWCCHLlCNlrIxkIgop7rSyR+ykupltfvmcYXmujeZ6nbrdFqnunAFLVNjYxMDP5GnGFb0ibAA2N9hX6VSaqqDuyl8Woh/M1jsw3Zbto0BCAc5caWYPsb2bmPr7IN06YUYG0SP7G7Xm2WDctmvUesXj11n/G6Bdh+zR49fc6p9q+Wf74EfwAyaWMAhEP0aAAAAABJRU5ErkJggg=='
                                alt=''
                                className='w-full h-full'
                            />
                        </div>
                        <Popover
                            placement='bottomRight'
                            content={
                                <div>
                                    <Link
                                        to={ROUTES.ACCOUNT}
                                        className='text-black font-semibold text-base hover:bg-gray-100 block py-1 px-2'
                                    >
                                        My Account
                                    </Link>
                                    <Link
                                        to={ROUTES.ACCOUNT}
                                        className='text-black font-semibold text-base hover:bg-gray-100 block py-1 px-2'
                                    >
                                        Company profile
                                    </Link>
                                    <Link
                                        to={ROUTES.ACCOUNT}
                                        className='text-black font-semibold text-base hover:bg-gray-100 block py-1 px-2'
                                    >
                                        Logout
                                    </Link>
                                </div>
                            }
                            trigger='click'
                            arrow={false}
                        >
                            <span className='text-white font-medium cursor-pointer'>Nguyen</span>
                        </Popover>
                    </Space>
                </Space>
            </div>
        </div>
    )
}
