import { Button, Form, Input, InputNumber, Select, Space } from 'antd'
import AuthHeader from 'src/components/AuthHeader'
import { REFERRAL_TYPES } from 'src/constants/appConstants'

export default function Register() {
    const handleRegister = (values: unknown) => {
        console.log(values)
    }
    return (
        <div className=' bg-[#F2F3F4]'>
            <AuthHeader />
            <div className='min-h-screen'>
                <div className='max-w-[45vh] min-w-[300px] bg-white rounded p-10 shadow-lg mx-auto'>
                    <h2 className='mb-6 text-center'>Create Account</h2>
                    <Form name='registerForm' onFinish={handleRegister} layout='vertical' requiredMark={false}>
                        <Space direction='horizontal' size={30}>
                            <Form.Item
                                name='firstName'
                                label='First Name'
                                validateTrigger='onBlur'
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'First name is required'
                                    }
                                ]}
                            >
                                <Input size='large' placeholder='John' />
                            </Form.Item>
                            <Form.Item
                                name='lastName'
                                label='Last Name'
                                validateTrigger='onBlur'
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Last name is required'
                                    }
                                ]}
                            >
                                <Input size='large' placeholder='Doe' />
                            </Form.Item>
                        </Space>
                        <Form.Item
                            name='email'
                            label='Email'
                            validateTrigger='onBlur'
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Email is required'
                                },
                                {
                                    // eslint-disable-next-line no-useless-escape
                                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                    message: 'Invalid email format'
                                }
                            ]}
                        >
                            <Input size='large' placeholder='Email or Username' />
                        </Form.Item>
                        <Form.Item
                            name='password'
                            validateTrigger='onBlur'
                            label='Password'
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Password is required'
                                },
                                {
                                    min: 6,
                                    message: 'Password must greater than 6 characters'
                                }
                            ]}
                        >
                            <Input.Password size='large' placeholder='Password' />
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
                        <Form.Item
                            name='question'
                            initialValue={'google'}
                            label='How did you find out about the app?'
                            hasFeedback
                        >
                            <Select showSearch size='large' options={REFERRAL_TYPES} />
                        </Form.Item>
                        <Button type='primary' htmlType='submit' size='large' block>
                            Create Account
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
