import { InputHTMLAttributes } from 'react'

export default interface Props extends InputHTMLAttributes<HTMLInputElement> {
    inputType?: 'pill' | 'rounded' | 'fullWidth'
    heroIconName?: string
    iconType?: 'outline' | 'solid'
}
