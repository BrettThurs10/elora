import buttonStyles from './buttonStyle'
export const determineButtonStyle = (color?: string, buttonStyle?: string) => {
  switch (buttonStyle) {
    case 'outline':
      return buttonStyles.outline(color)
    case 'pill':
      return buttonStyles.pill(color)
    case 'bordered':
      return buttonStyles.bordered(color)
    case 'disabled':
      return buttonStyles.disabled(color)
    case '3d':
      return buttonStyles.threeD(color)
    case 'elevated':
      return buttonStyles.elevated(color)
    case 'icon':
      return buttonStyles.icon(color)
    default:
      return buttonStyles.simple(color)
  }
}
export const handleClassName = (
  classNameOverride?: string,
  customColor?: string,
  buttonStyle?: string,
  className?: string
) => {
  if (classNameOverride) {
    return classNameOverride
  }
  let classNameResult = `${determineButtonStyle(
    customColor,
    buttonStyle
  )} flex items-center`
  if (className) {
    classNameResult += ` ${className}`
  }
  return classNameResult
}
