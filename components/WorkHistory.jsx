import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Image, PrismicLink } from './Prismic'
import {
    prismicImagePropType,
    prismicLinkPropType,
} from '../prop-types/prismic'
import styles from '../styles/components/WorkHistory.module.scss'

const WorkItem = ({ uid, role, company, link, logo }) => {
    return (
        <div className={styles.item}>
            <Image image={logo} className={styles.logo} />
            <div className={styles.content}>
                <span className='t-h3'>{role}</span>
                {/* <span className={clsx(styles.divider, 't-caption')}>—</span> */}
                <span className={clsx(styles.divider, 't-caption')}>@</span>
                <span className={clsx(styles.company, 't-caption')}>
                    <PrismicLink link={link}>{company}</PrismicLink>
                </span>
            </div>
        </div>
    )
}

WorkItem.propTypes = {
    uid: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    link: prismicLinkPropType,
    logo: prismicImagePropType,
}

const WorkHistory = ({ items }) => {
    return (
        <div className='outer'>
            <div className='inner'>
                <h2 className='t-h2'>Work</h2>

                <ul className={styles.list}>
                    {items?.map((item) => {
                        const { uid, data } = item
                        const { role, company, logo, link } = data

                        return (
                            <li key={uid}>
                                <WorkItem
                                    uid={uid}
                                    role={role}
                                    company={company}
                                    logo={logo}
                                    link={link}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

WorkHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
}

export default WorkHistory
