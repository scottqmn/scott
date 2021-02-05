import PropTypes from 'prop-types'
import styles from '../styles/components/RatioContainer.module.scss'

const RatioContainer = ({ children, className, ratio = 9 / 16, ...props }) => {
    return Number.isNaN(ratio) ? (
        children
    ) : (
        <div {...props}>
            <div
                className={styles.ratio}
                style={{ paddingBottom: `${ratio * 100}%` }}
            >
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    )
}

RatioContainer.propTypes = {
    children: PropTypes.node,
    className: PropTypes.any,
    ratio: PropTypes.number,
}

export default RatioContainer
