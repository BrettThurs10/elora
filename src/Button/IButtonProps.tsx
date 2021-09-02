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
  children?: React.ReactNode
  className?: string
  classNameOverride?: string
  customColor?: string
  disabled?: boolean
  icon?: JSX.Element
  type?: 'button' | 'reset' | 'submit'
}
