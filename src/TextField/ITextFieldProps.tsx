import { InputHTMLAttributes } from 'react'
export default interface ITextFieldProps
    extends InputHTMLAttributes<HTMLInputElement> {
    inputStyle?: string
    label?: string
}
