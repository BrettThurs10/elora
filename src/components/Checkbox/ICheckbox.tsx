import { InputHTMLAttributes } from 'react'

export default interface Props extends InputHTMLAttributes<HTMLInputElement> {
    selected: boolean
    callback: Function
}
