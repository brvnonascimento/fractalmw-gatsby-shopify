import React, { useState } from 'react'
import { groovyBorder } from '../components/styles/groovyBorder'
import { ShirtGrid } from '../features/catalog/components/ShirtGrid'
import { useStaticCategories } from '../features/catalog/hooks/useStaticCategories'
import { PaginationNav } from '../components/PaginationNav'
import { SEO } from '../components/SEO'
import { useLazyShirtsCatalog } from '../features/catalog/hooks/useLazyShirts'
import { ShirtMenuBar } from '../features/catalog/components/ShirtMenuBar'
import { Grid, Heading } from '@chakra-ui/core'

export default ({ pageContext }: any) => {
  const { shirts, lastPage, currentPage } = pageContext
  const categories = useStaticCategories()
  const [
    handleFetchShirts,
    { shirts: lazyShirts, hasMoreShirts, loading, fetchNextPage }
  ] = useLazyShirtsCatalog()

  const [isInfiniteLoading, setIsInfiniteLoading] = useState(false)

  const getNextPage = () => {
    if (currentPage === lastPage) {
      return lastPage
    }

    return (currentPage as number) + 1
  }

  return (
    <Grid
      as="main"
      gridTemplateRows={'auto'}
      rowGap={'1em'}
      maxWidth={'1077px'}
      justifySelf={'center'}
      px={'10px'}
      width={'100%'}
    >
      <SEO
        title={`${pageContext?.category ?? 'Camisetas'} ${currentPage} de ${lastPage} - Fractal Music Wear`}
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

      <Heading as='h1' alignSelf={'center'} mb={'0.5em'}>{pageContext?.category ?? 'Camisetas'}</Heading>

      <ShirtMenuBar
        categories={categories as string[]}
        height={'60px'}
        alignSelf={{ xs: 'end', lg: 'center' }}
        onChangeMenu={(query) => {
          handleFetchShirts(query)
          setIsInfiniteLoading(true)
        }}
        mt={'-20px'}
        mb={'0'}
      />

      <ShirtGrid
        as="main"
        shirtProps={{
          htmlHeight: '300',
          htmlWidth: '300'
        }}
        gridProps={{
          columns: {
            xs: 1,
            md: 2,
            lg: 3
          }
        }}
        loading={loading}
        isInfiniteLoading={isInfiniteLoading}
        onInfiniteLoadingTriggered={() => {
          if (!loading) {
            fetchNextPage()
          }
        }}
        hasMoreShirts={hasMoreShirts}
        minHeight={'700px'}
        justifyItems={'center'}
        shirts={lazyShirts.length !== 0 ? lazyShirts : shirts}
        gatsbyImage={lazyShirts.length === 0}
        p={'1em'}
        background={'white'}
        {...groovyBorder}
      />

      {!isInfiniteLoading && lastPage !== 1 && (
        <PaginationNav
          path={
            pageContext?.categorySlug
              ? `/camisetas/categoria/${pageContext.categorySlug}`
              : '/camisetas'
          }
          lastPage={lastPage as number}
        />
      )}
    </Grid>
  )
}
