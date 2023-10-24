import { Button, Divider, Input, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'src/constants/routes'

export default function PurchaseProject() {
    const navigate = useNavigate()
    return (
        <div className='bg-white rounded-sm shadow p-6'>
            <h2>Purchased Projects</h2>
            <Divider />
            <Space direction='vertical' size={30} className='w-[60%]'>
                <div>
                    <div className='text-base mb-2'>Transactional projects</div>
                    <Input value={0} size='large' disabled />
                </div>
                <div>
                    <div className='text-base mb-2'>Monthly projects - Expired at October 21, 2023 3:49 AM</div>
                    <Input value={25} size='large' disabled />
                </div>
                <Button type='primary' size='large' onClick={() => navigate(ROUTES.PAYMENT)}>
                    Purchase more projects
                </Button>
            </Space>
        </div>
    )
}
