import React from 'react'
import { Header } from '../components/Header'
import { HomePageQuery } from '../../graphql-types'
import { graphql, Link as GatsbyLink } from 'gatsby'
import {
  Box,
  FormLabel,
  Grid,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Text
} from '@chakra-ui/core'
import { CompanyHeading } from '../components/home/CompanyHeading'
import { Helmet } from 'react-helmet'
import { HomePageLayout } from '../layouts/HomePageLayout'

export default ({
  data: { shopifyCollection, allShopifyProduct }
}: {
  data: HomePageQuery
}) => {
  const categories = [
    ...new Set(allShopifyProduct.nodes.map(({ productType }) => productType))
  ]

  console.log(categories)

  return (
    <HomePageLayout>
      <Helmet bodyAttributes={{ id: 'home-page-body' }} />
      <Header withBackground gridArea={'1 / -1'}>
        <Grid></Grid>
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
        <Grid as="section" zIndex={2} role={'listbox'} paddingTop={'15px'}>
          <List
            display={'grid'}
            gridTemplateColumns={`repeat(${shopifyCollection.products.length}, 300px)`}
            overflowX={'scroll'}
            style={{ scrollbarWidth: 'none' }}
          >
            {shopifyCollection?.products.map(({ images, title, handle }, i) => (
              <ListItem key={handle} gridColumn={`${i + 1}`}>
                <Link
                  as={GatsbyLink}
                  to={`/produto/${handle}`}
                  display={'grid'}
                  gridTemplateRows={'repeat(8, 0.125fr)'}
                >
                  <Image
                    role="listitem"
                    id={title}
                    gridArea={'1 / 1 / 4 / 1'}
                    loading={'lazy'}
                    margin={'10px'}
                    padding={'10px'}
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
                    gridArea={'7 / 1 / 9 / 1'}
                    zIndex={2}
                    alignSelf={'center'}
                    marginBottom={'2em'}
                    justifySelf={'center'}
                    width={'200px'}
                    htmlFor={title}
                    justifyContent={'center'}
                    transform={'skewX(-20deg)'}
                    background={'rgba(240, 52, 52)'}
                    textAlign={'center'}
                    fontWeight={'bold'}
                    color={'white'}
                  >
                    {title}
                  </FormLabel>
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>
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
        gridTemplateRows={{ xs: '840px 840px', md: '400px 40px 400px' }}
        gridTemplateColumns={{ xs: '100vw', md: '50vw 50vw' }}
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
          // height={'220px'}
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
    </HomePageLayout>
  )
}

export const pageQuery = graphql`
  query HomePage {
    shopifyCollection(title: { eq: "Home" }) {
      title
      products {
        title
        handle
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
