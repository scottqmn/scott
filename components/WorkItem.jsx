import PropTypes from 'prop-types'
import clsx from 'clsx'
import moment from 'moment'
import KeyboardArrowRightRoundedIcon from '@material-ui/icons/KeyboardArrowRightRounded'
import { Image, PrismicLink } from './Prismic'
import {
    prismicImagePropType,
    prismicLinkPropType,
} from '../prop-types/prismic'
import styles from '../styles/components/WorkItem.module.scss'

const WorkItem = ({ uid, data }) => {
    const {
        role,
        company,
        logo,
        link,
        start_date: startDate,
        end_date: endDate,
    } = data

    const formattedDate = `${moment(startDate).format('MMM YYYY')} - ${
        endDate ? moment(endDate).format('MMM YYYY') : 'Present'
    }`

    return (
        <div key={uid} className={styles.item}>
            <div className='t-h3'>{role}</div>
            <div className={clsx(styles.company, 't-label')}>
                <PrismicLink link={link}>{company}</PrismicLink>
            </div>

            <div className={clsx(styles.dates, 't-label')}>{formattedDate}</div>
            <PrismicLink className={styles.button} link={link}>
                {logo ? (
                    <Image image={logo} />
                ) : (
                    <KeyboardArrowRightRoundedIcon fontSize='small' />
                )}
            </PrismicLink>
        </div>
    )
}

WorkItem.propTypes = {
    uid: PropTypes.string.isRequired,
    data: PropTypes.shape({
        role: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        link: prismicLinkPropType,
        logo: prismicImagePropType,
        start_date: PropTypes.string.isRequired,
        end_date: PropTypes.string,
    }),
}

export default WorkItem
