import React, { useState } from 'react'
import ICheckBox from './ICheckbox'
import * as styles from './checkboxStyles.scss'

/**
 * @component for checkboxes.
 */
const classNames = require('classnames')
const Index = (props: ICheckBox) => {
    const { className, selected = false, callback } = props
    const [isSelected, setSelected] = useState(selected)
    const handleSelection = () => {
        setSelected(!isSelected)
        console.log(isSelected)
        if (callback) {
            callback()
        }
    }
    return (
        <input
            onChange={() => handleSelection()}
            checked={selected}
            className={classNames(
                styles.checkbox,
                className,
                isSelected && styles.selected
            )}
            type='checkbox'
        />
    )
}

export default Index
