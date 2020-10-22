//@ts-nocheck
import { GatsbyNode } from 'gatsby'
import path from 'path'
// import { ProductPageQuery } from '../../graphql-types'
import { ShirtTemplate } from '../templates/shirt'

interface ProductPageResult {
  data?: any
  errors?: any
}

const missingParamError = (shirtId: string, param: string) => {
  throw new Error(
    `Shirt with id ${shirtId} does not contain a valid ${param} parameter.`
  )
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
            title
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
  const shirts = data.allShopifyProduct.nodes

  let currentPageIndex = 1
  let page = []
  const lastPage = Math.round(shirts.length / 9)

  for (const shirt of shirts) {
    if (!shirt) {
      throw new Error(
        'One or more shirts given were undefined on Shirt Page Creation.'
      )
    }
    const { id, handle, title, productType, descriptionHtml, variants } = shirt
    const requiredFields: Array<keyof typeof shirt> = [
      'descriptionHtml',
      'handle',
      'id',
      'images',
      'options',
      'productType',
      'title',
      'variants'
    ]

    for (const field of requiredFields) {
      if (!shirt[field]) {
        return missingParamError(shirt.id, field)
      }
    }

    const getOptionsByName = (name: string) =>
      shirt.options?.find((option) => {
        if (!option) {
          throw new Error(
            `Shirt with id ${shirt.id} does not contain any option.`
          )
        }

        return option.name === name
      })

    const sizes = getOptionsByName('size')
    if (!sizes?.values) {
      return missingParamError(id, 'Size')
    }

    const colors = getOptionsByName('color')
    if (!colors?.values) {
      return missingParamError(id, 'Color')
    }

    const models = getOptionsByName('model')
    if (!models?.values) {
      return missingParamError(id, 'Model')
    }

    if (!shirt.images) {
      return missingParamError(id, 'Images')
    }
    const images: ShirtTemplate['images'] = shirt.images.map((image) => {
      if (!image) {
        return missingParamError(id, 'Image')
      }

      const src = image?.localFile?.childImageSharp?.fluid?.srcWebp
      const fallbackSrc = image?.localFile?.childImageSharp?.fluid?.src
      const alt = image.altText

      if (!alt) {
        return missingParamError(id, 'Alt Text')
      }

      if (!fallbackSrc) {
        return missingParamError(id, 'Fallback Src')
      }

      if (!src) {
        return missingParamError(id, 'Local File')
      }

      return {
        src,
        fallbackSrc,
        alt
      }
    })

    const getPrice = (): number => {
      if (!variants) {
        return missingParamError(id, 'Variant')
      }

      const price = variants[0]?.price

      if (!price) {
        return missingParamError(id, 'Price')
      }

      return parseFloat(price)
    }

    const props: ShirtTemplate = {
      title: title,
      variants: variants,
      price: getPrice(),
      category: productType,
      description: descriptionHtml,
      sizes: sizes.values,
      models: models.values,
      colors: colors.values,
      images
    } as ShirtTemplate

    page.push({
      ...props,
      sku: handle
    })

    if (page.length === 9) {
      actions.createPage({
        path: `/camisetas/${currentPageIndex}`,
        component: path.resolve(__dirname, '../templates/catalog.tsx'),
        context: {
          shirts: page,
          currentPage: currentPageIndex,
          lastPage
        }
      })
      page = []
      currentPageIndex++
    }

    actions.createPage({
      path: `/produto/${handle}`,
      component: path.resolve(__dirname, '../templates/shirt.tsx'),
      context: {
        shirt: props
      }
    })
  }
}

export default createPages
