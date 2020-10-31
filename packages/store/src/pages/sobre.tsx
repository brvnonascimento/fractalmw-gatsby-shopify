import { Box, Grid, Heading, Image, Text } from '@chakra-ui/core'
import React from 'react'
import { HeadingDivider } from '../components/HeadingDivider'

export default () => (
  <Grid as="main" maxWidth={'926px'} justifySelf={'center'}>
    <Image src="/about-us-banner.png" htmlHeight={'174'} htmlWidth={'926'} />
    <Grid as="section" gridTemplateRows={'auto'} my="2em" px="2em">
      <Heading as="h1">SOBRE NÓS</Heading>
      <Text>
        A Fractal Music Wear, que está no mercado desde 2007, é um espaço
        multidimensional, onde diversas tendências musicais e de moda se
        encontram e se fundem, fazendo uma loja única. <br />
        <br />
        A Fractal foi criadora do conceito de loja Music Wear, local que não
        vende apenas camisetas de bandas, mas sim roupas e acessórios que tem a
        música como principal tema. <br />
        <br />
        Nossa loja física está situada em Piracicaba, interior de São Paulo e
        funciona de segunda a sexta das 10h às 19h e aos sábados das 9:30h as
        14h. Além de uma bem sucedida linha própria de camisetas, a Fractal
        Music Wear trabalha com marcas modernas e conceituadas, que vestem bem
        qualquer idade.
      </Text>
    </Grid>
    <Grid
      as="section"
      gridTemplateRows={'1fr 48px'}
      gridTemplateColumns={'100px 1fr'}
      columnGap={'1.5em'}
      my="20px"
    >
      <Heading gridArea={'1 / 1 / 3 / 3'}>
        “Fractal Music Wear, <br />
        vista-se de cultura
        <br /> e arte.”
      </Heading>
      <HeadingDivider gridArea={'2 / 2'} />
    </Grid>
    <Box as="figure">
      <Image
        src="/about-us.png"
        htmlHeight={'468'}
        htmlWidth={'926'}
        alt="Telminha e Sidão, fundadores da Fractal Music Wear"
      />
      <Text as='figcaption' fontWeight={'bold'}>Telminha e Sidão, fundadores da Fractal Music Wear</Text>
    </Box>
  </Grid>
)
