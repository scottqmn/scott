import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { Image, RichText, PrismicLink } from './Prismic'
import { Button } from './Inputs'
import NextLink from './NextLink'
import { getPrices } from '../utils/shop'
import projectPropTypes from '../prop-types/project'
import styles from '../styles/components/ProductDetail.module.scss'

const ProductDetail = ({ project }) => {
    const router = useRouter()

    const {
        name,
        link,
        description,
        start_date,
        end_date,
        images,
        tags,
        price,
        status,
        product_image,
        product_details,
    } = project.data

    const breadcrumbLinks = [
        { href: '/', label: 'Home' },
        { href: '/projects', label: 'Projects' },
    ]

    const { reg, sale } = getPrices(price, status)
    return (
        <div className='outer'>
            <div className='inner'>
                <div className={styles.breadcrumbs}>
                    {breadcrumbLinks.map(({ href, label }) => (
                        <Fragment key={href}>
                            <NextLink href={href}>{label}</NextLink>
                            <span className={styles.divider}>/</span>
                        </Fragment>
                    ))}
                    <NextLink href={router.asPath}>{name}</NextLink>
                </div>
                <div className={styles.layout}>
                    <h1 className={clsx(styles.name, 't-h3')}>{name}</h1>
                    <div className={styles.image}>
                        <Image content={product_image} />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.prices}>
                            {sale ? (
                                <>
                                    <span className={styles.sale}>{sale}</span>
                                    <span className={styles.reg}>{reg}</span>
                                </>
                            ) : (
                                reg
                            )}
                        </div>
                        <div className='rte'>
                            <RichText content={description} />
                        </div>
                        {link && (
                            <PrismicLink
                                as={Button}
                                link={link}
                                className={styles.button}
                            >
                                Shop Now
                            </PrismicLink>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductDetail.propTypes = {
    project: PropTypes.shape(projectPropTypes),
}

export default ProductDetail
