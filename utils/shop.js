import numeral from 'numeral'

export const formatPrice = (price, discount = 1) =>
    numeral(Math.ceil(price * discount)).format('$0')

export const getPrices = (price, status) => {
    const reg = formatPrice(price)
    let sale
    switch (status) {
        case '10%':
            sale = formatPrice(price, 0.9)
            break
        case '25%':
            sale = formatPrice(price, 0.75)
            break
        case '50%':
            sale = formatPrice(price, 0.5)
            break
        default:
    }

    return { reg, sale }
}
