import { Box, Grid, Heading, Img, Text } from '@chakra-ui/react'
import { useStaticQuery, graphql } from 'gatsby'
import GatsbyImage from 'gatsby-image'
import React from 'react'
import { HeadingDivider } from '../components/HeadingDivider'

export default () => {
  const {
    bannerFile: {
      childImageSharp: { banner1 }
    },
    bannerFile2: {
      childImageSharp: { banner2 }
    }
  } = useStaticQuery(graphql`
    query AboutUsQuery {
      bannerFile: file(name: { eq: "about-us-banner" }) {
        childImageSharp {
          banner1: fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bannerFile2: file(name: { eq: "about-us" }) {
        childImageSharp {
          banner2: fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Grid as="main" w={'100vw'} justifySelf={'center'}>
      <Img
        as={GatsbyImage}
        h={'200px'}
        fluid={banner1}
        alt={'Nosso espaco na Fractal Music Wear'}
      />
      {/* <Image src="/about-us-banner.png" htmlHeight={'174'} htmlWidth={'926'} /> */}
      <Grid
        as="section"
        gridTemplateRows={'auto'}
        my="2em"
        px="2em"
        justifySelf={'center'}
        w={'100%'}
        gridRowGap={2}
      >
        <Heading as="h1">SOBRE NÓS</Heading>
        <Text maxW={"1000px"}>
          A Fractal Music Wear, que está no mercado desde 2007, é um espaço
          multidimensional, onde diversas tendências musicais e de moda se
          encontram e se fundem, fazendo uma loja única. <br />
          <br />
          A Fractal foi criadora do conceito de loja Music Wear, local que não
          vende apenas camisetas de bandas, mas sim roupas e acessórios que tem
          a música como principal tema. <br />
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
        <Img
          as={GatsbyImage}
          fluid={banner2}
          alt="Telminha e Sidão, fundadores da Fractal Music Wear"
        />
        <Text as="figcaption" fontWeight={'bold'}>
          Telminha e Sidão, fundadores da Fractal Music Wear
        </Text>
      </Box>
    </Grid>
  )
}
