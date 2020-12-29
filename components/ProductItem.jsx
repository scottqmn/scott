import PropTypes from 'prop-types'
import clsx from 'clsx'
import numeral from 'numeral'
import moment from 'moment'
import styles from '../styles/components/ProductGrid.module.scss'

const ProductItem = ({ title, subtitle, imgUrl, price, date }) => {
    return (
        <div className={styles.project}>
            <div className={styles.thumbnail}>
                <img
                    className='of-cover'
                    src={imgUrl}
                    alt='random placeholder'
                />
            </div>
            <div className={clsx(styles.title, 't-body')}>{title}</div>
            <div className={clsx(styles.label, 't-label')}>{subtitle}</div>
            <div className={clsx(styles.price, 't-body')}>
                {numeral(price).format('$0')}
            </div>
            <div className={clsx(styles.date, 't-label')}>
                {moment(date).format('MMM YYYY')}
            </div>
        </div>
    )
}

ProductItem.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    price: PropTypes.number,
    date: PropTypes.any,
}

export default ProductItem
