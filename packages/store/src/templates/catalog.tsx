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
    <Grid gridTemplateRows={'auto'} gridTemplateColumns={{lg: '5% 1fr 5%'}}>
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
        gridArea={{ xs: '2 / 2 / 4' }}
        height={'60px'}
        alignSelf={{ xs: 'end', lg: 'center' }}
        onChangeMenu={(query) => {
          handleFetchShirts(query)
          setIsInfiniteLoading(true)
        }}
      />

      <ShirtGrid
        as="main"
        loading={loading}
        isInfiniteLoading={isInfiniteLoading}
        onInfiniteLoadingTriggered={() => {
          if(!loading) {
            console.log('INFINITE LOADING TRIGGERED!!!')
            fetchNextPage()
          }
        }}
        shirtSize={'300px'}
        hasMoreShirts={hasMoreShirts}
        minHeight={'700px'}
        shirts={lazyShirts.length !== 0 ? lazyShirts : shirts}
        gridArea={{ xs: '4 / 1 / 6 / 4', lg: '4 / 2 / 6 / 2' }}
        py={'15px'}
        background={'white'}
        {...groovyBorder}
      />

      {!isInfiniteLoading && (
        <PaginationNav
          marginTop={'20px'}
          lastPage={lastPage as number}
          gridArea={'6 / 2'}
        />
      )}
    </Grid>
  )
}
