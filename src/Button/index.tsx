import React from 'react'
import IButtonProps from './IButtonProps'
import * as styles from './button.scss'

/**
 * @component for the all mighty button.
 */

const Index = React.forwardRef<HTMLButtonElement, IButtonProps>(
    (props, ref) => {
        // const styles = require('./button.scss')
        const { btnType, ...rest } = props
        return <button className={styles[btnType]} ref={ref} {...rest} />
    }
)

export default Index
