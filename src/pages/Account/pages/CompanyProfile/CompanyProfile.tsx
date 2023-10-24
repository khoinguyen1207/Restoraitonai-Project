import { useState, useMemo } from 'react'
import { PlusOutlined, UploadOutlined } from '@ant-design/icons'
import { Select, Form, Button, Divider, Input, Upload, InputNumber } from 'antd'
import { RcFile } from 'antd/es/upload'
import { FILE_MAX_SIZE, NUM_MAX, NUM_MIN } from 'src/constants/appConstants'
import { validateMessages } from 'src/utils/rule'
import PhoneNumberInput from 'src/components/PhoneNumberInput'

interface FormData {
    companyName: string
    upload: RcFile[]
}

export default function CompanyProfile() {
    const [file, setFile] = useState<File>()

    const previewImage = useMemo(() => {
        return file ? URL.createObjectURL(file) : ''
    }, [file])

    const handleSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <div className='bg-white rounded-sm shadow p-6'>
            <Form layout='vertical' validateMessages={validateMessages} onFinish={handleSubmit} requiredMark={false}>
                <div className='w-[80%]'>
                    <h2 className='mb-4'>Company Profile</h2>
                    <div className='flex items-start gap-5'>
                        <Form.Item className='w-full'>
                            <Select
                                showSearch
                                placeholder='Search Project'
                                defaultValue={'1'}
                                size='large'
                                options={[
                                    {
                                        value: '1',
                                        label: 'Company 1'
                                    },
                                    {
                                        value: '2',
                                        label: 'Company 2'
                                    },
                                    {
                                        value: '3',
                                        label: 'Company 3'
                                    }
                                ]}
                            />
                        </Form.Item>
                        <Button type='default' htmlType='submit' size='large' icon={<PlusOutlined />}>
                            Add company
                        </Button>
                    </div>
                    <Divider className='mt-0' />
                    <h3 className='mb-2'>Company Profile</h3>
                    <Form.Item
                        label='Company name'
                        validateTrigger='onBlur'
                        name='companyName'
                        hasFeedback
                        rules={[{ required: true }]}
                    >
                        <Input size='large' placeholder='RestorationAI' />
                    </Form.Item>
                    <div className='flex items-start justify-between'>
                        <div>
                            <div className='text-base'>Company logo</div>
                            <div className='text-gray-400 text-sm font-semibold'>
                                You can upload a JPG, GIF or PNG file
                            </div>
                            <div className='text-gray-400 text-sm font-semibold'>(File size limit is 4 MB)</div>
                            <Form.Item
                                name='upload'
                                className='mt-4'
                                valuePropName='fileList'
                                getValueFromEvent={(event) => {
                                    return event?.fileList
                                }}
                                rules={[
                                    {
                                        validator(_, fileList: RcFile[]) {
                                            return new Promise((resolve, rejects) => {
                                                if (fileList && fileList[0].size > FILE_MAX_SIZE) {
                                                    rejects('File size limit is 4 MB')
                                                } else {
                                                    resolve('Success')
                                                }
                                            })
                                        }
                                    }
                                ]}
                            >
                                <Upload
                                    accept='.jpg,.gif,.png'
                                    showUploadList={false}
                                    maxCount={1}
                                    customRequest={(option) => {
                                        setFile(option.file as RcFile)
                                    }}
                                >
                                    <Button icon={<UploadOutlined />}>Browse</Button>
                                </Upload>
                            </Form.Item>
                        </div>
                        <img
                            src={
                                previewImage ||
                                'https://png.pngtree.com/png-vector/20190508/ourmid/pngtree-gallery-vector-icon-png-image_1028015.jpg'
                            }
                            alt='logo'
                            className='w-28 h-28 rounded overflow-hidden'
                        />
                    </div>
                    <div className='flex items-end gap-8'>
                        <Form.Item
                            name='phoneNumber'
                            validateTrigger='onBlur'
                            className='w-full'
                            label='Phone Number'
                            hasFeedback
                            rules={[
                                {
                                    required: true
                                },
                                {
                                    len: 10,
                                    message: 'Invalid Phone Number'
                                }
                            ]}
                        >
                            <PhoneNumberInput placeholder='Phone Number' />
                        </Form.Item>
                        <Form.Item
                            name='companyFaxNumber'
                            validateTrigger='onBlur'
                            label='Company Fax Number'
                            className='w-full'
                            hasFeedback
                            rules={[
                                {
                                    required: true
                                },
                                {
                                    len: 10,
                                    message: 'Invalid Company Fax Number'
                                }
                            ]}
                        >
                            <PhoneNumberInput placeholder='Company Fax Number' />
                        </Form.Item>
                    </div>
                    <Form.Item
                        label='Address'
                        validateTrigger='onBlur'
                        name='address'
                        hasFeedback
                        rules={[{ required: true }]}
                    >
                        <Input size='large' placeholder='Address' />
                    </Form.Item>
                    <div className='flex items-center gap-8'>
                        <Form.Item
                            label='State'
                            className='w-full'
                            validateTrigger='onBlur'
                            name='state'
                            hasFeedback
                            rules={[{ required: true }]}
                        >
                            <Input size='large' placeholder='State' />
                        </Form.Item>
                        <Form.Item
                            label='City'
                            className='w-full'
                            validateTrigger='onBlur'
                            name='city'
                            hasFeedback
                            rules={[{ required: true }]}
                        >
                            <Input size='large' placeholder='City' />
                        </Form.Item>
                        <Form.Item
                            label='Zip Code'
                            className='w-full'
                            validateTrigger='onBlur'
                            name='zipCode'
                            hasFeedback
                            rules={[{ required: true }]}
                        >
                            <Input size='large' placeholder='Zip Code' />
                        </Form.Item>
                    </div>
                    <h3 className='mb-2 mt-8'>Recent Xactimate Pricing (Install only)</h3>
                    <div className='flex items-end gap-8 mb-2'>
                        <Form.Item
                            name='laminatedShingles'
                            label='Price for Laminated Shingles (SQ)*'
                            hasFeedback
                            className='w-full'
                            initialValue={0}
                        >
                            <InputNumber className='w-full' min={NUM_MIN} max={NUM_MAX} step='0.10' size='large' />
                        </Form.Item>
                        <Form.Item
                            className='w-full'
                            name='tabShingles'
                            label='Price for 3 Tab Shingles (SQ)*'
                            hasFeedback
                            initialValue={0}
                        >
                            <InputNumber className='w-full' min={NUM_MIN} max={NUM_MAX} step='0.10' size='large' />
                        </Form.Item>
                    </div>
                    <div className='flex items-end gap-6'>
                        <Form.Item
                            name='priceCap'
                            label='Price for cap (LF)*'
                            hasFeedback
                            className='w-full'
                            initialValue={0}
                        >
                            <InputNumber className='w-full' min={NUM_MIN} max={NUM_MAX} step='0.10' size='large' />
                        </Form.Item>
                        <Form.Item
                            className='w-full'
                            name='priceStarter'
                            label='Price for starter (LF)*'
                            hasFeedback
                            initialValue={0}
                        >
                            <InputNumber className='w-full' min={NUM_MIN} max={NUM_MAX} step='0.10' size='large' />
                        </Form.Item>
                    </div>
                </div>
                <div className='flex items-center gap-8'>
                    <Button type='primary' size='large' className='w-full'>
                        Update
                    </Button>
                    <Button type='default' size='large' className='w-full' disabled>
                        Make as default
                    </Button>
                    <Button type='default' size='large' disabled className='w-full'>
                        Deactive
                    </Button>
                </div>
            </Form>
        </div>
    )
}
