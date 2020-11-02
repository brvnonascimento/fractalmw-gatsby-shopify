// @ts-nocheck
import { useStaticQuery } from 'gatsby'
import { useMemo } from 'react'
import {
  ShirtImageProps,
  ShirtGridProps
} from '../../features/catalog/components/ShirtGrid'

export const useHomePageData = () => {
  const {
    shopifyCollection,
    file: {
      childImageSharp: { bannerImage1 }
    },
    secondFile: {
      childImageSharp: { bannerImage2 }
    }
  } = useStaticQuery(graphql`
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
      file(name: { eq: "banner-image-1" }) {
        childImageSharp {
          bannerImage1: fluid(webpQuality: 50, toFormat: JPG) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      secondFile: file(name: { eq: "banner-image-2" }) {
        childImageSharp {
          bannerImage2: fluid(webpQuality: 50, toFormat: JPG) {
            ...GatsbyImageSharpFluid
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
          throw new Error(`Shirt of id ${shirt.id as string} is not valid.`)
        }

        if (!shirt?.images) {
          throw new Error(
            `Shirt of id ${shirt.id as string} does not have any image.`
          )
        }

        const images: ShirtImageProps[] = shirt.images.map((image) => {
          if (!image) {
            throw new Error(
              `Shirt of id ${shirt.id as string} have an undefined image.`
            )
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
              `Shirt of id ${
                shirt.id as string
              } does not have an optimized image.`
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
    shirtList,
    bannerImages: [bannerImage1, bannerImage2]
  }
}
