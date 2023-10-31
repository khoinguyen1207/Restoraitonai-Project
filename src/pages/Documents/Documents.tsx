import { DownloadOutlined, EyeOutlined } from '@ant-design/icons'
import { Button, Modal } from 'antd'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetWasteReportById } from 'src/services/project.service'

export default function Documents() {
    const [isOpen, setIsOpen] = useState(false)
    const { id } = useParams()
    const [modalData, setModalData] = useState<{ name: string; link: string | undefined }>({
        name: '',
        link: ''
    })

    const wasteReportQuery = GetWasteReportById(id as string)

    const handleOpenModal = (name: string, link: string | undefined) => {
        setIsOpen(!isOpen)
        setModalData({
            name,
            link
        })
    }
    return (
        <div className='flex flex-col gap-3'>
            <div className='bg-white rounded-sm shadow flex items-center py-3 pr-4 justify-between'>
                <div className='px-10'>1</div>
                <div className='flex-1'>Waste Report</div>
                <Button
                    icon={<EyeOutlined />}
                    type='primary'
                    size='large'
                    onClick={() =>
                        handleOpenModal('Waste Report', wasteReportQuery.data?.data.data.project_report.report_path)
                    }
                >
                    Review
                </Button>
                <Button
                    href={wasteReportQuery.data?.data.data.project_report.report_path}
                    target='_blank'
                    icon={<DownloadOutlined />}
                    type='primary'
                    size='large'
                    className='ml-3'
                >
                    Download
                </Button>
            </div>
            <div className='bg-white rounded-sm shadow flex items-center py-3 pr-4 justify-between'>
                <div className='px-10'>2</div>
                <div className='flex-1'>Supplement Report</div>
                <Button
                    icon={<EyeOutlined />}
                    type='primary'
                    size='large'
                    onClick={() =>
                        handleOpenModal('Supplement Report', wasteReportQuery.data?.data.data.supplement_report.path)
                    }
                >
                    Review
                </Button>
                <Button
                    href={wasteReportQuery.data?.data.data.supplement_report.path}
                    target='_blank'
                    icon={<DownloadOutlined />}
                    type='primary'
                    size='large'
                    className='ml-3'
                >
                    Download
                </Button>
            </div>
            <div className='bg-white rounded-sm shadow flex items-center py-3 pr-4 justify-between'>
                <div className='px-10'>3</div>
                <div className='flex-1'>Material Orders</div>
                <Button icon={<EyeOutlined />} type='primary' size='large' disabled>
                    Review
                </Button>
                <Button icon={<DownloadOutlined />} type='primary' size='large' className='ml-3' disabled>
                    Download
                </Button>
            </div>
            <div className='bg-white rounded-sm shadow flex items-center py-3 pr-4 justify-between'>
                <div className='px-10'>4</div>
                <div className='flex-1'>Work Orderst</div>
                <Button icon={<EyeOutlined />} type='primary' size='large' disabled>
                    Review
                </Button>
                <Button icon={<DownloadOutlined />} type='primary' size='large' className='ml-3' disabled>
                    Download
                </Button>
            </div>
            <div className='bg-white rounded-sm shadow flex items-center py-3 pr-4 justify-between'>
                <div className='px-10'>5</div>
                <div className='flex-1'>Customer Invoice</div>
                <Button icon={<EyeOutlined />} type='primary' size='large' disabled>
                    Review
                </Button>
                <Button icon={<DownloadOutlined />} type='primary' size='large' className='ml-3' disabled>
                    Download
                </Button>
            </div>
            <div className='bg-white rounded-sm shadow flex items-center py-3 pr-4 justify-between'>
                <div className='px-10'>6</div>
                <div className='flex-1'>Insurance Invoice</div>
                <Button icon={<EyeOutlined />} type='primary' size='large' disabled>
                    Review
                </Button>
                <Button icon={<DownloadOutlined />} type='primary' size='large' className='ml-3' disabled>
                    Download
                </Button>
            </div>
            <Modal centered open={isOpen} width={1200} footer={null} onCancel={() => setIsOpen(!isOpen)}>
                <h3>{modalData.name}</h3>
                <div className='w-full h-[1px] bg-gray-400 my-4' />
                <iframe title='pdf' src={modalData.link} className='w-full h-[550px]'></iframe>
            </Modal>
        </div>
    )
}
