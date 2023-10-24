import { Button, Divider, Form, Input, InputNumber } from 'antd'

export default function Profile() {
    const handleSubmit = (value: unknown) => {
        console.log(value)
    }
    return (
        <div className='bg-white rounded-sm shadow p-6'>
            <h2>Basic Profile</h2>
            <Divider />
            <Form requiredMark={false} className='lg:w-[60%]' layout='vertical' onFinish={handleSubmit}>
                <div className='flex items-center gap-5'>
                    <Form.Item
                        label='First Name'
                        validateTrigger='onBlur'
                        name='firstName'
                        className='w-full'
                        hasFeedback
                        rules={[{ required: true, message: 'First name is required' }]}
                    >
                        <Input size='large' placeholder='First Name' />
                    </Form.Item>
                    <Form.Item
                        label='Last Name'
                        validateTrigger='onBlur'
                        className='w-full'
                        name='lastName'
                        hasFeedback
                        rules={[{ required: true, message: 'Last name is required' }]}
                    >
                        <Input size='large' placeholder='Last Name' />
                    </Form.Item>
                </div>
                <Form.Item label='Email' name='email' initialValue={'khoinguyentpvl@gmail.com'}>
                    <Input size='large' disabled />
                </Form.Item>
                <Form.Item
                    name='phone'
                    validateTrigger='onBlur'
                    label='Phone Number'
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Phone number is required'
                        },
                        {
                            len: 10,
                            message: 'Invalid Phone Number'
                        }
                    ]}
                >
                    <InputNumber<string>
                        controls={false}
                        className='w-full'
                        formatter={(value) => `${value}`.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}
                        parser={(value) => `${value}`.replace(/-/g, '')}
                        size='large'
                        placeholder='Phone Number'
                        maxLength={10}
                        stringMode
                    />
                </Form.Item>
                <Button size='large' htmlType='submit' className='mt-2' type='primary'>
                    Update
                </Button>
            </Form>
        </div>
    )
}
