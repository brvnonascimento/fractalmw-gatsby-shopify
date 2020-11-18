import { Grid, PseudoBox } from '@chakra-ui/core'
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
      width={'100vw'}
      overflow={'hidden'}
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
        bottom={{ xs: '90px', lg: '33px' }}
        left={{ xs: '8px', lg: '31px' }}
        zIndex={3}
        transition={'all .2s ease-in-out'}
        background={'white'}
        p="5px"
        rounded={'100%'}
        _hover={{
          transform: 'scale(1.3)'
        }}
        {...groovyBorder}
      >
        <WhatsappIcon />
      </PseudoBox>

      <Footer
        pb={{ xs: '5em', lg: 0 }}
        mb={{ xs: '5em', lg: 0 }}
        minHeight={{
          xs: '265px',
          lg: 'auto'
        }}
      />
    </Grid>
  )
}

export default page
