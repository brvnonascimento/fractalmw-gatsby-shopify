import { GatsbyNode } from 'gatsby'
import { paginate, createPagePerItem } from 'gatsby-awesome-pagination'
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
      allShopifyProduct: { nodes: shirts }
    }
  }: ProductPageResult = await graphql(`
    query ProductPages {
      allShopifyProduct {
        nodes {
          title
          id
        }
      }
    }
  `)

  paginate({
    createPage,
    itemsPerPage: 9,
    items: shirts,
    pathPrefix: '/camisetas',
    component: path.resolve(__dirname, '../templates/catalog.tsx')
  })

  createPagePerItem({
    createPage,
    items: shirts,
    itemToId: 'id',
    itemToPath: (props: any) => {
      if (props?.title) {
        return `/produto/${toSlug(props?.title)}`
      }
    },
    component: path.resolve(__dirname, '../templates/shirt.tsx')
  })
}

export default createPages
