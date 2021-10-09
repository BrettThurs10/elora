import { InputHTMLAttributes } from 'react'

export default interface Props extends InputHTMLAttributes<HTMLInputElement> {
    inputType?: 'pill' | 'rounded' | 'fullWidth' | 'icon'
    heroIconsName?: string
    iconType?: 'outline' | 'solid'
    iconPosition?: 'right' | 'left'
    error?: boolean
    errorMessage?: string
}
