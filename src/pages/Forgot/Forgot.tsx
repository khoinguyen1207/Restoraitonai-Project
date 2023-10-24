import { Button, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import AuthHeader from 'src/components/AuthHeader'
import { ROUTES } from 'src/constants/routes'

export default function Forgot() {
    return (
        <div className='bg-[#F2F3F4] min-h-screen'>
            <AuthHeader />
            <div className='relative'>
                <div className='w-[50vh] min-w-[300px] bg-white rounded p-10 shadow-lg mx-auto my-8'>
                    <h2 className='text-center'>Forgot you password?</h2>
                    <div className='text-gray-600 my-5 text-center'>
                        Enter your email address and we’ll send you a link to reset your password
                    </div>
                    <Form requiredMark={false}>
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
                            <Input size='large' placeholder='Reset Email' />
                        </Form.Item>
                        <Button type='primary' className='mt-3' htmlType='submit' size='large' block>
                            Request reset link
                        </Button>
                    </Form>
                    <Link
                        to={ROUTES.LOGIN}
                        className='my-4 cursor-pointer text-center block text-gray-500 hover:underline hover:text-gray-500'
                    >
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    )
}
