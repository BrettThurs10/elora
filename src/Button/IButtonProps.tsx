import { ButtonHTMLAttributes } from 'react'

export default interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?:
    | 'simple'
    | 'outline'
    | 'pill'
    | 'bordered'
    | 'disabled'
    | '3d'
    | 'elevated'
    | 'icon'
  className?: string
  classNameOverride?: string
  customColor?: string
  type?: 'button' | 'reset' | 'submit'
}
