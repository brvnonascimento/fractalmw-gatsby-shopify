//@ts-nocheck
import React from 'react'
import { Helmet } from 'react-helmet'

export const SEO = ({ title, metaDescription, keywords }) => {
  return (
    <Helmet
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          name: 'keywords',
          content: keywords
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'twitter:creator',
          content: 'Fractal Music Wear'
        },
        {
          name: 'twitter:description',
          content: metaDescription
        },
        {
          property: 'og:image',
          content: image
        },
        {
          property: 'og:image:width',
          content: metaImage.width
        },
        {
          property: 'og:image:height',
          content: metaImage.height
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ]}
    />
  )
}
