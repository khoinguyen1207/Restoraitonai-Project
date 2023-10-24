import { useContext } from 'react'
import { DownloadOutlined, MailOutlined } from '@ant-design/icons'
import { Button, Popover, Space } from 'antd'
import { Link } from 'react-router-dom'
import { AppContext } from 'src/contexts/app.context'

export default function SubHeader() {
    const { wasteReport } = useContext(AppContext)
    const wasteReportDetail = wasteReport

    return (
        <div className='sticky top-0 z-10 shadow-subHeader rounded-sm bg-white px-8 py-3'>
            <div className='flex justify-between items-center'>
                <div className='text-gray-500 font-semibold'>Waste Report</div>
                <div>
                    <Space size={20}>
                        <Popover
                            placement='bottomRight'
                            content={
                                <div>
                                    <Link
                                        to={wasteReportDetail?.project_report.report_path || '/'}
                                        target='_blank'
                                        className='text-black cursor-pointer font-semibold text-base hover:bg-gray-100 block py-1 px-2'
                                    >
                                        Waste Report
                                    </Link>
                                    <Link
                                        to={wasteReportDetail?.supplement_report.path || '/'}
                                        target='_blank'
                                        className='text-black cursor-pointer font-semibold text-base hover:bg-gray-100 block py-1 px-2'
                                    >
                                        Supplements
                                    </Link>
                                    <div className='text-gray-500 cursor-pointer font-semibold text-base hover:bg-gray-100 block py-1 px-2'>
                                        Material Orders
                                    </div>
                                    <div className='text-gray-500 cursor-pointer font-semibold text-base hover:bg-gray-100 block py-1 px-2'>
                                        Work Orders
                                    </div>
                                    <div className='text-gray-500 cursor-pointer font-semibold text-base hover:bg-gray-100 block py-1 px-2'>
                                        Customer Invoice
                                    </div>
                                    <div className='text-gray-500 cursor-pointer font-semibold text-base hover:bg-gray-100 block py-1 px-2'>
                                        Insurance Invoice
                                    </div>
                                </div>
                            }
                            trigger='click'
                            arrow={false}
                        >
                            <Button type='default' size='large' className='text-base' icon={<DownloadOutlined />}>
                                Download
                            </Button>
                        </Popover>
                        <Popover
                            placement='bottomRight'
                            content={
                                <div>
                                    <div className='text-black cursor-pointer font-semibold text-base hover:bg-gray-100 block py-1 px-2'>
                                        Send Waste Report
                                    </div>
                                    <div className='text-black cursor-pointer font-semibold text-base hover:bg-gray-100 block py-1 px-2'>
                                        Send Supplement
                                    </div>
                                </div>
                            }
                            trigger='click'
                            arrow={false}
                        >
                            <Button type='default' size='large' className='text-base' icon={<MailOutlined />}>
                                Send via Email
                            </Button>
                        </Popover>
                    </Space>
                </div>
            </div>
        </div>
    )
}
