import React, { FC, useState, ReactNode } from 'react'
import ITextFieldProps from './ITextFieldProps'
import { determineInputClass } from './textFieldLogic'
import { textFieldStyles } from './textFieldStyles'

/**
 * @component for text fields.
 *
 * @param {string} alertMsg - Optional: Set the text of the alert message below the input field. This is coupled with the validateOnChange prop being set to true.
 *
 * @param {boolean} error - Optional: Boolean value that tells the component an error has occured and will set the error style appropriately until error state has been resolved.
 *
 * @param {ReactNode} icon - Optional: Set a React node to this prop to render the icon within the input field. This is coupled with inputStyle being set to 'icon'.
 * @example
 * <TextField name='ID Card' inputType="icon" icon={<IDBadgeIcon/>} />
 *
 * @param {string} inputStyle - Optional: Set the input style of the component. Currently available are 'simple', 'icon' and 'error'.
 * @example
 * <TextField inputStyle="error" alertMsg="Whoops" validateOnChange onChange={(e)=>validatePassword(e)} />
 *
 * @param {string} label - Optional: Set the label text for the component.
 *
 * @param {boolean} validateOnChange - Optional: Set the component to monitor the return boolean of your onChange function you pass to the component.
 * @example
 * <TextField validateOnChange onChange={(e)=>validateInput(e)} alertMsg="Invalid input" />
 *
 */

const Index: FC<ITextFieldProps> = ({
    alertMsg,
    error = false,
    icon,
    inputStyle,
    label,
    name,
    onChange,
    validateOnChange,
    ...rest
}) => {
    const textFieldWrapper = 'p-5'
    const [hasError, setHasError] = useState(error)
    const handleOnChange = (e: any, onChange: Function | undefined) => {
        if (validateOnChange && onChange) {
            if (onChange(e)) {
                setHasError(true)
            } else {
                setHasError(false)
            }
        } else if (onChange) {
            onChange(e)
        }
    }

    const returnIcon = (inputStyle: string | undefined, icon: ReactNode) => {
        if (inputStyle === 'icon') {
            return <div className={textFieldStyles.iconParent}>{icon}</div>
        }
        return null
    }
    return (
        <div className={textFieldWrapper}>
            <label className={textFieldStyles.label} htmlFor={name}>
                {label}
            </label>
            <div className='relative'>
                {returnIcon(inputStyle, icon)}
                <input
                    onChange={(e) => handleOnChange(e, onChange)}
                    className={determineInputClass(inputStyle, hasError)}
                    id={name}
                    {...rest}
                ></input>
            </div>
            <p className={textFieldStyles.alertMsg}>{hasError && alertMsg}</p>
        </div>
    )
}

export default Index
