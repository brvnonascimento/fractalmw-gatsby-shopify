import { gql, useLazyQuery } from '@apollo/client'
import { useMemo } from 'react'
import { SearchResult } from '../components/SearchBar'

const SEARCH_SHIRT_QUERY = gql`
  query SearchShirtQuery($first: Int!, $query: String) {
    products(first: $first, query: $query, sortKey: TITLE) {
      edges {
        node {
          title
          handle
          images(first: 1) {
            edges {
              node {
                src: transformedSrc(
                  maxHeight: 200
                  maxWidth: 200
                  preferredContentType: WEBP
                )
                fallbackSrc: transformedSrc(
                  maxHeight: 200
                  maxWidth: 200
                  preferredContentType: JPG
                )
                altText
              }
            }
          }
        }
      }
    }
  }
`

type UseSearch = [
  (first: number, query: string) => void,
  { searchResults: SearchResult[], error: any, loading: boolean }
]

export const useSearch = (): UseSearch => {
  const [searchShirt, { data, error, loading }] = useLazyQuery(
    SEARCH_SHIRT_QUERY
  )

  const handleSearch = (first: number, query: string) => {
    searchShirt({
      variables: {
        first,
        query
      }
    })
  }

  const searchResults: SearchResult[] = useMemo(
    () =>
      data
        ? data.products.edges.map(
            ({ node: { title, handle, images } }: any) => {
              const { src, fallbackSrc, altText } = images.edges[0].node

              return {
                title,
                handle,
                image: { src, fallbackSrc, altText }
              }
            }
          )
        : [],
    [data]
  )

  return [
    handleSearch,
    {
      searchResults,
      error,
      loading
    }
  ]
}
