import PropTypes from 'prop-types'
import clsx from 'clsx'
import moment from 'moment'
import KeyboardArrowRightRoundedIcon from '@material-ui/icons/KeyboardArrowRightRounded'
import { Image, PrismicLink } from './Prismic'
import {
    prismicImagePropType,
    prismicLinkPropType,
} from '../prop-types/prismic'
import styles from '../styles/components/ItemList.module.scss'

const WorkItem = ({ role, company, link, logo, startDate, endDate }) => {
    const formattedDate = `${moment(startDate).format('MMM YYYY')} - ${
        endDate ? moment(endDate).format('MMM YYYY') : 'Present'
    }`

    return (
        <div className={styles.item}>
            <div className='t-h3'>{role}</div>
            {/* <div className={styles.content}>
                <span className={clsx(styles.divider, 't-caption')}>—</span>
                <span className={clsx(styles.company, 't-caption')}>
                    <PrismicLink link={link}>{company}</PrismicLink>
                </span>
            </div> */}

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
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    link: prismicLinkPropType,
    logo: prismicImagePropType,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
}

const ItemList = ({ items }) => {
    return (
        <div className='outer'>
            <div className='inner'>
                <h2 className={clsx(styles.heading, 't-h2')}>Work</h2>

                <ul className={styles.list}>
                    {items?.map((item, index) => {
                        const { uid, data } = item
                        const {
                            role,
                            company,
                            logo,
                            link,
                            start_date,
                            end_date,
                        } = data

                        return (
                            <li key={uid}>
                                <WorkItem
                                    uid={uid}
                                    role={role}
                                    company={company}
                                    logo={index && logo}
                                    link={link}
                                    startDate={start_date}
                                    endDate={end_date}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

ItemList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
}

export default ItemList
