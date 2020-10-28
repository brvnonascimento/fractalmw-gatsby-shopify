import React, { ReactNode } from 'react'
import { Helmet, HelmetProps } from 'react-helmet'

interface SEOProps extends HelmetProps {
  title: string
  metaDescription: string
  keywords: string
  image: string
  nextPageLink?: string
  children?: ReactNode
  product: {
    name: string
    url: string
    price: string
    sku: string
    images: string[]
    description: string
    brand: string
  }
}

export const ProductSEO = ({
  title,
  metaDescription,
  keywords,
  image,
  children,
  product: { sku, name, images, description, brand, url, price, inStock }
}: SEOProps) => {
  const richProductSnippet = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name,
    description,
    image: images,
    sku,
    brand: {
      '@type': 'Brand',
      name: brand
    },
    offers: {
      '@type': 'Offer',
      url,
      price,
      priceValidUntil: '2024-11-20',
      priceCurrency: 'BRL',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock'
    },
    seller: {
      '@type': 'Organization',
      'name': brand
    }
    // review: {
    //   '@type': 'Review',
    //   reviewRating: {
    //     '@type': 'Rating',
    //     ratingValue: '4'
    //   }
    // }
  }

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
        }
        // {
        //   property: 'og:image:width',
        //   content: image.width
        // },
        // {
        //   property: 'og:image:height',
        //   content: image.height
        // },
      ]}
    >
      <script className='structured-data-list' type="application/ld+json">{JSON.stringify(richProductSnippet)}</script>
      {children}
    </Helmet>
  )
}
