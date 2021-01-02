import { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Button, Select } from './Inputs'
import ProductItem from './ProductItem'
import ProductFilters from './ProductFilters'
import projectPropTypes from '../prop-types/project'
import tagPropTypes from '../prop-types/tag'

import styles from '../styles/components/ProductGrid.module.scss'

const SELECT_ID = 'sort-by-select'

const SORT_OPTIONS = {
    'date-latest': {
        label: 'Date (Latest)',
        sort: (a, b) =>
            new Date(b?.data?.end_date || b?.data?.start_date) -
            new Date(a?.data?.end_date || a?.data?.start_date),
    },
    'date-oldest': {
        label: 'Date (Oldest)',
        sort: (a, b) =>
            new Date(a?.data?.end_date || a?.data?.start_date) -
            new Date(b?.data?.end_date || b?.data?.start_date),
    },
    'alpha-inc': {
        label: 'Name (A-Z)',
        sort: (a, b) => a?.data?.name.localeCompare(b?.data?.name),
    },
    'alpha-dec': {
        label: 'Name (Z-A)',
        sort: (a, b) => b?.data?.name.localeCompare(a?.data?.name),
    },
    'price-inc': {
        label: 'Price ($-$$)',
        sort: (a, b) => a?.data?.price - b?.data?.price,
    },
    'price-dec': {
        label: 'Price ($$-$)',
        sort: (a, b) => b?.data?.price - a?.data?.price,
    },
}

const ProductGrid = ({ projects, tags }) => {
    const [filters, setFilters] = useState([])
    const [showFilters, setShowFilters] = useState(false)
    const [sort, setSort] = useState(Object.keys(SORT_OPTIONS)[0])

    const filteredAndSortedProjects = [...projects]
        .sort(SORT_OPTIONS[sort]?.sort)
        .filter(({ data }) => {
            const projectTags = data.tags.map(({ tag }) => tag.uid)
            return filters.reduce(
                (acc, curr) => acc && projectTags.includes(curr),
                true
            )
        })

    return (
        <div className='outer'>
            <div className={clsx(styles.inner, 'inner')}>
                <div className={styles.options}>
                    <Button as='button' onClick={() => setShowFilters(true)}>
                        Show Filters
                    </Button>
                    <div className={styles.selectWrap}>
                        <label htmlFor={SELECT_ID}>Sort by:</label>
                        <Select
                            id={SELECT_ID}
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                        >
                            {Object.entries(SORT_OPTIONS).map(
                                ([key, { label }]) => (
                                    <option key={key} value={key}>
                                        {label}
                                    </option>
                                )
                            )}
                        </Select>
                    </div>
                </div>
                {showFilters && (
                    <ProductFilters
                        tags={tags}
                        projects={filteredAndSortedProjects}
                        filters={filters}
                        setFilters={setFilters}
                        close={() => setShowFilters(false)}
                    />
                )}
                <div className={styles.grid}>
                    {filteredAndSortedProjects.map(({ uid, data }) => (
                        <ProductItem key={uid} uid={uid} data={data} />
                    ))}
                </div>
            </div>
        </div>
    )
}

ProductGrid.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape(projectPropTypes)),
    tags: PropTypes.arrayOf(PropTypes.shape(tagPropTypes)),
}

export default ProductGrid
