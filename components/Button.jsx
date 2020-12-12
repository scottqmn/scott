import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from '../styles/components/Button.module.scss'

const Button = ({
    children,
    as: Component = 'button',
    className,
    ...props
}) => {
    return (
        <Component className={clsx(styles.wrap, className)} {...props}>
            {children}
        </Component>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    as: PropTypes.oneOf(['a', 'button']),
    className: PropTypes.any,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
}

export default Button
