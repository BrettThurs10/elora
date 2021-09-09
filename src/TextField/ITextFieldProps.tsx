import { InputHTMLAttributes, ReactNode } from 'react'
export default interface ITextFieldProps
    extends InputHTMLAttributes<HTMLInputElement> {
    inputStyle?: 'simple' | 'error' | 'icon' | undefined
    label?: string
    alertMsg?: string
    error?: boolean
    validateOnChange?: boolean
    icon?: ReactNode
}
