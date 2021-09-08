import React, { FC } from 'react'
import ITextFieldProps from './ITextFieldProps'
import { determineInputClass } from './textFieldLogic'

const Index: FC<ITextFieldProps> = ({ name, label, inputStyle, ...rest }) => {
    const textFieldWrapper = 'p-5'
    return (
        <div className={textFieldWrapper}>
            <label className='block' htmlFor={name}>
                {label}
            </label>
            <input
                className={determineInputClass(inputStyle)}
                id={name}
                {...rest}
            ></input>
        </div>
    )
}

export default Index
