import PropTypes from 'prop-types'
import { Checkbox } from './Inputs'
import Modal from './Modal'

const ProductFilters = ({ filters, setFilters, close }) => {
    const changeHandler = (key) => (e) => {
        setFilters((curr) => {
            const result = { ...curr }
            result[key].status = e.target.checked
            return result
        })
    }

    return (
        <Modal title='Filters' close={() => close(false)}>
            {Object.entries(filters).map(([key, { label, status }]) => {
                return (
                    <Checkbox
                        key={key}
                        id={key}
                        checked={status}
                        onChange={changeHandler(key)}
                    >
                        {label}
                    </Checkbox>
                )
            })}
        </Modal>
    )
}

ProductFilters.propTypes = {
    filters: PropTypes.object,
    setFilters: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
}

export default ProductFilters
