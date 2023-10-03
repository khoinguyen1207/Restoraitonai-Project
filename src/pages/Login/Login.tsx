import { Button, Form, Input, Space } from 'antd'
import { Link } from 'react-router-dom'
import AuthHeader from 'src/components/AuthHeader'
import { ROUTES } from 'src/constants/routes'

export default function Login() {
    return (
        <div className='min-h-screen bg-[#F2F3F4]'>
            <AuthHeader />
            <div className='relative'>
                <div className='w-[45vh] min-w-[300px] bg-white rounded p-10 shadow-lg mx-auto my-8'>
                    <h2 className='mb-6 text-center'>Welcome Back</h2>
                    <Form>
                        <Space className='w-full' size={5} direction='vertical'>
                            <Form.Item
                                name='email'
                                hasFeedback
                                validateTrigger='onBlur'
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
                            <Button type='primary' htmlType='submit' size='large' block>
                                Sign in
                            </Button>
                        </Space>
                    </Form>
                    <Link
                        to={ROUTES.FORGOT}
                        className='my-4 cursor-pointer text-center block text-gray-500 hover:underline hover:text-gray-500'
                    >
                        Forgot your password?
                    </Link>
                </div>
            </div>
        </div>
    )
}
