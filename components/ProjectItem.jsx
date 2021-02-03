import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from '../styles/components/ProjectItem.module.scss'

const ProjectItem = ({ uid, data }) => {
    const { name } = data
    return (
        <div key={uid}>
            <div className={clsx(styles.name, 't-h3')}>{name}</div>
        </div>
    )
}

ProjectItem.propTypes = {
    uid: PropTypes.string.isRequired,
    data: PropTypes.shape({
        name: PropTypes.string,
    }),
}

export default ProjectItem
