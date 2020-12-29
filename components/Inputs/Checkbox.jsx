import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from '../../styles/components/Checkbox.module.scss'

const Checkbox = ({ children, id, className, name, ...props }) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.inputWrap}>
                <input
                    className={clsx(styles.input, className)}
                    type='checkbox'
                    id={id}
                    name={name || id}
                    {...props}
                />
                <div className={styles.checkbox}>
                    <span className={styles.checked}>X</span>
                    <span className={styles.unchecked} />
                </div>
            </div>
            <label htmlFor={id} className={styles.label}>
                {children}
            </label>
        </div>
    )
}

Checkbox.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string.isRequired,
    className: PropTypes.any,
    name: PropTypes.string,
}

export default Checkbox
