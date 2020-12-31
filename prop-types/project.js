import PropTypes from 'prop-types'
import {
    prismicImagePropType,
    prismicLinkPropType,
    prismicRichTextPropType,
} from './prismic'
import tagPropType from './tag'

export default {
    uid: PropTypes.string.isRequired,
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: prismicLinkPropType,
        description: prismicRichTextPropType,
        start_date: PropTypes.any,
        end_date: PropTypes.any,
        images: PropTypes.arrayOf(
            PropTypes.shape({ image: prismicImagePropType })
        ),
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                secondary: PropTypes.bool,
                tag: PropTypes.shape(tagPropType),
            })
        ),
        // Store
        price: PropTypes.number,
        status: PropTypes.any,
        product_image: prismicImagePropType,
        product_details: PropTypes.arrayOf(
            PropTypes.shape({
                detail_heading: PropTypes.string,
                detail_content: prismicRichTextPropType,
            })
        ),
    }),
}
