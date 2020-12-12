import React from 'react'
import {
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  Img,
  Link,
  List,
  ListItem,
  useBreakpointValue,
  Text
} from '@chakra-ui/react'
import { useHomePageData } from '../hooks/home/useHomePageData'
import { SEO } from '../components/SEO'
import GatsbyImage from 'gatsby-image'
import GatsbyLink from 'gatsby-link'
import { toSlug } from '../utils/toSlug'
import { BrandingLogoIcon } from '../components/icons/BrandingLogoIcon'
import { useStaticQuery, graphql } from 'gatsby'
import { ShirtItem } from '../components/ShirtItem'
import { CATEGORY_URL_PREFIX, SHIRTS_URL_PREFIX } from '../constants/url'
import { WhatsappWhiteIcon } from '../components/icons/WhatsappWhiteIcon'
import { WhatsappIcon } from '../components/icons/WhatsappIcon'
import { BoxContainer } from '../components/BoxContainer'
import BackgroundImage from 'gatsby-background-image'

export default () => {
  const { bannerImages, asideImages } = useHomePageData()
  const isSmartphone = useBreakpointValue({ base: true, md: false })

  const {
    shopifyCollection: { products },
    allShopifyCollection: { nodes: categories }
  } = useStaticQuery(graphql`
    query HomeShirts {
      shopifyCollection(title: { eq: "Home" }) {
        products {
          id
          title
          handle
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            altText
          }
        }
      }
      allShopifyCollection(filter: { title: { ne: "Home" } }) {
        nodes {
          title
          handle
          image {
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
  `)

  return (
    <Box d={'flex'} flexDirection={'column'} gridRowGap={2}>
      <Grid gridTemplateRows={'500px'} rowGap={'1em'} w={'100vw'}>
        <SEO
          title={'Camisetas com estampas criativas - Fractal Music Wear'}
          metaDescription={
            'A Fractal Music Wear oferece várias opções de estampas de camisetas de estampas criativas, engraçadas e inteligentes, seja de personagens especiais, bandas, filmes e cartoons conhecidos. Escolha uma ou envie seu seu desenho para personalizar a camiseta'
          }
          image={'/cover.jpg'}
          keywords="fractal music wear, fractal, fractalmw, piracicaba, camisetas personalizadas, camisetas criativas, estampas, estamparia"
        />

        <Grid
          as="section"
          gridArea={{ md: '1' }}
          gridTemplateColumns={{
            base: '50vw 50vw',
            md: 'auto auto 100px 300px 20px 250px 5%'
          }}
          gridTemplateRows={{
            md: '30px repeat(2, 25px) 1fr 1fr repeat(2, 25px) 30px'
          }}
          overflow={'hidden'}
          rowGap={{ base: '1em', md: 0 }}
          width={'100%'}
          height={'500px'}
          background={'rgba(146, 74, 205, 0.95)'}
          justifySelf={'center'}
          backgroundBlendMode={'exclusion'}
          backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='white' stroke-width='1' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E")`}
        >
          <Flex
            gridArea={{
              base: '1/ 1 / 1 / 3',
              md: '4 / 1 / 6 / 4',
              xl: '4 / 1 / 6'
            }}
            direction="column"
            color="white"
            zIndex={2}
            justifyContent={'center'}
            textAlign={'center'}
            justifySelf={'center'}
          >
            <BrandingLogoIcon
              w={'300px'}
              h={'200px'}
              aria-label={'Fractal Music Wear'}
              alignSelf={'center'}
              justifySelf={'center'}
              width={'300px'}
              py={'1em'}
            />

            <Heading as="h1" py={'10px'}>
              Desde 2007
            </Heading>
          </Flex>

          <Link
            as={GatsbyLink as any}
            {...{ to: '/camisetas/categoria/camisetas-psicodelicas/' }}
            rounded={'100%'}
            zIndex={{ md: 3 }}
            gridArea={{
              base: '2 / 2 / 6 / 4',
              md: '4 / 5 / 6 / 5',
              xl: '4 / 2 / 6'
            }}
            alignSelf={'center'}
            width={'200px'}
            height={'200px'}
            justifySelf={'center'}
            padding={'30px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            fontWeight={'500'}
            color="white"
            background={'#2e1d3e'}
            boxShadow={'-6px -6px 0px #a672bc'}
          >
            CONHEÇA
            <br />
            NOSSA LINHA
            <br />
            DE CAMISETAS
            <br />
            PSICODÉLICAS
          </Link>

          <Box
            gridArea={{ base: '1 / 1 / 1 / 3', md: '2 / 4 / 8' }}
            zIndex={{ md: 2 }}
            width={'100%'}
            maxWidth={{ md: '400px' }}
            maxHeight={{
              base: '300px',
              md: '430px'
            }}
            filter={{ base: 'brightness(89%)', md: 'unset' }}
            justifySelf={{ base: 'center', md: 'start' }}
          >
            <GatsbyImage
              fluid={bannerImages[0]}
              imgStyle={{
                height: '92%'
              }}
              loading="lazy"
            />
          </Box>

          {!isSmartphone && (
            <>
              <Box
                zIndex={{ md: 2 }}
                height={'100%'}
                width={'100%'}
                maxWidth={{ md: '250px' }}
                gridArea={{ md: '4 / 6 / 8' }}
                justifySelf={{ base: 'center', md: 'start' }}
              >
                <GatsbyImage fluid={bannerImages[1]} loading="lazy" />
              </Box>

              <Box
                gridArea={{ base: '3 / 3 / -1 / -1', md: '3 / 3 / 7 / 8' }}
                ml={'22px'}
                background={'#a26eb6'}
              />
            </>
          )}
        </Grid>

        <Box as="main" d={'grid'} justifyItems={'center'}>
          <BoxContainer
            d={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            gridRowGap={2}
          >
            <Heading w={'100%'}>Destaques</Heading>
            <List
              d={'grid'}
              w={'100%'}
              gridColumnGap={2}
              gridRowGap={2}
              px={2}
              listStyleType={'none'}
              gridTemplateColumns={'repeat(auto-fill, minmax(250px, 1fr))'}
            >
              {products
                .slice(0, 12)
                .map(({ images: [image], title, priceRange }) => (
                  <ListItem
                    key={title}
                    _hover={{ transform: 'scale(1.1)', zIndex: 10 }}
                    transition={'all .2s ease-in-out'}
                    background={'white'}
                  >
                    <Link
                      as={GatsbyLink}
                      to={`/produto/${toSlug(title)}`}
                      title={title}
                    >
                      <ShirtItem
                        title={title}
                        image={image}
                        priceRange={priceRange}
                      />
                    </Link>
                  </ListItem>
                ))}
            </List>

            <Link
              as={GatsbyLink}
              to={SHIRTS_URL_PREFIX}
              d={'flex'}
              justifyContent={'center'}
              borderColor={'black'}
              textAlign={'center'}
              p={2}
              fontWeight={'bold'}
              borderWidth={'2px'}
              w={'200px'}
            >
              QUERO VER MAIS
            </Link>
          </BoxContainer>

          <Divider my={4} />

          <BoxContainer p={2}>
            <Heading mb={4}>Categorias</Heading>
            <List
              d={'grid'}
              gridTemplateColumns={'repeat(auto-fill, minmax(300px, 1fr))'}
              gridColumnGap={4}
              gridRowGap={2}
              textTransform={'uppercase'}
              textAlign={'center'}
              fontWeight={'bold'}
              css={
                !isSmartphone
                  ? {
                      'li:first-child': {
                        gridColumn: 'span 2'
                      },
                      'li:nth-child(4n)': {
                        gridColumn: 'span 2'
                      },
                      'li:last-child': {
                        gridColumn: 'span 3'
                      }
                    }
                  : undefined
              }
            >
              {categories.map(({ title, handle, image }, i) => (
                <ListItem
                  as={BackgroundImage}
                  Tag={'li'}
                  fluid={image.localFile.childImageSharp.fluid}
                  key={handle}
                  h={'250px'}
                  key={handle}
                >
                  <Link
                    as={GatsbyLink}
                    to={`${CATEGORY_URL_PREFIX}/${handle}`}
                    d={'flex'}
                    h={'300px'}
                    w={'100%'}
                    alignItems={'center'}
                    color={'white'}
                    justifyContent={'center'}
                  >
                    <Box as={'span'} bg={'purple.800'} p={2}>
                      {title}
                    </Box>
                  </Link>
                </ListItem>
              ))}
            </List>
          </BoxContainer>

          <Divider my={4} />

          <Box
            as={'aside'}
            d={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
          >
            <BoxContainer
              as={'article'}
              d={'grid'}
              p={2}
              gridTemplateColumns={'auto 1fr'}
              gridTemplateRows={'auto 1fr'}
              color={{
                base: 'white',
                md: 'black'
              }}
            >
              <Box
                zIndex={1}
                gridArea={{ base: '1 / 1', md: '1 / 2' }}
                textAlign={{ base: 'center', md: 'left' }}
                px={4}
              >
                <Heading mb={4}>Personalizamos sua ideia em camiseta!</Heading>
                <Text fontWeight={'medium'} w={{ md: '80%' }} fontSize={'xl'}>
                  Aqui na Fractal, transformamos sua ideia em camiseta, você
                  pode ter uma camiseta personalizada só sua, com a qualidade
                  Fractal de tecido e estampa, envie sua arte digitalizada e
                  faça um orçamento!
                </Text>
              </Box>

              <Img
                as={GatsbyImage}
                fluid={asideImages[1]}
                gridArea={{ base: '1 / 1 / 3', md: 'span 2 / 1' }}
                w={{ base: '100%', md: '400px' }}
                alt={'Como fazemos nossas camisetas!'}
                filter={{ base: 'brightness(70%)', md: 'unset' }}
              />

              <Link
                gridArea={{ base: '2 / 1', md: '2 / 2' }}
                isExternal
                d={'flex'}
                href={'https://wa.me/+5519984311890'}
                bg={{ base: 'white', md: 'black' }}
                color={{ base: 'black', md: 'white' }}
                textAlign={'center'}
                p={2}
                fontWeight={'bold'}
                alignItems={'center'}
                alignSelf={'center'}
                justifyContent={'center'}
                w={{
                  base: '90%',
                  md: '50%'
                }}
                h={'50px'}
                mx={'auto'}
                my={6}
                zIndex={1}
              >
                {!isSmartphone ? (
                  <WhatsappWhiteIcon w={'30px'} h={'30px'} mr={2} />
                ) : (
                  <WhatsappIcon w={'30px'} h={'30px'} mr={2} />
                )}
                Faça um orçamento!
              </Link>
            </BoxContainer>
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}
