import React, { FC, useState, ReactNode } from 'react'
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
    icon,
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
