import { Input } from 'antd'
import { InputHTMLAttributes, useState } from 'react'

export default function PhoneNumberInput({ onChange, value = '', ...rest }: InputHTMLAttributes<HTMLInputElement>) {
    const [localValue, setLocalValue] = useState<string>(value as string)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        if (value.match(/^[0-9]+$/) || value === '') {
            onChange && onChange(event)
            setLocalValue(value)
        }
    }

    return <Input {...rest} value={value || localValue} size='large' onChange={handleChange} maxLength={10} />
}
