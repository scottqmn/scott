import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Button, Select, Checkbox } from './Inputs'
import ProductItem from './ProductItem'
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

const ProductGrid = ({ projects, showMore }) => {
    const [filter, setFilter] = useState(null)
    const [sort, setSort] = useState('date-latest')

    return (
        <div className='outer'>
            <div className={clsx(styles.inner, 'inner')}>
                <Checkbox id='whatever'>Checkbox</Checkbox>
                <div className={styles.options}>
                    <Button as='button' className={''}>
                        Filter
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
                <div className={styles.grid}>
                    {[...projects]
                        .sort(SORT_OPTIONS[sort]?.sort)
                        .map(({ title, subtitle, imgUrl, price, date }, i) => {
                            return (
                                <ProductItem // eslint-disable-next-line react/no-array-index-key
                                    key={i}
                                    title={title}
                                    subtitle={subtitle}
                                    imgUrl={imgUrl}
                                    price={price}
                                    date={date}
                                />
                            )
                        })}
                </div>
                <Button
                    as='button'
                    className={styles.showMore}
                    onClick={showMore}
                >
                    Show More
                </Button>
            </div>
        </div>
    )
}

ProductGrid.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object),
    showMore: PropTypes.func.isRequired,
}

export default ProductGrid
