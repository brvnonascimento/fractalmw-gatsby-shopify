import React, { useState } from 'react'
import { SitePageContext } from '../../graphql-types'
import { groovyBorder } from '../components/styles/groovyBorder'
import { ShirtGrid } from '../features/catalog/components/ShirtGrid'
import { useStaticCategories } from '../features/catalog/hooks/useStaticCategories'
import { PaginationNav } from '../components/PaginationNav'
import { SEO } from '../components/SEO'
import { useLazyShirtsCatalog } from '../features/catalog/hooks/useLazyShirts'
import { ShirtMenuBar } from '../features/catalog/components/ShirtMenuBar'
import { Grid } from '@chakra-ui/core'

export interface ShirtCatalogProps {
  pageContext: SitePageContext
}

export default ({ pageContext }: ShirtCatalogProps) => {
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
      gridTemplateColumns={{ lg: '5% 1fr 5%' }}
      rowGap={'1em'}
      px={'10px'}
    >
      <SEO
        title={`Camisetas ${currentPage} de ${lastPage} - Fractal Music Wear`}
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
        gridArea={{ xs: '2 / 1 / 4 / 4', lg: '2 / 2 / 4' }}
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
        gridArea={{ xs: '4 / 1 / 6 / 4', lg: '4 / 2 / 6 / 2' }}
        p={'1em'}
        background={'white'}
        {...groovyBorder}
      />

      {!isInfiniteLoading && (
        <PaginationNav
          lastPage={lastPage as number}
          gridArea={{xs: '6 / 1 / 6 / 4', lg: '6 / 2'}}
        />
      )}
    </Grid>
  )
}
