import PropTypes from 'prop-types'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import WorkItem from './WorkItem'
import styles from '../styles/components/ItemList.module.scss'

const ItemList = ({ heading, items }) => {
    const list = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    }

    return (
        <div className='outer'>
            <div className='inner--sm'>
                {heading && (
                    <h2 className={clsx(styles.heading, 't-h2')}>{heading}</h2>
                )}
                <motion.ul
                    className={styles.list}
                    initial='hidden'
                    animate='visible'
                    variants={list}
                >
                    {items?.map(({ uid, data }) => {
                        return (
                            <motion.li key={uid} variants={item}>
                                <WorkItem uid={uid} data={data} />
                            </motion.li>
                        )
                    })}
                </motion.ul>
            </div>
        </div>
    )
}

ItemList.propTypes = {
    heading: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
}

export default ItemList
