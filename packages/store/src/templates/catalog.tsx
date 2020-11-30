import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { useStaticCategories } from '../features/catalog/hooks/useStaticCategories'
import { PaginationNav } from '../components/PaginationNav'
import { SEO } from '../components/SEO'
import { useLazyShirtsCatalog } from '../features/catalog/hooks/useLazyShirts'
import { ShirtMenuBar } from '../features/catalog/components/ShirtMenuBar'
import {
  Box,
  Grid,
  Heading,
  Link,
  ListItem,
  SimpleGrid,
  Spinner
} from '@chakra-ui/react'
import { InfiniteLoadingSpinner } from '../components/InfiniteLoadingSpinner'
import GatsbyLink from 'gatsby-link'
import { toSlug } from '../utils/toSlug'
import { ShirtItem } from '../components/ShirtItem'

export default ({
  pageContext,
  data: {
    allShopifyProduct: { nodes: shirts },
    shopifyCollection: category
  }
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

  return (
    <Grid
      as="main"
      rowGap={'1em'}
      justifySelf={'center'}
      px={'10px'}
      pl={{ base: '0', md: 'unset' }}
      pr={{ base: '33px', md: 'unset' }}
      width={'100vw'}
    >
      <SEO
        title={`${
          categoryTitle ?? 'Camisetas'
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

      <ShirtMenuBar
        categories={categories as string[]}
        height={'60px'}
        alignSelf={{ base: 'end', lg: 'center' }}
        onChangeMenu={(query) => {
          handleFetchShirts(query)
          setIsInfiniteLoading(true)
        }}
        mb={'0'}
      />

      <Box as="main">
        <Heading as="h1" alignSelf={'center'} mb={'0.5em'}>
          {categoryTitle ?? 'Camisetas'}
        </Heading>
        <SimpleGrid
          as="ul"
          minChildWidth={'300px'}
          listStyleType={'none'}
          display={'grid'}
          spacing={5}
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
        </SimpleGrid>
      </Box>

      {!isInfiniteLoading && numberOfPages !== 1 && (
        <PaginationNav
          path={
            pageContext?.categorySlug
              ? `/camisetas/categoria/${pageContext.categorySlug}`
              : '/camisetas'
          }
          lastPage={numberOfPages as number}
          currentPage={currentPage}
        />
      )}
    </Grid>
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
      description
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
