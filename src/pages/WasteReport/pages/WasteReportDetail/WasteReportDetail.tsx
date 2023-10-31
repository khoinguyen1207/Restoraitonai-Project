import { useEffect, useMemo } from 'react'
import { Button, Divider, Form, Input, InputNumber, Select } from 'antd'
import SubHeader from '../../components/SubHeader'
import {
    COMPLEXITY_TYPES,
    NUM_MAX,
    NUM_MIN,
    ROOF_TYPES,
    SHINGLES_TYPES,
    VALLEYS_TYPES
} from 'src/constants/appConstants'
import { validateMessages } from 'src/utils/rule'
import { GetCompanyList, GetWasteReportById, UpdateWasteReport } from 'src/services/project.service'
import { WasteReportForm } from 'src/types/project.type'
import { toast } from 'react-toastify'
import Loading from 'src/components/Loading'
import { isNotFoundError } from 'src/utils/utils'
import { ErrorResponse } from 'src/types/utils.type'
import { useParams } from 'react-router-dom'

export default function WasteReportDetail({ btnRef }: { btnRef: React.RefObject<HTMLButtonElement> }) {
    const [form] = Form.useForm<WasteReportForm>()
    const { id } = useParams()
    const updateWasteReport = UpdateWasteReport()
    const wasteReportQuery = GetWasteReportById(id as string)
    const wasteReportDetail = wasteReportQuery.data?.data.data
    const companyQuery = GetCompanyList()
    const companyList = companyQuery.data?.data.data

    useEffect(() => {
        if (wasteReportDetail) {
            form.setFieldsValue({
                project_name: wasteReportDetail.project_name,
                project_first_name: wasteReportDetail.project_first_name,
                project_last_name: wasteReportDetail.project_last_name,
                claim_number: wasteReportDetail.claim_number,
                project_address: wasteReportDetail.project_address,
                project_city: wasteReportDetail.project_city,
                project_state: wasteReportDetail.project_state,
                project_zip: wasteReportDetail.project_zip,
                actual_squares: wasteReportDetail.project_spec.actual_squares,
                eaves: wasteReportDetail.project_spec.eaves,
                hips: wasteReportDetail.project_spec.hips,
                rakes: wasteReportDetail.project_spec.rakes,
                ridges: wasteReportDetail.project_spec.ridges,
                roof_complexity: wasteReportDetail.project_spec.roof_complexity,
                roof_type: wasteReportDetail.project_spec.roof_type,
                shingle_type: wasteReportDetail.project_spec.shingle_type,
                step_length: wasteReportDetail.project_spec.step_length,
                valley_type: wasteReportDetail.project_spec.valley_type,
                valleys: wasteReportDetail.project_spec.valleys,
                wall_length: wasteReportDetail.project_spec.wall_length,
                company_id: wasteReportDetail.company_id
            })
        }
    }, [wasteReportDetail, form])

    const optionCompanyList = useMemo(() => {
        return companyList?.map((company) => {
            return {
                value: company.id,
                label: company.company_name
            }
        })
    }, [companyList])

    const handleUpdateWasteReport = async (data: WasteReportForm) => {
        try {
            const newFormData = {
                ...data,
                wasteReportMode: 'original',
                job_hover_id: null
            }
            const res = await updateWasteReport.mutateAsync({
                id: wasteReportDetail?.id as number,
                wasteReport: newFormData
            })
            wasteReportQuery.refetch()
            toast.success(res.data.message, { autoClose: 1000 })
        } catch (error) {
            console.log(error)
            if (isNotFoundError<ErrorResponse>(error)) {
                toast.error(error.response?.data.message, { autoClose: 1000 })
            }
        }
    }

    return (
        <>
            <Loading isVisible={updateWasteReport.isLoading} />
            <SubHeader />
            <Form
                layout='vertical'
                form={form}
                requiredMark={false}
                onFinish={handleUpdateWasteReport}
                validateMessages={validateMessages}
                className='mt-6 px-8 py-6 rounded-sm bg-white shadow'
            >
                <h2 className='text-[24px] font-bold mb-2'>
                    Project Name{' '}
                    <span className='font-normal italic text-[18px]'>(Each field can only be changed once)</span>
                </h2>
                <div className='flex gap-10'>
                    <Form.Item
                        name='project_name'
                        className='w-full'
                        hasFeedback
                        initialValue=''
                        validateTrigger={'onBlur'}
                        rules={[{ required: true, message: 'Project Name is required' }]}
                    >
                        <Input size='large' placeholder='Project name here' />
                    </Form.Item>
                    <Button
                        type='default'
                        size='large'
                        icon={
                            <img
                                src='https://dev.restorationai.com/static/media/hover-logo.b75ecb3c.svg'
                                alt=''
                                className='w-6 h-6'
                            />
                        }
                        className='justify-center flex items-center'
                    >
                        Import Data
                    </Button>
                    <Button
                        type='default'
                        size='large'
                        className='mt-2 md:mt-0 flex items-center justify-center'
                        icon={
                            <img
                                src='data:image/png;base64,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'
                                alt=''
                                className='w-5 h-5'
                            />
                        }
                    >
                        Import Data
                    </Button>
                </div>
                <h4 className='mt-2 mb-2'>Company Profile</h4>
                <Form.Item
                    className='lg:w-[50%]'
                    name='company_id'
                    label='Select company profile to use for this project'
                >
                    <Select showSearch placeholder='Search Project' size='large' options={optionCompanyList} />
                </Form.Item>
                <h4 className='mb-2'>Customer Info</h4>
                <div className='flex lg:w-[75%] gap-8'>
                    <Form.Item
                        label='Customer First Name'
                        className='w-full'
                        validateTrigger='onBlur'
                        name='project_first_name'
                        hasFeedback
                        rules={[{ required: true, message: 'First name is required' }]}
                    >
                        <Input size='large' placeholder='First Name' />
                    </Form.Item>
                    <Form.Item
                        className='w-full'
                        label='Customer Last Name'
                        name='project_last_name'
                        validateTrigger='onBlur'
                        hasFeedback
                        rules={[{ required: true, message: 'Last Name is required' }]}
                    >
                        <Input size='large' placeholder='Last Name' />
                    </Form.Item>
                </div>
                <Form.Item
                    className='lg:w-[75%]'
                    label='Claim Number'
                    name='claim_number'
                    validateTrigger='onBlur'
                    hasFeedback
                    rules={[{ required: true }]}
                >
                    <Input size='large' placeholder='Enter Claim Number Insurance' />
                </Form.Item>
                <Form.Item
                    label='House Address'
                    className='w-full'
                    name='project_address'
                    validateTrigger='onBlur'
                    hasFeedback
                    rules={[{ required: true }]}
                >
                    <Input size='large' placeholder='Enter House Address' />
                </Form.Item>
                <div className='flex gap-8'>
                    <Form.Item
                        className='w-full'
                        name='project_city'
                        validateTrigger='onBlur'
                        hasFeedback
                        rules={[{ required: true }]}
                    >
                        <Input size='large' placeholder='City' />
                    </Form.Item>
                    <Form.Item
                        className='w-full'
                        name='project_state'
                        validateTrigger='onBlur'
                        hasFeedback
                        rules={[{ required: true }]}
                    >
                        <Input size='large' placeholder='State' />
                    </Form.Item>
                    <Form.Item
                        className='w-full'
                        name='project_zip'
                        validateTrigger='onBlur'
                        hasFeedback
                        rules={[{ required: true }]}
                    >
                        <Input size='large' placeholder='Zip code' />
                    </Form.Item>
                </div>
                <Divider />
                <h4 className='mb-2'>Roof Information</h4>
                <div className='flex gap-8 items-end'>
                    <Form.Item
                        name='shingle_type'
                        label='Shingle types'
                        className='w-full'
                        hasFeedback
                        initialValue={1}
                        rules={[
                            {
                                required: true
                            }
                        ]}
                    >
                        <Select showSearch size='large' options={SHINGLES_TYPES} />
                    </Form.Item>
                    <Form.Item
                        name='valley_type'
                        label='Valley types'
                        className='w-full'
                        hasFeedback
                        initialValue={1}
                        rules={[
                            {
                                required: true
                            }
                        ]}
                    >
                        <Select showSearch size='large' options={VALLEYS_TYPES} />
                    </Form.Item>
                    <Form.Item
                        name='roof_complexity'
                        label='Handling Error'
                        className='w-full'
                        hasFeedback
                        initialValue={1}
                        rules={[
                            {
                                required: true
                            }
                        ]}
                    >
                        <Select showSearch size='large' options={COMPLEXITY_TYPES} />
                    </Form.Item>
                    <Form.Item
                        name='roof_type'
                        label='Roof type'
                        className='w-full'
                        hasFeedback
                        initialValue={1}
                        rules={[
                            {
                                required: true
                            }
                        ]}
                    >
                        <Select showSearch size='large' options={ROOF_TYPES} />
                    </Form.Item>
                </div>
                <div className='mt-6 flex gap-8 items-end'>
                    <Form.Item
                        name='actual_squares'
                        label='Roof area (SQ)'
                        hasFeedback
                        initialValue={0}
                        className='w-full'
                    >
                        <InputNumber min={NUM_MIN} max={NUM_MAX} className='w-full' step='0.10' size='large' />
                    </Form.Item>
                    <Form.Item
                        name='valleys'
                        label='Valley Length (LF)'
                        hasFeedback
                        initialValue={0}
                        className='w-full'
                    >
                        <InputNumber min={NUM_MIN} max={NUM_MAX} className='w-full' step='0.10' size='large' />
                    </Form.Item>
                    <Form.Item name='ridges' label='Ridge Length (LF)' hasFeedback initialValue={0} className='w-full'>
                        <InputNumber min={NUM_MIN} max={NUM_MAX} className='w-full' step='0.10' size='large' />
                    </Form.Item>
                    <Form.Item name='hips' label='Hip Length (LF)' hasFeedback initialValue={0} className='w-full'>
                        <InputNumber min={NUM_MIN} max={NUM_MAX} className='w-full' step='0.10' size='large' />
                    </Form.Item>
                </div>
                <div className='flex gap-8 items-end'>
                    <Form.Item name='eaves' label='Eave Length (LF)' hasFeedback initialValue={0} className='w-full'>
                        <InputNumber min={NUM_MIN} max={NUM_MAX} className='w-full' step='0.10' size='large' />
                    </Form.Item>
                    <Form.Item name='rakes' label='Rake Length (LF)' hasFeedback initialValue={0} className='w-full'>
                        <InputNumber min={NUM_MIN} max={NUM_MAX} className='w-full' step='0.10' size='large' />
                    </Form.Item>
                    <Form.Item
                        name='wall_length'
                        label='Sidewall Length (Step) (LF)'
                        hasFeedback
                        initialValue={0}
                        className='w-full'
                    >
                        <InputNumber min={NUM_MIN} max={NUM_MAX} className='w-full' step='0.10' size='large' />
                    </Form.Item>
                    <Form.Item
                        name='step_length'
                        label='Apron/Counter (LF)'
                        hasFeedback
                        initialValue={0}
                        className='w-full'
                    >
                        <InputNumber min={NUM_MIN} max={NUM_MAX} className='w-full' step='0.10' size='large' />
                    </Form.Item>
                </div>
                <button hidden type='submit' ref={btnRef} />
            </Form>
        </>
    )
}
