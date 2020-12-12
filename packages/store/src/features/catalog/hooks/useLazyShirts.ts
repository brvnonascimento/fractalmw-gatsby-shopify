import { gql, useLazyQuery } from '@apollo/client'
import { useMemo, useRef } from 'react'
import { toSlug } from '../../../utils/toSlug'

const SHIRT_QUERY = gql`
  query shirts(
    $first: Int!
    $after: String
    $query: String
    $sortBy: ProductSortKeys
    $reverse: Boolean
  ) {
    products(
      first: $first
      after: $after
      query: $query
      sortKey: $sortBy
      reverse: $reverse
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          title
          handle
          priceRange {
            minVariantPrice {
              amount
            }
          }
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
  (props: ShirtQuery) => void,
  {
    fetchNextPage: () => void
    hasMoreShirts: boolean
    loading: boolean
    shirts: ShirtResult[] | null
    error: any
  }
]

export interface ShirtQuery {
  first: number
  after?: string
  query?: string
  sortBy?: string
  reverse?: boolean
}

export const useLazyShirtsCatalog = (): UseLazyShirtsCatalog => {
  const [fetchShirts, { loading, data, error, fetchMore }] = useLazyQuery(
    SHIRT_QUERY
  )
  const products = data ? data.products : undefined
  const lastProductCursor = useRef(null)

  const handleFetchShirts = (props: ShirtQuery) => {
    fetchShirts({
      variables: {
        ...props
      }
    })
  }

  const fetchNextPage = async () => {
    if (!fetchMore || !products || !hasMoreShirts) {
      return
    }

    await fetchMore({
      variables: {
        after: !lastProductCursor.current
          ? products.edges[products.edges.length - 1].cursor
          : lastProductCursor.current
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const previousProducts = previousResult.products.edges
        const newProducts = fetchMoreResult.products.edges
        const pageInfo = fetchMoreResult.products.pageInfo

        const lastNewProduct = newProducts[newProducts.length - 1]?.cursor
        lastProductCursor.current = lastNewProduct

        return {
          products: {
            __typename: previousResult.products.__typename,
            edges: [...previousProducts, ...newProducts],
            pageInfo
          }
        }
      }
    })
  }

  const hasMoreShirts = useMemo(() => products?.pageInfo?.hasNextPage, [
    products
  ])

  const shirts = useMemo(
    () =>
      products
        ? products.edges.map(({ node: { title, images, priceRange } }: any) => {
            const parsedImages = images.edges.map(({ node }) => node)

            return {
              title,
              sku: toSlug(title),
              images: parsedImages,
              priceRange
            }
          })
        : null,
    [products]
  )

  return [
    handleFetchShirts,
    {
      fetchNextPage,
      hasMoreShirts,
      loading,
      shirts,
      error
    }
  ]
}
