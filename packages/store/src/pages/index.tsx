import React from 'react'
import { Header } from '../components/Header'
import { HomePageQuery } from '../../graphql-types'
import { graphql } from 'gatsby'
import { Box, FormLabel, Grid, Heading, Image, Text } from '@chakra-ui/core'
import { CompanyHeading } from '../components/home/CompanyHeading'
import { Navbar } from '../components/Navbar'
import { Helmet } from 'react-helmet'
import { HomePageLayout } from '../layouts/homePageLayout'

export default ({ data: { shopifyCollection } }: { data: HomePageQuery }) => {
  return (
    <HomePageLayout>
      <Helmet bodyAttributes={{ id: 'home-page-body' }} />
      <Header
        display={'grid'}
        gridArea={'1 / -1'}
        gridTemplateRows={'100px 50px 110px 50px 200px'}
        gridTemplateColumns={'100px 0.5fr 0.25fr 0.25fr 100px'}
        fontWeight={'bold'}
        fontSize={'xl'}
        justifyItems={'center'}
        alignItems={'center'}
        color={'white'}
        zIndex={2}
      >
        <CompanyHeading
          name={'Fractal Music Wear'}
          gridArea={{ xs: '3 / 1 / 3 / -1', md: '3 / 2' }}
          justifySelf={{ xs: 'center', md: 'start' }}
          alignSelf={{ xs: 'end' }}
          textShadow={'1px 1px 5px black'}
          lineHeight={'1.2em'}
        />
        <Text
          gridArea={{ xs: '4 / 1 / 4 / -1', md: '4 / 2' }}
          justifySelf={{ xs: 'center', md: 'start' }}
          alignSelf={'end'}
          fontWeight={'lighter'}
          fontSize={'1.2em'}
          textShadow={'1px 1px 5px black'}
          lineHeight={'1.05em'}
        >
          Estampando a rua desde 2007.
        </Text>
      </Header>

      <Grid as="main" gridArea={'2 / 1'}>
        {shopifyCollection?.products && (
          <Grid
            as="section"
            zIndex={2}
            role={'listbox'}
            paddingY={'5px'}
            gridTemplateRows={'60% 1fr 10%'}
            gridTemplateColumns={`repeat(${shopifyCollection.products.length}, 300px)`}
            overflowX={'scroll'}
            style={{ scrollbarWidth: 'none' }}
          >
            {shopifyCollection.products.map(({ images, title }, i) => (
              <>
                <Image
                  role="listitem"
                  gridColumn={`${i + 1}`}
                  gridRow={'1 / 3'}
                  id={title}
                  display={'flex'}
                  loading={'lazy'}
                  margin={'10px'}
                  padding={'10px'}
                  alignSelf={'center'}
                  borderRadius={'10px'}
                  border={'1px'}
                  borderStyle={'groove'}
                  borderWidth={'2px'}
                  borderColor={'rgba(0, 0, 0, 0.5)'}
                  boxShadow={'6px 4px 0px rgba(240, 52, 52, 0.4)'}
                  src={images[0].localFile.childImageSharp.fluid.srcWebp}
                  fallbackSrc={images[0].localFile.childImageSharp.fluid.src}
                  alt={images[0].altText}
                  height={'310px'}
                  width={'282px'}
                />
                <FormLabel
                  as="label"
                  zIndex={3}
                  htmlFor={title}
                  display={'flex'}
                  alignSelf={'center'}
                  justifyContent={'center'}
                  gridArea={`2 / ${i + 1}`}
                  transform={'skewX(-20deg)'}
                  background={'rgba(240, 52, 52)'}
                  // top={'-5px'}
                  width={'60%'}
                  textAlign={'center'}
                  fontWeight={'bold'}
                  justifySelf={'center'}
                  color={'white'}
                >
                  {title}
                </FormLabel>
              </>
            ))}
          </Grid>
        )}
      </Grid>

      <Heading
        size={'2xl'}
        gridRow={3}
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
        gridTemplateRows={{ xs: '840px 840px', lg: '400px 40px 400px' }}
        gridTemplateColumns={{ xs: '100vw', lg: '50vw 50vw' }}
      >
        <Heading
          as="h3"
          gridArea={{ xs: '1 / 1', lg: '2 / 1' }}
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
          gridArea={{ xs: '1 / 1', lg: '1 / 1 / -1 / 1' }}
          src="/test.jpg"
          width={'100%'}
          height={'100%'}
          padding={'2em'}
          // height={'220px'}
          alt="Como fazemos nossas estampas."
          rounded={'3em'}
        />

        <Heading
          as="h3"
          gridArea={{ xs: '2 / 1', lg: '2 / 2' }}
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
          gridArea={{ xs: '2 / 1', lg: '1 / 2 / -1 / 2' }}
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
          localFile {
            childImageSharp {
              fluid(
                maxHeight: 310
                maxWidth: 282
                jpegQuality: 50
                webpQuality: 50
              ) {
                srcWebp
                src
              }
            }
          }
          altText
        }
      }
    }
    allShopifyProduct {
      nodes {
        productType
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
