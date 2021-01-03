import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from '../../styles/components/Button.module.scss'

const Button = forwardRef(
    ({ children, as: Component = 'button', className, ...props }, ref) => (
        <Component
            ref={ref}
            className={clsx(styles.wrap, className, 'button')}
            {...props}
        >
            {children}
        </Component>
    )
)

Button.displayName = 'Button'

Button.propTypes = {
    children: PropTypes.node,
    as: PropTypes.oneOf(['a', 'button']),
    className: PropTypes.any,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
}

export default Button
