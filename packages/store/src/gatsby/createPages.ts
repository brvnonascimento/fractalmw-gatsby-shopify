import { GatsbyNode } from 'gatsby'
import { paginate } from 'gatsby-awesome-pagination'
import path from 'path'
import { toSlug } from '../utils/toSlug'

interface ProductPageResult {
  data?: any
  errors?: any
}

const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions: { createPage }
}) => {
  const {
    data: {
      allShopifyProduct: { nodes: shirts },
      allShopifyCollection: { nodes: shirtsByCategory }
    }
  }: ProductPageResult = await graphql(`
    query ProductPages {
      allShopifyProduct {
        nodes {
          title
          id
        }
      }
      allShopifyCollection(filter: { title: { ne: "Home" } }) {
        nodes {
          title
          handle
          products {
            id
            title
          }
        }
      }
    }
  `)

  paginate({
    createPage,
    itemsPerPage: 12,
    items: shirts,
    pathPrefix: '/camisetas',
    component: path.resolve(__dirname, '../templates/catalog.tsx'),
    context: {
      categoryRegex: '',
      categoryHandle: '',
      categoryTitle: ''
    }
  })

  for (const { products, title, handle } of shirtsByCategory) {
    paginate({
      createPage,
      itemsPerPage: 12,
      items: products,
      pathPrefix: `/camisetas/categoria/${handle}`,
      component: path.resolve(__dirname, '../templates/catalog.tsx'),
      context: {
        categoryTitle: title,
        categoryHandle: handle,
        categoryRegex: `/${title}/`
      }
    })

    for (const product of products) {
      createPage({
        path: `/produto/${toSlug(product?.title)}`,
        context: {
          pageId: product.id,
          categoryTitle: title,
          categoryHandle: handle
        },
        component: path.resolve(__dirname, '../templates/shirt.tsx')
      })
    }
  }
}

export default createPages
