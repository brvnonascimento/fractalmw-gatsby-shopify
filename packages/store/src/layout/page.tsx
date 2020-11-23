import { Box, Grid, Link } from '@chakra-ui/react'
import { GatsbyBrowser } from 'gatsby'
import React from 'react'
import { Header } from './fragments/Header'
import '../styles/index.css'
import { Footer } from './fragments/Footer'
import WhatsappIcon from '../assets/whatsapp.svg'

const page: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return (
    <Box
      minHeight={'100vh'}
      maxW={'100vw'}
      overflowX={'hidden'}
      rowGap={'1em'}
    >
      <Header />

      {element}

      <Link
        as="a"
        title={'Fale conosco no Whatsapp!'}
        isExternal
        href={'https://wa.me/+5519984311890'}
        position={'fixed'}
        width={{
          base: '48px',
          md: '64px'
        }}
        bottom={{ base: '90px', lg: '33px' }}
        left={{ base: '8px', lg: '31px' }}
        zIndex={3}
        transition={'all .2s ease-in-out'}
        background={'white'}
        p="5px"
        rounded={'100%'}
        _hover={{
          transform: 'scale(1.3)'
        }}
        _focus={{
          transform: 'scale(1.3)'
        }}
        boxShadow={'md'}
      >
        <WhatsappIcon />
      </Link>

      <Footer
        pb={{ base: '5em', lg: 0 }}
        mb={{ base: '5em', lg: 0 }}
        minHeight={{
          base: '265px',
          lg: 'auto'
        }}
      />
    </Box>
  )
}

export default page
