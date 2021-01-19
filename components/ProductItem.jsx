import clsx from 'clsx'
import moment from 'moment'
import { Image } from './Prismic'
import NextLink from './NextLink'
import { getPrices } from '../utils/shop'
import styles from '../styles/components/ProductGrid.module.scss'
import projectPropTypes from '../prop-types/project'

const ProductItem = ({ uid, data }) => {
    const { name, start_date, tags, price, status, product_image } = data

    const label = tags
        .filter(({ secondary }) => !secondary)
        .map(({ tag }) => tag?.data?.name)
        .join(' / ')

    const { reg: priceRegular, sale: priceSale } = getPrices(price, status)

    return (
        <NextLink href={`/projects/${uid}`}>
            <div className={styles.project}>
                <div className={styles.thumbnail}>
                    <Image className='of-scale-down' content={product_image} />
                </div>
                <div className={clsx(styles.title, 't-body')}>{name}</div>
                <div className={clsx(styles.label, 't-label')}>{label}</div>
                <div className={clsx(styles.price, 't-body')}>
                    {priceSale ? (
                        <>
                            <span
                                className={clsx(styles.priceSale, 'c-detail')}
                            >
                                {priceSale}
                            </span>
                            <span
                                className={clsx(
                                    styles.priceRegular,
                                    'c-primary65'
                                )}
                            >
                                {priceRegular}
                            </span>
                        </>
                    ) : (
                        priceRegular
                    )}
                </div>
                <div className={clsx(styles.date, 't-label')}>
                    {moment(start_date).format('MMM YYYY')}
                </div>
            </div>
        </NextLink>
    )
}

ProductItem.propTypes = projectPropTypes

export default ProductItem
