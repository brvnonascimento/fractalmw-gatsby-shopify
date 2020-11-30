import { Box, Link } from '@chakra-ui/react'
import { GatsbyBrowser } from 'gatsby'
import React from 'react'
import { Header } from './fragments/Header'
import { Footer } from './fragments/Footer'
import { WhatsappIcon } from '../components/icons/WhatsappIcon'

const page: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return (
    <Box minHeight={'100vh'} maxW={'100vw'} w={'100vw'} overflowX={'hidden'} rowGap={'1em'}>
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
        right={{ base: '8px', lg: '31px' }}
        zIndex={3}
        transition={'all .2s ease-in-out'}
        bg={'white'}
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

      <Footer position={'relative'} zIndex={4} />
    </Box>
  )
}

export default page
