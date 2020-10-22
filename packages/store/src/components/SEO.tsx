import React, { ReactNode } from 'react'
import { Helmet, HelmetProps } from 'react-helmet'

interface SEOProps extends HelmetProps {
  title: string
  metaDescription: string
  keywords: string
  image: string
  nextPageLink?: string
  children?: ReactNode
}

export const SEO = ({ title, metaDescription, keywords, image, children }: SEOProps) => {
  return (
    <Helmet
      title={title}
      htmlAttributes={{
        lang: 'pt-br'
      }}
      
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
        // {
        //   property: 'og:image:width',
        //   content: image.width
        // },
        // {
        //   property: 'og:image:height',
        //   content: image.height
        // },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ]}
    >
      {children}
    </Helmet>
  )
}
