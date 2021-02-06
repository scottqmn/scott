import PropTypes from 'prop-types'
import Link from 'next/link'

const NextLink = ({ children, href, ...props }) => {
    return (
        <Link href={href}>
            <a {...props}>{children}</a>
        </Link>
    )
}

NextLink.propTypes = {
    children: PropTypes.node,
    href: PropTypes.string.isRequired,
}

export default NextLink
