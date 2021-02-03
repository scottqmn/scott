import PropTypes from 'prop-types'
import clsx from 'clsx'
import WorkItem from './WorkItem'
import styles from '../styles/components/ItemList.module.scss'

const ItemList = ({ heading, items }) => {
    return (
        <div className='outer'>
            <div className='inner'>
                {heading && (
                    <h2 className={clsx(styles.heading, 't-h2')}>{heading}</h2>
                )}
                <ul className={styles.list}>
                    {items?.map(({ uid, data }) => {
                        return (
                            <li key={uid}>
                                <WorkItem uid={uid} data={data} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

ItemList.propTypes = {
    heading: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
}

export default ItemList
