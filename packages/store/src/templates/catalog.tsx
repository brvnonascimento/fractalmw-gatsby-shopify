import React from 'react'
import { SitePageContext } from '../../graphql-types'
import { groovyBorder } from '../components/styles/groovyBorder'
import { ShirtGrid } from '../features/catalog/components/ShirtGrid'
import { useStaticCategories } from '../features/catalog/hooks/useStaticCategories'
import { Header } from '../layout/fragments/Header'
import { ShirtCatalogLayout } from '../layout/ShirtCatalogLayout'
import { PaginationNav } from '../components/PaginationNav'
import { SEO } from '../components/SEO'
import { useLazyShirtsCatalog } from '../features/catalog/hooks/useLazyShirts'
import { ShirtMenuBar } from '../features/catalog/components/ShirtMenuBar'

export interface ShirtCatalogProps {
  pageContext: SitePageContext
}

export default ({ pageContext }: ShirtCatalogProps) => {
  const { shirts, lastPage, currentPage } = pageContext
  const categories = useStaticCategories()
  const [
    handleFetchShirts,
    { shirts: lazyShirts, loading }
  ] = useLazyShirtsCatalog()

  const getNextPage = () => {
    if (currentPage === lastPage) {
      return lastPage
    }

    return currentPage + 1
  }

  return (
    <ShirtCatalogLayout>
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

      <Header gridArea={'1 / 1 / 5 / 4'} withBackground />

      <ShirtMenuBar categories={categories as string[]} gridArea={'2 / 2'} onChangeMenu={handleFetchShirts} />

      <ShirtGrid
        as="main"
        loading={loading}
        shirts={lazyShirts.length !== 0 ? lazyShirts : shirts}
        gridArea={{ xs: '4 / 1 / 6 / 4', lg: '4 / 2 / 6 / 2' }}
        py={'15px'}
        pl={'36px'}
        background={'white'}
        justifyItems={'center'}
        {...groovyBorder}
      />

      <PaginationNav
        marginTop={'20px'}
        lastPage={lastPage as number}
        gridArea={'6 / 2'}
      />
    </ShirtCatalogLayout>
  )
}
