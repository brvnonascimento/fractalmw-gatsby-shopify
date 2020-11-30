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

  return {
    bannerImages: [bannerImage1, bannerImage2],
    asideImages: [asideImage1, asideImage2]
  }
}
