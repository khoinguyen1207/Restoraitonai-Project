import { Divider, Input, Form, Button } from 'antd'
import { validateMessages } from 'src/utils/rule'

interface FormData {
    currentPassword: string
    newPassword: string
}

export default function ChangePassword() {
    const handleSubmit = (data: FormData) => {
        console.log(data)
    }
    return (
        <div className='bg-white rounded-sm shadow p-6'>
            <h2>Change Password</h2>
            <Divider />
            <Form
                requiredMark={false}
                className='w-[60%]'
                onFinish={handleSubmit}
                layout='vertical'
                validateMessages={validateMessages}
            >
                <Form.Item
                    label='Current Password'
                    name='currentPassword'
                    hasFeedback
                    validateTrigger='onBlur'
                    rules={[{ required: true }, { min: 6 }]}
                >
                    <Input.Password size='large' placeholder='Enter your current password' />
                </Form.Item>
                <Form.Item
                    label='New Password'
                    name='newPassword'
                    hasFeedback
                    validateTrigger='onBlur'
                    rules={[{ required: true }, { min: 6 }]}
                >
                    <Input.Password size='large' placeholder='Enter your new password' />
                </Form.Item>
                <Button size='large' className='w-[40%] my-2' type='primary' htmlType='submit'>
                    Change Password
                </Button>
            </Form>
        </div>
    )
}
