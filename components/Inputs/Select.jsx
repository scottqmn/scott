import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from '../../styles/components/Select.module.scss'

const Select = ({ children, className, ...props }) => {
    return (
        <div className={clsx(styles.wrap, 't-label', className)}>
            <select className={styles.select} {...props}>
                {children}
            </select>
            <div className={styles.arrow}>V</div>
        </div>
    )
}

Select.propTypes = {
    children: PropTypes.node,
    className: PropTypes.any,
}

export default Select
