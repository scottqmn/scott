import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const NextLink = ({ children, as: Component = 'a', href, ...props }) => {
    return (
        <Link href={href} passHref>
            <Component as='a' {...props}>
                {children}
            </Component>
        </Link>
    )
}

NextLink.propTypes = {
    children: PropTypes.node,
    href: PropTypes.string.isRequired,
    as: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
}

export default NextLink
