import { useStaticQuery } from 'gatsby'
import { useMemo } from 'react'
import {
  ShirtImageProps,
  ShirtGridProps
} from '../../features/catalog/components/ShirtGrid'
import { HomePageQuery } from '../../../graphql-types'

export const useHomePageData = () => {
  const { shopifyCollection }: HomePageQuery = useStaticQuery(graphql`
    query HomePage {
      shopifyCollection(title: { eq: "Home" }) {
        title
        products {
          id
          title
          handle
          images {
            localFile {
              childImageSharp {
                fluid(
                  maxHeight: 310
                  maxWidth: 282
                  jpegQuality: 50
                  webpQuality: 50
                ) {
                  srcWebp
                  src
                }
              }
            }
            altText
          }
        }
      }
    }
  `)

  const shirtList: ShirtGridProps['shirts'] = useMemo(() => {
    if (!shopifyCollection?.products) {
      return []
    }

    const shirts: ShirtGridProps['shirts'] = shopifyCollection.products.map(
      (shirt) => {
        if (!shirt) {
          throw new Error('One or more shirts are undefined.')
        }

        if (!shirt?.title || !shirt?.handle) {
          throw new Error(`Shirt of id ${shirt.id} is not valid.`)
        }

        if (!shirt?.images) {
          throw new Error(`Shirt of id ${shirt.id} does not have any image.`)
        }

        const images: ShirtImageProps[] = shirt.images.map((image) => {
          if (!image) {
            throw new Error(`Shirt of id ${shirt.id} have an undefined image.`)
          }

          if (!image.altText) {
            // throw new Error(
            //   `Shirt of id ${shirt.id} contains an image without an alt-text.`
            // )
          }

          const optimizedImage = image.localFile?.childImageSharp?.fluid

          if (
            !optimizedImage ||
            !optimizedImage.src ||
            !optimizedImage?.srcWebp
          ) {
            throw new Error(
              `Shirt of id ${shirt.id} does not have an optimized image.`
            )
          }

          return {
            src: optimizedImage.src,
            fallbackSrc: optimizedImage.srcWebp,
            alt: image.altText
          }
        })

        return {
          title: shirt.title,
          sku: shirt.handle,
          images
        }
      }
    )

    return shirts
  }, [])

  return {
    shirtList
  }
}
