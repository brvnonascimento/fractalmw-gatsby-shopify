import React from 'react'
import { Header } from '../components/Header'
import { Box, Grid, Heading, Image, Text } from '@chakra-ui/core'
import { CompanyHeading } from '../components/home/CompanyHeading'
import { HomePageLayout } from '../layouts/HomePageLayout'
import { InlineCategoryList } from '../components/InlineCategortyList'
import {
  ShirtInlineList,
} from '../components/InlineShirtList'
import { useHomePageData } from '../hooks/home/useHomePageData'

export default () => {
  const {shirtList, categoryList} = useHomePageData()

  return (
    <HomePageLayout>
      <Header withBackground gridArea={'1 / 1 / 3 / -1'}>
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

      <Grid
        as="main"
        gridArea={'3 / 1 / 6 / 1'}
        gridTemplateRows={'50px auto auto'}
        paddingX={'20px'}
      >
        <Heading>Categorias</Heading>
        <InlineCategoryList categories={categoryList} />
        <Grid as="section" zIndex={2} role={'listbox'} marginTop={'30px'}>
          <Heading>Destaques</Heading>
          <ShirtInlineList
            shirts={shirtList}
          />
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
