import PropTypes from 'prop-types'
import clsx from 'clsx'
import ProjectItem from './ProjectItem'
import projectPropTypes from '../prop-types/project'
import styles from '../styles/components/ItemGrid.module.scss'

const ItemGrid = ({ heading, items }) => {
    return (
        <div className='outer'>
            <div className='inner'>
                {heading && (
                    <h2 className={clsx(styles.heading, 't-h2')}>{heading}</h2>
                )}
                <ul className={styles.grid}>
                    {items.map(({ uid, data }) => (
                        <li key={uid}>
                            <ProjectItem uid={uid} data={data} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

ItemGrid.propTypes = {
    heading: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape(projectPropTypes)),
}

export default ItemGrid
