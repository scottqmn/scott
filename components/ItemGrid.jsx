import PropTypes from 'prop-types'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import ProjectItem from './ProjectItem'
import projectPropTypes from '../prop-types/project'
import styles from '../styles/components/ItemGrid.module.scss'

const ItemGrid = ({ heading, items }) => {
    const grid = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    }
    return (
        <div className='outer'>
            <div className='inner'>
                {heading && (
                    <h2 className={clsx(styles.heading, 't-h2')}>{heading}</h2>
                )}
                <motion.ul
                    className={styles.grid}
                    initial='hidden'
                    animate='visible'
                    variants={grid}
                >
                    {items.map(({ uid, data }) => (
                        <motion.li key={uid} variants={item}>
                            <ProjectItem uid={uid} data={data} />
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    )
}

ItemGrid.propTypes = {
    heading: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape(projectPropTypes)),
}

export default ItemGrid
