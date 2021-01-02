import PropTypes from 'prop-types'
import { Checkbox } from './Inputs'
import Modal from './Modal'
import styles from '../styles/components/ProductFilters.module.scss'

const ProductFilters = ({ tags, projects, filters, setFilters, close }) => {
    const changeHandler = (filterKey) => (e) => {
        setFilters((curr) => {
            const hasKey = curr.includes(filterKey)

            if (e.target.checked) {
                return hasKey ? curr : [...curr, filterKey]
            }

            return curr.filter((currKey) => filterKey !== currKey)
        })
    }

    const groupedTags = tags.reduce((acc, curr) => {
        const { category, name } = curr.data
        const currCategories = acc[category] || []

        return {
            ...acc,
            [category]: [...currCategories, { key: curr.uid, name }],
        }
    }, {})

    return (
        <Modal title='Filters' close={() => close(false)}>
            {Object.entries(groupedTags).map(([groupName, groupTags]) => {
                return (
                    <div key={`filter-${groupName}`} className={styles.group}>
                        <div className='t-label'>{groupName}</div>
                        <div>
                            {groupTags.map(({ key, name }) => {
                                const adjFilters = [...filters, key]
                                const filterCount = projects.filter(
                                    ({ data }) => {
                                        const projectTags = data.tags.map(
                                            ({ tag }) => tag.uid
                                        )
                                        return adjFilters.reduce(
                                            (acc, curr) =>
                                                acc &&
                                                projectTags.includes(curr),
                                            true
                                        )
                                    }
                                ).length
                                const isChecked = filters.includes(key)

                                return filterCount ? (
                                    <div key={key} className={styles.checkbox}>
                                        <Checkbox
                                            id={key}
                                            checked={isChecked}
                                            onChange={changeHandler(key)}
                                        >
                                            {name}
                                            {isChecked ? null : (
                                                <span> ({filterCount})</span>
                                            )}
                                        </Checkbox>
                                    </div>
                                ) : null
                            })}
                        </div>
                    </div>
                )
            })}
        </Modal>
    )
}

ProductFilters.propTypes = {
    tags: PropTypes.array,
    projects: PropTypes.array,
    filters: PropTypes.arrayOf(PropTypes.string),
    setFilters: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
}

export default ProductFilters
