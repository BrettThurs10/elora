import { ButtonHTMLAttributes } from 'react'

export default interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  autofocus?: boolean
  buttonStyle?:
    | 'simple'
    | 'outline'
    | 'pill'
    | 'bordered'
    | 'disabled'
    | '3d'
    | 'elevated'
    | 'icon'
  children?: JSX.Element
  className?: string
  classNameOverride?: string
  customColor?: string
  disabled?: boolean
  icon?: any
  name?: string
  type?: 'button' | 'reset' | 'submit'
  value?: string
}
