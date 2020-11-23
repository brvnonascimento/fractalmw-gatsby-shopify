import React from 'react'
import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  ListItem,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import { useHomePageData } from '../hooks/home/useHomePageData'
import { CategoryList } from '../features/catalog/components/InlineCategoryList'
import { useStaticCategories } from '../features/catalog/hooks/useStaticCategories'
import { SEO } from '../components/SEO'
import { FigureOverlayed } from '../components/FigureOverlayed'
import GatsbyImage from 'gatsby-image'
import GatsbyLink from 'gatsby-link'
import { toSlug } from '../utils/toSlug'

export default () => {
  const { shirtList, bannerImages, asideImages } = useHomePageData()
  const categories = useStaticCategories()

  return (
    <Grid
      gridTemplateRows={'500px'}
      gridTemplateColumns={{ md: '1fr 400px' }}
      rowGap={'1em'}
    >
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
        gridArea={{ md: '1 / 1 / 3 / 3' }}
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
          <Image
            src="/branding.svg"
            alt={'Fractal Music Wear'}
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
          {...{ to: '/categoria/camisetas/camisetas-psicodelicas/' }}
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
        shirtProps={{
          htmlHeight: '280',
          htmlWidth: '280'
        }}
        shirts={shirtList}
        px={{
          md: '1em'
        }}
      >
        <Heading>Destaques</Heading>
        <SimpleGrid
          as="ul"
          columns={{ base: '1', sm: '2', md: '3', xl: '4' }}
          listStyleType={'none'}
          display={'grid'}
          spacing={2}
        >
          {shirtList.map(({ images: [image], title }) => (
            <ListItem
              key={title}
              _hover={{ transform: 'scale(1.1)' }}
              transition={'all .2s ease-in-out'}
              background={'white'}
            >
              <Link
                as={GatsbyLink as any}
                {...{ to: `/produto/${toSlug(title)}` }}
                display={'grid'}
                gridTemplateColumns={'1fr'}
              >
                <Box
                  as="figure"
                  my={'10px'}
                  gridTemplateColumns={'auto'}
                  pr="10px"
                >
                  <GatsbyImage
                    loading="lazy"
                    fluid={image}
                    alt={image.altText}
                  />

                  <Text
                    as="figcaption"
                    display={'flex'}
                    justifyContent={'space-between'}
                    fontWeight={'bold'}
                    zIndex={2}
                    fontSize={'sm'}
                    px={'10px'}
                  >
                    {title}
                    {/* <Badge
                      height={'20px'}
                      variant={'outline'}
                      color={'#2e1d3e'}
                      borderRadius={'4px'}
                    >
                      {numberToBRL(
                        parseFloat(priceRange.minVariantPrice.amount)
                      )}
                    </Badge> */}
                  </Text>
                </Box>
              </Link>
            </ListItem>
          ))}
        </SimpleGrid>
      </Box>

      <Flex
        as="aside"
        direction={'column'}
        gridColumn={{ md: '2' }}
        width={'100%'}
        maxWidth={'400px'}
        justifySelf={'center'}
      >
        <CategoryList categories={categories} />

        <a
          {...{
            href: 'https://wa.me/+5519984311890',
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
              children: (
                <>Personalizamos sua ideia em camisetas, entre em contato!</>
              )
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
      </Flex>
    </Grid>
  )
}
