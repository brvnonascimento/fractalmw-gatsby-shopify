import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { useStaticCategories } from '../features/catalog/hooks/useStaticCategories'
import { PaginationNav } from '../components/PaginationNav'
import { SEO } from '../components/SEO'
import { useLazyShirtsCatalog } from '../features/catalog/hooks/useLazyShirts'
import { ShirtMenuBar } from '../features/catalog/components/ShirtMenuBar'
import {
  Box,
  Heading,
  Link,
  List,
  ListItem,
  Spinner,
  Text
} from '@chakra-ui/react'
import { InfiniteLoadingSpinner } from '../components/InfiniteLoadingSpinner'
import GatsbyLink from 'gatsby-link'
import { toSlug } from '../utils/toSlug'
import { ShirtItem } from '../components/ShirtItem'
import { BoxContainer } from '../components/BoxContainer'
import xss from 'xss'

export default ({
  pageContext,
  data: { allShopifyProduct, shopifyCollection: category }
}: any) => {
  const { numberOfPages, humanPageNumber: currentPage } = pageContext

  const categories = useStaticCategories()
  const categoryTitle = pageContext?.category?.title
  const isCategoryPage = !!categoryTitle

  const [
    handleFetchShirts,
    { shirts: lazyShirts, hasMoreShirts, loading, fetchNextPage }
  ] = useLazyShirtsCatalog()

  const [isInfiniteLoading, setIsInfiniteLoading] = useState(false)

  const getNextPage = () => {
    if (currentPage === numberOfPages) {
      return numberOfPages
    }

    return (currentPage as number) + 1
  }

  const shirts = allShopifyProduct?.nodes

  return (
    <Box
      d={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      minH={'100vh'}
    >
      <SEO
        title={`${
          category?.title ?? 'Camisetas'
        } ${currentPage} de ${numberOfPages} - Fractal Music Wear`}
        metaDescription={
          'A Fractal Music Wear oferece várias opções de estampas de camisetas de estampas criativas, engraçadas e inteligentes, seja de personagens especiais, bandas, filmes e cartoons conhecidos. Escolha uma ou envie seu seu desenho para personalizar a camiseta'
        }
        image={'/cover.png'}
        keywords="fractal music wear, fractal, fractalmw, piracicaba, camisetas personalizadas, camisetas criativas, estampas, estamparia"
      >
        <link
          rel="next"
          href={`${process.env.BASE_DOMAIN ?? ''}/camisetas/${getNextPage()}`}
        />
      </SEO>

      <Box
        as="main"
        d={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        w={'100%'}
      >
        <Box bg={'gray.50'} w={'100vw'} p={2}>
          <Heading as="h1" mb={category?.descriptionHtml ? '0.5em' : undefined}>
            {category?.title ?? 'Camisetas'}
          </Heading>
          {category?.descriptionHtml && (
            <Text
              w={{ md: '75%' }}
              dangerouslySetInnerHTML={{
                __html: xss(
                  category?.descriptionHtml.replace(
                    '<meta charset="UTF-8">',
                    ''
                  )
                )
              }}
            />
          )}
        </Box>

        <BoxContainer as={'div'}>
          <ShirtMenuBar
            categories={categories as string[]}
            height={'60px'}
            alignSelf={{ base: 'end', lg: 'center' }}
            onChangeMenu={(query) => {
              handleFetchShirts(query)
              setIsInfiniteLoading(true)
            }}
            my={'0'}
            w={'100%'}
            maxW={'1400px'}
          />

          <List
            gridTemplateColumns={'repeat(auto-fit, minmax(300px, 1fr))'}
            gridGap={2}
            listStyleType={'none'}
            display={'grid'}
            spacing={5}
            w={'100%'}
          >
            {loading ? (
              <Spinner
                size="xl"
                gridColumn={'1 / -1'}
                alignSelf={'center'}
                justifySelf={'center'}
              />
            ) : (
              shirts.map(({ images: [image], title, sku, priceRange }) => (
                <ListItem
                  key={sku}
                  _hover={{ transform: 'scale(1.1)' }}
                  transition={'all .2s ease-in-out'}
                >
                  <Link
                    rel={'bookmark'}
                    as={GatsbyLink as any}
                    to={`/produto/${toSlug(title)}`}
                    h={'100%'}
                  >
                    <ShirtItem
                      title={title}
                      image={image}
                      priceRange={priceRange}
                    />
                  </Link>
                </ListItem>
              ))
            )}
            {isInfiniteLoading && !loading && hasMoreShirts && (
              <InfiniteLoadingSpinner
                size="xl"
                gridColumn={'1 / -1'}
                alignSelf={'end'}
                justifySelf={'center'}
                canInfiniteLoad={
                  (isInfiniteLoading && !loading && hasMoreShirts) ?? false
                }
                onInfiniteLoadingTriggered={() => {
                  if (!loading) {
                    fetchNextPage()
                  }
                }}
              />
            )}
          </List>

          {!isInfiniteLoading && numberOfPages !== 1 && (
            <PaginationNav
              path={
                pageContext?.categoryTitle
                  ? `/camisetas/categoria/${pageContext.categorySlug}`
                  : '/camisetas'
              }
              lastPage={numberOfPages as number}
              currentPage={currentPage}
            />
          )}
        </BoxContainer>
      </Box>
    </Box>
  )
}

export const CatalogQuery = graphql`
  query CatalogQuery(
    $skip: Int!
    $limit: Int!
    $categoryRegex: String!
    $categoryHandle: String!
  ) {
    shopifyCollection(handle: { eq: $categoryHandle }) {
      title
      descriptionHtml
    }
    allShopifyProduct(
      filter: { productType: { regex: $categoryRegex } }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        id
        title
        handle
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images {
          altText
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
