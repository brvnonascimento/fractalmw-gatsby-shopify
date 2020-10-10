import { GatsbyNode } from 'gatsby'
import { ProductsQuery } from '../../graphql-types'

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions
}) => {
  const data: ProductsQuery = await graphql(`
    query Products {
      allShopifyProduct {
        nodes {
          id
          title
          images {
            altText
            originalSrc
          }
          variants {
            id
            price
            sku
          }
          descriptionHtml
          options {
            name
            values
          }
        }
      }
    }
  `)

  for (const {} of data.allShopifyProduct.nodes) {
    actions.createPage({
      path: ''
    })
  }
}

export default createPages
