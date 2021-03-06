import { ButtonHTMLAttributes } from 'react'

export default interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    btnType?: 'pill' | 'rounded' | 'fullWidth'
    heroIconName?: string
    iconType?: 'outline' | 'solid'
}
