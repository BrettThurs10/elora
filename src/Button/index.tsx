import React from 'react'
import IButtonProps from './IButtonProps'
import { handleOnClick, handleClassName } from './buttonLogic'

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
 * @param {string} name - Optional: Set the name attribute of the button.
 *
 * @param {function} onClick - Optional: Set the function that should run when the user clicks the button.
 *
 * @param {string} type - Optional: Set the button type: "button" | "submit" | "reset". Defaults to "button" if undefined.
 *
 * @param {string} value - Optional: Set the initial value of the button.
 */

const index = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (props, ref, ...rest) => (
    <button
      ref={ref}
      name={props.name}
      onClick={() => handleOnClick(props.onClick)}
      type={props.type ? props.type : 'button'}
      value={props.value}
      className={handleClassName(
        props.classNameOverride,
        props.customColor,
        props.buttonStyle,
        props.className
      )}
      {...rest}
    >
      {props.icon}
      {props.children}
    </button>
  )
)

export default index
