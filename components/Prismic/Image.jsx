/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { prismicImagePropType } from '../../prop-types/prismic'

const PrismicImage = ({ content, ...props }) =>
  content?.url && <img {...props} src={content.url} alt={content.alt} />

PrismicImage.propTypes = { content: prismicImagePropType }

export default PrismicImage
