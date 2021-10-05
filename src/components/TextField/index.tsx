import classNames from 'classnames'
import React from 'react'
import ITextField from './ITextField'
import * as styles from './textField.scss'

/**
 * @component for text fields.
 */

const Index = (props: ITextField) => {
    const {
        heroIconName,
        iconType = 'outline',
        iconPosition = 'left',
        inputType,
        ...rest
    } = props
    const iconOutline = require('@heroicons/react/outline')
    const iconSolid = require('@heroicons/react/solid')
    let heroIcons = iconOutline
    let Icon = undefined
    if (iconType === 'solid') {
        heroIcons = iconSolid
    }
    if (heroIconName) {
        Icon = heroIcons[heroIconName]
    }
    return (
        <div className={inputType === 'fullWidth' && styles.flexboxContainer}>
            {heroIconName && (
                <div className={styles.svgContainer}>
                    <Icon />
                </div>
            )}
            <input
                className={classNames(
                    inputType && styles[inputType],
                    inputType === 'icon' && styles.pl30
                )}
                {...rest}
            />
        </div>
    )
}

export default Index
