import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { groovyBorder } from '../components/styles/groovyBorder'
import { useStaticCategories } from '../features/catalog/hooks/useStaticCategories'
import { PaginationNav } from '../components/PaginationNav'
import { SEO } from '../components/SEO'
import { useLazyShirtsCatalog } from '../features/catalog/hooks/useLazyShirts'
import { ShirtMenuBar } from '../features/catalog/components/ShirtMenuBar'
import {
  Badge,
  Box,
  Grid,
  Heading,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Spinner,
  Text
} from '@chakra-ui/react'
import { InfiniteLoadingSpinner } from '../components/InfiniteLoadingSpinner'
import GatsbyLink from 'gatsby-link'
import GatsbyImage from 'gatsby-image'
import { numberToBRL } from '../utils/price'
import { toSlug } from '../utils/toSlug'

export default ({ pageContext, data: { allShopifyProduct } }: any) => {
  const { numberOfPages, humanPageNumber: currentPage } = pageContext

  const categories = useStaticCategories()
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

  const shirts = allShopifyProduct.nodes

  return (
    <Grid
      as="main"
      gridTemplateRows={'auto'}
      rowGap={'1em'}
      maxWidth={'1077px'}
      justifySelf={'center'}
      px={'10px'}
      pl={{ base: '0', md: 'unset' }}
      pr={{ base: '33px', md: 'unset' }}
      width={'100vw'}
    >
      <SEO
        title={`${
          pageContext?.category ?? 'Camisetas'
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

      <Heading as="h1" alignSelf={'center'} mb={'0.5em'}>
        {pageContext?.category ?? 'Camisetas'}
      </Heading>

      <ShirtMenuBar
        categories={categories as string[]}
        height={'60px'}
        alignSelf={{ base: 'end', lg: 'center' }}
        onChangeMenu={(query) => {
          handleFetchShirts(query)
          setIsInfiniteLoading(true)
        }}
        mt={'-20px'}
        mb={'0'}
      />

      <Box as="main">
        <SimpleGrid
          as="ul"
          columns={{
            base: 1,
            md: 2,
            lg: 3
          }}
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
                background={'white'}
                {...groovyBorder}
              >
                <Link
                  as={GatsbyLink as any}
                  {...{ to: `/produto/${toSlug(title)}` }}
                  display={'grid'}
                  gridTemplateColumns={'1fr'}
                >
                  <Box
                    as="figure"
                    my={'10px'}
                    gridTemplateColumns={'auto'}
                    pr="10px"
                  >
                    <GatsbyImage
                      loading="lazy"
                      fluid={image.localFile.childImageSharp.fluid}
                      alt={image.altText}
                    />

                    <Text
                      as="figcaption"
                      display={'flex'}
                      justifyContent={'space-between'}
                      fontWeight={'bold'}
                      zIndex={2}
                      fontSize={'sm'}
                      px={'10px'}
                    >
                      {title}
                      <Badge
                        height={'20px'}
                        variant={'outline'}
                        color={'#2e1d3e'}
                        borderRadius={'4px'}
                      >
                        {numberToBRL(
                          parseFloat(priceRange.minVariantPrice.amount)
                        )}
                      </Badge>
                    </Text>
                  </Box>
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
  query CatalogQuery($skip: Int!, $limit: Int!) {
    allShopifyProduct(skip: $skip, limit: $limit) {
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
