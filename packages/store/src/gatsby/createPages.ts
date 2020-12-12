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
          id
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

  const catalogTemplate = path.resolve(__dirname, '../templates/catalog.tsx')

  paginate({
    createPage,
    itemsPerPage: 12,
    items: shirts,
    pathPrefix: '/camisetas',
    component: catalogTemplate,
    context: {
      categoryRegex: '',
      categoryHandle: '',
      categoryTitle: ''
    }
  })

  for (const { title, handle, products } of shirtsByCategory) {
    paginate({
      createPage,
      itemsPerPage: 12,
      items: products,
      pathPrefix: `/camisetas/categoria/${handle}`,
      component: catalogTemplate,
      context: {
        categoryTitle: title,
        categoryHandle: handle,
        categoryRegex: `/${title}/`,
        products: products.map((product: any) => product.id)
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
