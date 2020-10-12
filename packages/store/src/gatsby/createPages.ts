import { GatsbyNode } from 'gatsby'
import path from 'path'
import { ProductPageQuery } from '../../graphql-types'

interface ProductPageResult {
  data?: ProductPageQuery
  errors?: any
}

const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { data, errors }: ProductPageResult = await graphql(`
    query ProductPage {
      allShopifyProduct {
        nodes {
          title
          handle
          id
          productType
          images {
            altText
            localFile {
              childImageSharp {
                fluid(
                  maxHeight: 400
                  maxWidth: 400
                  jpegQuality: 50
                  webpQuality: 50
                ) {
                  srcWebp
                  src
                }
              }
            }
          }
          options {
            values
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

  if (!data?.allShopifyProduct?.nodes) {
    console.log(errors)
    throw new Error(errors)
  }

  for (const shirt of data.allShopifyProduct.nodes) {
    const { handle } = shirt

    actions.createPage({
      path: `/produto/${handle}`,
      component: path.resolve(__dirname, '../templates/shirt.tsx'),
      context: {
        shirt
      }
    })
  }
}

export default createPages
