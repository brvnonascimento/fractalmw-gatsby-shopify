import React, { useEffect } from 'react'
import { Header } from '../layout/fragments/Header'
import { Box, Grid, Heading, Image, Text } from '@chakra-ui/core'
import { CompanyHeading } from '../components/CompanyHeading'
import { HomePageLayout } from '../layout/HomePageLayout'
import { useHomePageData } from '../hooks/home/useHomePageData'
import { InlineCategoryList } from '../features/catalog/components/InlineCategoryList'
import { ShirtGrid } from '../features/catalog/components/ShirtGrid'
import { useStaticCategories } from '../features/catalog/hooks/useStaticCategories'
import { SEO } from '../components/SEO'
import { useQuery, gql } from '@apollo/client'

const GET_PRODUCT = gql`
  query {
    shop {
      name
      primaryDomain {
        url
        host
      }
    }
  }
`

export default () => {
  const { data, error } = useQuery(GET_PRODUCT)
  useEffect(() => {
    console.log('gqlreq', data)
  }, [data])
  console.log(error)
  const { shirtList } = useHomePageData()
  const categories = useStaticCategories()

  return (
    <Grid
      gridTemplateRows={'repeat(3, 175px) auto 200px 200px auto 200px'}
    >
      <SEO
        title={'Camisetas com estampas criativas - Fractal Music Wear'}
        metaDescription={
          'A Fractal Music Wear oferece várias opções de estampas de camisetas de estampas criativas, engraçadas e inteligentes, seja de personagens especiais, bandas, filmes e cartoons conhecidos. Escolha uma ou envie seu seu desenho para personalizar a camiseta'
        }
        image={'/cover.png'}
        keywords="fractal music wear, fractal, fractalmw, piracicaba, camisetas personalizadas, camisetas criativas, estampas, estamparia"
      />

      <Grid
        as="main"
        gridArea={'3 / 1 / 6 / 1'}
        gridTemplateRows={'50px auto auto'}
        paddingX={'20px'}
      >
        <Heading>Categorias</Heading>
        <InlineCategoryList categories={categories} />
        <Grid as="section" zIndex={2} marginTop={'30px'}>
          <Heading>Destaques</Heading>
          <ShirtGrid shirts={shirtList} isInline />
        </Grid>
      </Grid>

      <Heading
        gridRow={6}
        size={'2xl'}
        justifySelf={'center'}
        alignSelf={'center'}
        paddingX={'2em'}
        textAlign={'center'}
      >
        Very very large
        <br /> catchy phrase text.
      </Heading>

      <Grid
        as="section"
        gridTemplateRows={{ xs: '840px 840px', md: '400px 40px 400px' }}
        gridTemplateColumns={{ xs: '100vw', md: '50vw 50vw' }}
        gridRow={7}
      >
        <Heading
          as="h3"
          gridArea={{ xs: '1 / 1', md: '2 / 1' }}
          size={'2xl'}
          zIndex={2}
          color={'white'}
          justifySelf={'center'}
          alignSelf={'center'}
          textShadow={'1px 1px 27px black'}
        >
          Text with overlay.
        </Heading>
        <Image
          loading="lazy"
          gridArea={{ xs: '1 / 1', md: '1 / 1 / -1 / 1' }}
          src="/test.jpg"
          width={'100%'}
          height={'100%'}
          padding={'2em'}
          alt="Como fazemos nossas estampas."
          rounded={'3em'}
        />

        <Heading
          as="h3"
          gridArea={{ xs: '2 / 1', md: '2 / 2' }}
          size={'2xl'}
          zIndex={2}
          color={'white'}
          justifySelf={'center'}
          alignSelf={'center'}
          textShadow={'1px 1px 27px black'}
        >
          Text with overlay.
        </Heading>
        <Image
          loading={'lazy'}
          gridArea={{ xs: '2 / 1', md: '1 / 2 / -1 / 2' }}
          gridColumn={''}
          src="/lele.jpg"
          width={'100%'}
          height={'100%'}
          padding={'2em'}
          // height={'220px'}
          alt="Como fazemos nossas estampas."
          rounded={'3em'}
        />
      </Grid>

      <Box as="footer"></Box>
    </Grid>
  )
}
