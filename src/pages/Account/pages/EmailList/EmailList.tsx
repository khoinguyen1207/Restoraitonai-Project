import { Button, Divider, Form, Input, Select } from 'antd'
import { validateMessages } from 'src/utils/rule'

interface FormData {
    fullName: string
    email: string
    phone: string
    position: string
}

export default function EmailList() {
    const handleSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <div className='bg-white rounded-sm shadow p-6'>
            <h2>Email List</h2>
            <Form
                layout='vertical'
                requiredMark={false}
                onFinish={handleSubmit}
                validateMessages={validateMessages}
                className='w-[60%]'
            >
                <Select showSearch placeholder='Select Email Added' size='large' className='w-full mt-4' />
                <Divider />
                <Form.Item
                    label='Full Name'
                    validateTrigger='onBlur'
                    name='fullName'
                    className='w-full'
                    hasFeedback
                    rules={[{ required: true }]}
                >
                    <Input size='large' placeholder='John' />
                </Form.Item>
                <Form.Item
                    label='Email'
                    validateTrigger='onBlur'
                    name='email'
                    className='w-full'
                    hasFeedback
                    rules={[
                        { required: true },
                        // eslint-disable-next-line no-useless-escape
                        { pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: 'Invalid email format' }
                    ]}
                >
                    <Input size='large' placeholder='name@example.com' />
                </Form.Item>
                <Form.Item
                    label='Phone'
                    validateTrigger='onBlur'
                    name='phone'
                    className='w-full'
                    hasFeedback
                    rules={[{ required: true }]}
                >
                    <Input size='large' placeholder='Phone' />
                </Form.Item>
                <Form.Item label='Position' validateTrigger='onBlur' name='position' className='w-full' hasFeedback>
                    <Input size='large' placeholder='Position' />
                </Form.Item>
                <Button type='primary' htmlType='submit' size='large' className='mt-3 w-[50%]'>
                    Add new
                </Button>
            </Form>
        </div>
    )
}
