import { gql, useLazyQuery } from '@apollo/client'
import { useMemo } from 'react'

const SHIRT_QUERY = gql`
  query shirts($first: Int!, $after: String, $query: String) {
    products(first: $first, after: $after, query: $query) {
      edges {
        node {
          title
          handle
          images(first: 1) {
            edges {
              node {
                src: transformedSrc(
                  maxHeight: 350
                  maxWidth: 350
                  preferredContentType: WEBP
                )
                fallbackSrc: transformedSrc(
                  maxHeight: 350
                  maxWidth: 350
                  preferredContentType: JPG
                )
                alt: altText
              }
            }
          }
        }
      }
    }
  }
`

export interface ShirtResult {
  title: string
  image: {
    alt: string
    src: string
    fallbackSrc: string
  }
  handle: string
}

export type UseLazyShirtsCatalog = [
  (props: HandleFetchShirtsProps) => void,
  {
    loading: boolean
    shirts: ShirtResult[]
    error: any
  }
]

export interface HandleFetchShirtsProps {
  first: number
  after?: string
  query?: string
  sortBy?: string
}

export const useLazyShirtsCatalog = (): UseLazyShirtsCatalog => {
  const [fetchShirts, { loading, data, error }] = useLazyQuery(SHIRT_QUERY)

  const handleFetchShirts = (props: HandleFetchShirtsProps) => {
    console.log(props)
    fetchShirts({
      variables: {
        ...props
      }
    })
  }

  const shirts = useMemo(
    () =>
      data
        ? data.products.edges.map(
            ({ node: { title, handle, images } }: any) => {
              const parsedImages = images.edges.map(({ node }) => node)

              return {
                title,
                handle,
                images: parsedImages
              }
            }
          )
        : [],
    [data]
  )

  return [
    handleFetchShirts,
    {
      loading,
      shirts,
      error
    }
  ]
}
