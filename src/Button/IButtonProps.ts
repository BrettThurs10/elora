export default interface Props {
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
  onClick?: Function
  type?: 'button' | 'reset' | 'submit'
  value?: string
}
