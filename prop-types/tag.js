import PropTypes from 'prop-types'
import { prismicImagePropType, prismicLinkPropType } from './prismic'

export default {
    uid: PropTypes.string.isRequired,
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        info: prismicLinkPropType,
        logo: prismicImagePropType,
    }),
}
