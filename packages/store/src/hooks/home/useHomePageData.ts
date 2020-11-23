// @ts-nocheck
import { useStaticQuery, graphql } from 'gatsby'
import { useMemo } from 'react'
import {
  ShirtImageProps,
  ShirtGridProps
} from '../../features/catalog/components/ShirtGrid'
import { toSlug } from '../../utils/toSlug'

export const useHomePageData = () => {
  const {
    shopifyCollection,
    file: {
      childImageSharp: { bannerImage1 }
    },
    secondFile: {
      childImageSharp: { bannerImage2 }
    },
    asideImage1: {
      childImageSharp: { asideImage1 }
    },
    asideImage2: {
      childImageSharp: { asideImage2 }
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
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            altText
          }
        }
      }
      file(name: { eq: "banner-image-1" }) {
        childImageSharp {
          bannerImage1: fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      secondFile: file(name: { eq: "banner-image-2" }) {
        childImageSharp {
          bannerImage2: fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      asideImage1: file(name: { eq: "image-aside-1" }) {
        childImageSharp {
          asideImage1: fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      asideImage2: file(name: { eq: "image-aside-2" }) {
        childImageSharp {
          asideImage2: fluid {
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

          return {
            ...optimizedImage,
            alt: image.altText
          }
        })

        return {
          title: shirt.title,
          sku: toSlug(shirt.title),
          images
        }
      }
    )

    return shirts
  }, [])

  return {
    shirtList,
    bannerImages: [bannerImage1, bannerImage2],
    asideImages: [asideImage1, asideImage2]
  }
}
