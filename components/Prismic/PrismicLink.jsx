/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { prismicLinkPropType } from '../../prop-types/prismic'

const PrismicLink = ({ children, as: Component = 'a', link, ...props }) => {
    // Handle out/Prismic links
    const { link_type, target, url } = link
    switch (link_type) {
        case 'Web':
            return (
                <Component
                    as='a'
                    href={url}
                    target={target}
                    rel='noopener noreferrer'
                    {...props}
                >
                    {children}
                </Component>
            )
        default:
            // eslint-disable-next-line no-console
            console.warn('no link rendered', link)
    }

    return children
}

PrismicLink.propTypes = {
    children: PropTypes.node,
    as: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
    link: prismicLinkPropType,
}

export default PrismicLink
