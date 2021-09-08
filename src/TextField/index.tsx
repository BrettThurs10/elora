import React, { FC, useState } from 'react'
import ITextFieldProps from './ITextFieldProps'
import { determineInputClass } from './textFieldLogic'
import { textFieldStyles } from './textFieldStyles'

const Index: FC<ITextFieldProps> = ({
    name,
    label,
    error = false,
    alertMsg,
    inputStyle,
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
    return (
        <div className={textFieldWrapper}>
            <label className={textFieldStyles.label} htmlFor={name}>
                {label}
            </label>
            <input
                onChange={(e) => handleOnChange(e, onChange)}
                className={determineInputClass(inputStyle, hasError)}
                id={name}
                {...rest}
            ></input>
            <p className={textFieldStyles.alertMsg}>{hasError && alertMsg}</p>
        </div>
    )
}

export default Index
