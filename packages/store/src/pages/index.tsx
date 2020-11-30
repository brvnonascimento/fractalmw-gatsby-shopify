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

export default () => {
  const { bannerImages, asideImages } = useHomePageData()

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
        }
      }
    }
  `)

  return (
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
          base: '10px 1fr 1fr 10px',
          md: 'auto auto 100px 300px 20px 250px 5%'
        }}
        gridTemplateRows={{
          base: 'auto',
          md: '30px repeat(2, 25px) 1fr 1fr repeat(2, 25px) 30px'
        }}
        overflow={'hidden'}
        rowGap={{ base: '1em', md: 0 }}
        width={'100%'}
        height={'500px'}
        background={'rgba(146, 74, 205, 0.95)'}
        justifySelf={'center'}
        backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='white' stroke-width='1' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E")`}
      >
        <Flex
          gridArea={{
            base: '1 / 2 / -3 / 4',
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
          zIndex={3}
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
          gridArea={{ base: '1 / 1 / 7 / 3', md: '2 / 4 / 8' }}
          zIndex={2}
          width={'100%'}
          maxWidth={{ base: '200px', md: '400px' }}
          maxHeight={{
            base: '300px',
            md: '430px'
          }}
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

        <Box
          zIndex={2}
          height={'100%'}
          width={'100%'}
          maxWidth={{ base: '200px', md: '250px' }}
          gridArea={{ base: '1 / 3 / 7 / 5', md: '4 / 6 / 8' }}
          justifySelf={{ base: 'center', md: 'start' }}
        >
          <GatsbyImage fluid={bannerImages[1]} loading="lazy" />
        </Box>
        <Box
          gridArea={{ base: '3 / 3 / -1 / -1', md: '3 / 3 / 7 / 8' }}
          ml={'22px'}
          background={'#a26eb6'}
        />
      </Grid>

      <Box
        as="main"
        title={'Destaques'}
        px={{
          md: '1em'
        }}
        d={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
      >
        <Heading mb={2}>Destaques</Heading>
        <Grid
          as="ul"
          d={'grid'}
          gridColumnGap={2}
          gridRowGap={2}
          gridTemplateColumns={'repeat(auto-fill, minmax(250px, 1fr))'}
          listStyleType={'none'}
        >
          {products
            .slice(0, 12)
            .map(({ images: [image], title, priceRange }) => (
              <ListItem
                key={title}
                _hover={{ transform: 'scale(1.1)' }}
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
        </Grid>

        <Link
          as={GatsbyLink}
          to={SHIRTS_URL_PREFIX}
          borderColor={'black'}
          textAlign={'center'}
          p={2}
          fontWeight={'bold'}
          borderWidth={'2px'}
          w={'200px'}
          mx={'auto'}
          my={6}
        >
          QUERO VER MAIS
        </Link>
      </Box>

      <Divider />

      <Box as={'section'} p={2}>
        <Heading mb={4}>Categorias</Heading>
        <List
          d={'grid'}
          gridTemplateColumns={'repeat(auto-fill, minmax(250px, 1fr))'}
          gridColumnGap={4}
          gridRowGap={2}
          overflowX={'scroll'}
        >
          {categories.map(({ title, handle }) => (
            <ListItem bg={'gray.50'} h={'250px'}>
              <Link
                as={GatsbyLink}
                to={`${CATEGORY_URL_PREFIX}/${handle}`}
                d={'flex'}
                h={'100%'}
                w={'100%'}
                alignItems={'center'}
                justifyContent={'center'}
                fontWeight={'medium'}
              >
                {title}
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider />

      <Grid
        as={'article'}
        p={2}
        gridTemplateColumns={'auto 1fr'}
        gridTemplateRows={'auto 1fr'}
      >
        <Flex as={'section'} direction={'column'} gridArea={'1 / 2'} px={4}>
          <Heading mb={4}>Personalizamos sua ideia em camiseta!</Heading>
          <Text>
            Enim enim dolore occaecat nisi pariatur reprehenderit ipsum amet.
            Dolore adipisicing proident in dolor sint laboris anim occaecat do.
            Ipsum aliquip nulla occaecat eiusmod in cupidatat in id velit
            occaecat eiusmod nisi. Laborum minim elit sint veniam laborum
            laborum tempor reprehenderit duis. Tempor ipsum magna consectetur in
            irure tempor. Nostrud aliquip occaecat cupidatat est commodo
            officia. Qui qui qui commodo nulla.
          </Text>
        </Flex>

        <Img
          as={GatsbyImage}
          fluid={asideImages[1]}
          gridArea={'span 2 / 1'}
          width={'400px'}
          alt={'Como fazemos nossas camisetas!'}
        />

        <Link
          gridArea={'2 / 2'}
          isExternal
          d={'flex'}
          href={'https://wa.me/+5519984311890'}
          bg={'black'}
          borderColor={'black'}
          textAlign={'center'}
          p={2}
          fontWeight={'bold'}
          borderWidth={'2px'}
          alignItems={'center'}
          alignSelf={'center'}
          justifyContent={'center'}
          color={'white'}
          w={{
            base: '100%',
            md: '50%'
          }}
          h={'50px'}
          mx={'auto'}
          my={6}
        >
          <WhatsappWhiteIcon w={'30px'} h={'30px'} mr={2} />
          Entre em contato
        </Link>
      </Grid>

      {/* <Flex
        as="aside"
        direction={'column'}
        width={'100%'}
        maxWidth={'400px'}
        justifySelf={'center'}
      >
        <a
          {...{
            target: '_blank',
            rel: 'noopener noreferrer'
          }}
        >
          <FigureOverlayed
            image={{
              ...asideImages[1],
              alt: 'Como fazemos nossas estampas.'
            }}
            caption={{
              children: <></>
            }}
          />
        </a>

        <FigureOverlayed
          image={{
            ...asideImages[0],
            alt: 'Como fazemos nossas estampas.'
          }}
          caption={{
            children: ''
          }}
        />
      </Flex> */}
    </Grid>
  )
}
