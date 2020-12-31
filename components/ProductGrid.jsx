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
        sort: (a, b) => new Date(b?.date) - new Date(a?.date),
    },
    'date-oldest': {
        label: 'Date (Oldest)',
        sort: (a, b) => new Date(a?.date) - new Date(b?.date),
    },
    'alpha-inc': {
        label: 'Name (A-Z)',
        sort: (a, b) => a?.title - b?.title,
    },
    'alpha-dec': {
        label: 'Name (Z-A)',
        sort: (a, b) => b?.title - a?.title,
    },
    'price-inc': {
        label: 'Price ($-$$)',
        sort: (a, b) => a?.price - b?.price,
    },
    'price-dec': {
        label: 'Price ($$-$)',
        sort: (a, b) => b?.price - a?.price,
    },
}

const ProductGrid = ({ projects, tags }) => {
    const initialFilters = tags.reduce(
        (acc, { data, uid }) => ({
            ...acc,
            [uid]: {
                label: data.name,
                status: false,
            },
        }),
        {}
    )

    const [filters, setFilters] = useState(initialFilters)
    const [showFilters, setShowFilters] = useState(false)
    const [sort, setSort] = useState(Object.keys(SORT_OPTIONS)[0])

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
                                ([key, { label }]) => {
                                    return (
                                        <option key={key} value={key}>
                                            {label}
                                        </option>
                                    )
                                }
                            )}
                        </Select>
                    </div>
                </div>
                {showFilters && (
                    <ProductFilters
                        filters={filters}
                        setFilters={setFilters}
                        close={() => setShowFilters(false)}
                    />
                )}
                <div className={styles.grid}>
                    {[...projects]
                        // .sort(SORT_OPTIONS[sort]?.sort)
                        .map(({ uid, data }) => (
                            <ProductItem key={uid} data={data} />
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
