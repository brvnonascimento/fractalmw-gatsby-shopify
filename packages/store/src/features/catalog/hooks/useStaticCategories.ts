import { graphql, useStaticQuery } from 'gatsby'
import { useMemo } from 'react'
import { HomePageQuery } from '../../../../graphql-types'

export const useStaticCategories = () => {
  const { allShopifyProduct }: HomePageQuery = useStaticQuery(graphql`
    query ShirtCategories {
      allShopifyProduct {
        nodes {
          productType
        }
      }
    }
  `)

  const categories = useMemo(() => {
    const categories = allShopifyProduct.nodes.map(({ productType }) => {
      if (!productType) {
        throw new Error(`One or more category is not valid.`)
      }

      return productType
    })

    return [...new Set(categories)]
  }, [])

  return categories
}
