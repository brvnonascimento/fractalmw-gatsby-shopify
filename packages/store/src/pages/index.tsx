import React from 'react'
// import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import { HomePageQuery } from '../../graphql-types'
import { HomePageLayout } from '../layouts/HomePage'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Nav } from '../components/Nav'
import { SearchBar } from '../components/SearchBar'
// import { Curve } from '../components/Curve'
// import CurveSvg from '../assets/curve.svg'
import { Image, Stack, Text } from '@chakra-ui/core'
import { CartButton } from '../components/CartButton'
import { CompanyHeading } from '../components/home/CompanyHeading'

export default ({ data: { shopifyCollection } }: { data: HomePageQuery }) => {
  return (
    <HomePageLayout>
      <Header
        display={'grid'}
        gridArea={'1 / -1'}
        gridTemplateRows={'100px 50px 110px 50px 250px'}
        gridTemplateColumns={'100px 0.5fr 0.25fr 0.25fr 100px'}
        fontWeight={'bold'}
        fontSize={'xl'}
        justifyItems={'center'}
        alignItems={'center'}
        color={'white'}
        zIndex={2}
      >
        <Image src={'/logo.png'} width="72px" gridArea={'1 / 1'} />

        <Nav
          gridArea={{
            sm: '1 / span 2',
            md: '1 / 2'
          }}
          position={{
            xs: 'fixed',
            lg: 'relative'
          }}
          display={'flex'}
          padding={'10px'}
          bottom={{
            xs: '10px',
            lg: 0
          }}
          borderRadius={'10px'}
          background={{
            xs: 'rgba(73,79,94,1)',
            lg: 'transparent'
          }}
          backgroundImage={{
            xs: 'url(watermark.png)',
            lg: undefined
          }}
          backgroundSize={'800px'}
          height={{
            xs: '70px',
            lg: 'auto'
          }}
          alignItems={'center'}
          width={{
            xs: '95%',
            lg: '100%'
          }}
        />

        <SearchBar
          gridArea={{
            xs: '2 / 1 / 2 / -1',
            lg: '1 / span 2'
          }}
          width={'90%'}
        />

        <CartButton gridArea={'1 / 5'} />

        <CompanyHeading
          name={'Fractal Music Wear'}
          gridArea={{ xs: '3 / 2 / 3 / span 3', md: '3 / 2' }}
          justifySelf={'start'}
          alignSelf={'end'}
        />
        <Text
          gridArea={{ xs: '4 / 2 / 4 /span 3', lg: '4 / 2' }}
          justifySelf={'start'}
          alignSelf={'end'}
        >
          Estampando a rua desde 2007.
        </Text>

        <Image
          src="/lele.jpg"
          width={'100%'}
          height={'100%'}
          objectFit={'cover'}
          alt="Quem veste Fractal Music Wear?"
          gridArea={'span 3 / 4'}
        />
        <Image
          src="/test.jpg"
          width={'100%'}
          height={'100%'}
          objectFit={'cover'}
          alt="Como fazemos nossas estampas."
          gridArea={'5 / 3'}
        />
      </Header>

      <Main gridArea={'2 / 1'} marginTop={'2em'}>
        {shopifyCollection?.products && (
          <Stack as="section" isInline overflowX={'scroll'}>
            {shopifyCollection.products.map(({ images, title }) => (
              <Image
                src={images[0].originalSrc}
                alt={images[0].altText}
                height={'320px'}
              />
            ))}
          </Stack>
        )}
      </Main>

      <footer></footer>
    </HomePageLayout>
  )
}

export const pageQuery = graphql`
  query HomePage {
    shopifyCollection(title: { eq: "Home" }) {
      title
      products {
        title
        images {
          originalSrc
          altText
        }
      }
    }
  }
  # query HomePage {
  #   # shopifyCollection(title: {eq: "Home"}) {
  #   #   image {
  #   #     src
  #   #   }
  #   #   description
  #   #   products {
  #   #     title
  #   #     images {
  #   #       altText
  #   #       originalSrc
  #   #     }
  #   #   }
  #   # }
  # }
`
