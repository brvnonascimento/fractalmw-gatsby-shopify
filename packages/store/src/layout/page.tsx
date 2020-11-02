import { Box, Grid, PseudoBox } from '@chakra-ui/core'
import { GatsbyBrowser } from 'gatsby'
import React from 'react'
import { Header } from './fragments/Header'
import '../styles/index.css'
import { Footer } from './fragments/Footer'
import WhatsappIcon from '../assets/whatsapp.svg'
import { groovyBorder } from '../components/styles/groovyBorder'

const page: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return (
    <Grid
      minHeight={'100vh'}
      maxWidth={'100vw'}
      overflowX={'hidden'}
      rowGap={'1em'}
    >
      <Header />

      {element}

      <PseudoBox
        as="a"
        {...{
          href: 'https://wa.me/+5519984311890',
          target: '_blank',
          rel: 'noopener noreferrer'
        }}
        position={'fixed'}
        width={'75px'}
        bottom={'33px'}
        left={'31px'}
        zIndex={10}
        transition={'all .2s ease-in-out'}
        background={'white'}
        p='5px'
        rounded={'100%'}
        _hover={{
          transform: 'scale(1.3)'
        }}
        {...groovyBorder}
      >
        <WhatsappIcon />
      </PseudoBox>

      <Footer />
    </Grid>
  )
}

export default page
{
  /* <Header gridArea={'1 / 1 / 3 / -1'}>
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
      </Header> */
}
