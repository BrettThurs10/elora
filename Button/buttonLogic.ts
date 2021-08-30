import buttonStyles from "./buttonStyle";
export const determineButtonStyle = (
  color: string | undefined,
  buttonStyle: string | undefined
) => {
  let buttonType = buttonStyles.simple(color);
  switch (buttonStyle) {
    case "simple":
      buttonType = buttonStyles.simple(color);
      break;
    case "outline":
      buttonType = buttonStyles.outline(color);
      break;
    case "pill":
      buttonType = buttonStyles.pill(color);
      break;
    case "bordered":
      buttonType = buttonStyles.bordered(color);
      break;
    case "disabled":
      buttonType = buttonStyles.disabled(color);
      break;
    case "3d":
      buttonType = buttonStyles.threeD(color);
      break;
    case "elevated":
      buttonType = buttonStyles.elevated(color);
      break;
    case "icon":
      buttonType = buttonStyles.icon(color);
      break;
    default:
      buttonType = buttonStyles.simple(color);
  }
  return buttonType;
};

export const handleOnClick = (onClick: Function | undefined) => {
  if (onClick) {
    onClick();
  }
};
export const handleClassName = (
  classNameOverride?: string,
  customColor?: string,
  buttonStyle?: string,
  className?: string
) => {
  let classNameResult;
  if (classNameOverride) {
    return classNameOverride;
  }
  classNameResult = `${determineButtonStyle(
    customColor,
    buttonStyle
  )} flex items-center`;
  if (className) {
    classNameResult += `${className}`;
  }
  return classNameResult;
};
