import classNames from 'classnames'
import React from 'react'
import ITextField from './ITextField'
import { HeroIcon } from '../HeroIcon'
import * as styles from './textField.scss'

/**
 * @component for text fields.
 */

const Index = (props: ITextField) => {
    const {
        heroIconsName,
        iconType = 'outline',
        iconPosition = 'left',
        inputType,
        ...rest
    } = props
    return (
        <div className={inputType === 'fullWidth' && styles.flexboxContainer}>
            {heroIconsName && (
                <div className={styles.svgContainer}>
                    <HeroIcon
                        width='18px'
                        name={heroIconsName}
                        iconType={iconType}
                    />
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
