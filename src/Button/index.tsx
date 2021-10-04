import React, { Fragment } from 'react'
import IButtonProps from './IButtonProps'
import * as styles from './button.scss'

/**
 * @component for the all mighty button.
 */

const Index = React.forwardRef<HTMLButtonElement, IButtonProps>(
    (props, ref) => {
        // const styles = require('./button.scss')
        const {
            children,
            heroIconName,
            iconType = 'outline',
            btnType,
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
            <button className={btnType && styles[btnType]} ref={ref} {...rest}>
                {heroIconName && <Icon className={styles.svgIcon} />}
                {children}
            </button>
        )
    }
)

export default Index
