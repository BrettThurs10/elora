import React from 'react'
import IButtonProps from './IButtonProps'
import { handleClassName } from './buttonLogic'

/**
 * @component for the all mighty button.
 *
 * @param {string} buttonStyle - Optional: Choose a button style from "simple", "pill", "3d", "elevated", "disabled", or "icon". Default is set to "simple" within the component if not specified
 *
 * @param {JsxElement} children - Optional: Put any React components you want inside your Button tag.
 * @example
 *    <Button className="styles.coolButton">
 *        <p>Click me</p>
 *    </Button>
 *
 * @param {string} className - Optional: Add a class onto your buttonStyle prop as you see fit. For instance the "pill" buttonStyle has a default background of blue, but you could set this to "bg-pink-600" and it would add to the class attribute, thereby replacing the blue background set with "pill". Likewise, you could simply use the customColor prop in this scenario and set it to just "pink". See customColor for more info.
 * @example
 * <Button buttonStyle="pill" className="bg-pink-600" />
 *
 * @param {string} classNameOverride - Optional: Replace the default className prop with someething entirely your own either with a CSS class or a Tailwind string you've cooked up.
 * @example
 * <Button type="bordered" classNameOverride={styles.wayBetterBorderedBtn} />
 *
 * @param {string} customColor - Optional: Set the primary color you want the button to have.
 * @example
 * <Button customColor="green"><p>I prefer green</p></Button>
 *
 * @param {JSXElement} icon - Optional: Pass in the JSX element you want to act as your icon for buttonStyle props set to "icon".
 * @example
 * <Button buttonStyle="icon" icon={DownloadButtonIcon}><p>Download</p></Button>
 *
 *  * @param {string} type - Optional: Set the type of button you want. Defaults to 'button'.
 */

const Index = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      icon,
      classNameOverride,
      customColor = 'blue',
      buttonStyle,
      className,
      children,
      type = 'button'
    },
    ref,
    ...rest
  ) => (
    <button
      type={type}
      ref={ref}
      className={handleClassName(
        classNameOverride,
        customColor,
        buttonStyle,
        className
      )}
      {...rest}
    >
      {icon}
      {children}
    </button>
  )
)

export default Index
