// @ts-nocheck
import { GatsbyNode } from 'gatsby'
import path from 'path'
// import { ProductPageQuery } from '../../graphql-types'
import { ShirtTemplate } from '../templates/shirt'
import { toSlug } from '../utils/toSlug'

interface ProductPageResult {
  data?: any
  errors?: any
}

// TODO: REFACTOR THE SHIT OUT OF THIS

const missingParamError = (shirtId: string, param: string | number) => {
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
                  maxHeight: 500
                  maxWidth: 500
                  jpegQuality: 80
                  webpQuality: 80
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
    throw new Error(errors)
  }

  const shirts = data.allShopifyProduct.nodes

  const paginateAllShirts = (
    pageProps: any,
    currentPageIndex: number,
    lastPage: number
  ) => {
    actions.createPage({
      path: `/camisetas/${currentPageIndex}`,
      component: path.resolve(__dirname, '../templates/catalog.tsx'),
      context: {
        shirts: pageProps,
        currentPage: currentPageIndex,
        lastPage
      }
    })
  }

  const generateEachShirt = (shirt: any) => {
    actions.createPage({
      path: `/produto/${shirt.sku as string}`,
      component: path.resolve(__dirname, '../templates/shirt.tsx'),
      context: {
        shirt
      }
    })
  }

  generateShirts(shirts, generateEachShirt, paginateAllShirts)

  const categories = shirts.map(({ productType }: any) => productType)

  for (const category of categories) {
    const shirtsByCategory = shirts.filter(
      ({ productType }: any) => productType === category
    )

    generateShirts(
      shirtsByCategory,
      () => {},
      (page, currentPageIndex, lastPage) => {
        actions.createPage({
          path: `/camisetas/categoria/${toSlug(category)}/${currentPageIndex}`,
          component: path.resolve(__dirname, '../templates/catalog.tsx'),
          context: {
            shirts: page,
            currentPage: currentPageIndex,
            lastPage
          }
        })
      }
    )
  }
}

const generateShirts = (
  shirts: any[],
  callback: (shirtPageProps: any) => void,
  onPaginateCallback: (
    catalogoPage: any,
    currentPageIndex: number,
    lastPage: number
  ) => void
) => {
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
        return missingParamError(shirt.id, field as string)
      }
    }

    const getOptionsByName = (name: string) =>
      shirt.options?.find((option: any) => {
        if (!option) {
          throw new Error(
            `Shirt with id ${shirt.id as string} does not contain any option.`
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
    const images: ShirtTemplate['images'] = shirt.images.map((image: any) => {
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
    }

    const shirtPageProps = {
      ...props,
      sku: handle
    }

    page.push(shirtPageProps)

    if (page.length === 9) {
      onPaginateCallback(page, currentPageIndex, lastPage)
      page = []
      currentPageIndex++
    }

    callback(shirtPageProps)
  }
}

export default createPages
