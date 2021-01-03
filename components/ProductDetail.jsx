import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Image, RichText, PrismicLink } from './Prismic'
import { Button } from './Inputs'
import projectPropTypes from '../prop-types/project'
import styles from '../styles/components/ProductDetail.module.scss'

const ProductDetail = ({ project }) => {
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
    return (
        <div className='outer'>
            <div className='inner'>
                <div className='t-h1'>{name}</div>
                <div className={styles.layout}>
                    <div className={styles.image}>
                        <Image content={product_image} />
                    </div>
                    <div className={clsx(styles.info, 'rte')}>
                        <RichText content={description} />
                        <PrismicLink as={Button} link={link}>
                            Shop Now
                        </PrismicLink>
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
