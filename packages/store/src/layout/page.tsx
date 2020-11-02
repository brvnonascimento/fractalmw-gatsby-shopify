import { Grid } from '@chakra-ui/core'
import { GatsbyBrowser } from 'gatsby'
import React from 'react'
import { Header } from './fragments/Header'
import '../styles/index.css'
import { Footer } from './fragments/Footer'

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
