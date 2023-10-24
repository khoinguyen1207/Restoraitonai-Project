import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Button, ConfigProvider, Input, Popover, Table } from 'antd'
import projectApi from 'src/apis/project.api'
import type { ColumnsType } from 'antd/es/table'
import { DownloadOutlined, EditOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import Loading from 'src/components/Loading'
import { WasteReport } from 'src/types/project.type'
import { ROUTES } from 'src/constants/routes'

interface DataType extends WasteReport {
    key: React.Key
    project_fullname: string
    customer_fullname: string
    address_fullname: string
}

const columns: ColumnsType<DataType> = [
    {
        key: 1,
        title: 'Project',
        render(record) {
            return (
                <Link to={ROUTES.EDIT_WASTE_REPORT + '/' + record.key} className='font-semibold'>
                    {record.project_fullname}
                </Link>
            )
        }
    },
    {
        key: 2,
        title: 'Customer',
        dataIndex: 'customer_fullname'
    },
    {
        key: 3,
        title: 'Address',
        dataIndex: 'address_fullname'
    },
    {
        key: 4,
        render(record) {
            const wasteReport = record as DataType
            return (
                <div className='flex gap-5'>
                    <Popover
                        placement='bottomRight'
                        content={
                            <div>
                                <Link
                                    to={wasteReport.project_report.report_path}
                                    target='_blank'
                                    className='text-black cursor-pointer font-semibold text-base hover:bg-gray-100 block py-1 px-2'
                                >
                                    Waste Report
                                </Link>
                                <Link
                                    to={wasteReport.supplement_report.path}
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
                        <Button type='primary' icon={<DownloadOutlined />}>
                            Download
                        </Button>
                    </Popover>
                    <Popover
                        placement='bottomRight'
                        content={
                            <div>
                                <Link
                                    to={ROUTES.EDIT_WASTE_REPORT + '/' + wasteReport.id}
                                    className='text-black cursor-pointer font-semibold text-base hover:bg-gray-100 block py-1 px-2'
                                >
                                    Waste Report
                                </Link>
                                <Link
                                    to={ROUTES.EDIT_WASTE_REPORT + '/' + wasteReport.id + '?tabName=supplement'}
                                    className='text-black cursor-pointer font-semibold text-base hover:bg-gray-100 block py-1 px-2'
                                >
                                    Supplements Report
                                </Link>
                                <div className='text-gray-500 cursor-pointer font-semibold text-base hover:bg-gray-100 block py-1 px-2'>
                                    Material Orders
                                </div>
                            </div>
                        }
                        trigger='click'
                        arrow={false}
                    >
                        <Button type='primary' icon={<EditOutlined />}>
                            Edit
                        </Button>
                    </Popover>
                    <Button type='default' className='border-red-600'>
                        Delete
                    </Button>
                </div>
            )
        }
    }
]

export default function Dashboard() {
    const [pageNum] = useState(1)
    const navigate = useNavigate()

    const { data, isLoading } = useQuery({
        queryKey: ['getAllProject'],
        queryFn: () => projectApi.getAllProject({ pageNum, key: '' }),
        onSuccess(data) {
            if (data.data.data.length < 0) {
                navigate(ROUTES.CREATE_WASTE_REPORT)
            }
        }
    })

    const projectList = useMemo(() => {
        return data?.data.data.map((item) => {
            return {
                ...item,
                key: item.id,
                project_fullname: item.project_name,
                customer_fullname: `${item.project_first_name} ${item.project_last_name}`,
                address_fullname: `${item.project_address}, ${item.project_city}, ${item.project_state}, ${item.project_zip}`
            }
        })
    }, [data])

    return (
        <div className='bg-paleGray items-center justify-between relative'>
            <Loading isVisible={isLoading} />
            <div className='bg-white px-6 flex items-center relative justify-between py-3 shadow'>
                <div className='flex items-center gap-6'>
                    <h3>Dashboard</h3>
                    <div className='py-2 px-3 bg-gray-200 text-sm'>{data?.data.data.length} Active Items</div>
                    <div className='py-2 px-3 bg-gray-200 text-sm'>25 Waste Reports available</div>
                </div>
                <div className='flex items-center'>
                    <Input placeholder='Search Project, Customer or Address' className='w-[400px]' size='large' />
                </div>
            </div>
            <div className='p-4 bg-paleGray h-screen'>
                <ConfigProvider
                    theme={{
                        components: {
                            Table: {
                                cellFontSize: 16,
                                headerBg: 'F2F3F4'
                            }
                        }
                    }}
                >
                    <Table
                        columns={columns}
                        dataSource={projectList}
                        size='large'
                        pagination={{ position: ['bottomCenter'], pageSize: 10 }}
                    />
                </ConfigProvider>
            </div>
        </div>
    )
}
