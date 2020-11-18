import {
  Grid,
  GridProps,
  Heading,
  Image,
  Link,
  ListItem,
  SimpleGrid
} from '@chakra-ui/core'
import GatsbyLink from 'gatsby-link'
import React, { memo } from 'react'
import { LogoLink } from '../../components/LogoLink'

const links = [
  {
    to: '/politica-de-privacidade',
    name: 'Política de Privacidade'
  },
  {
    to: '/politica-de-troca',
    name: 'Política de Troca'
  },
  {
    to: '/contato',
    name: 'Contato'
  },
  {
    to: '/sobre',
    name: 'Sobre'
  }
]

export const Footer = memo(({ ...props }: GridProps) => (
  <Grid
    as="footer"
    display={'grid'}
    gridTemplateColumns={{
      lg: '120px 250px 1fr'
    }}
    alignItems={'center'}
    columnGap={'2em'}
    backgroundColor={'#000000'}
    color="white"
    px={'1em'}
    py={'2em'}
    height={'100%'}
    {...props}
  >
    <LogoLink
      width={'120px'}
      height={'120px'}
      htmlHeight={'120'}
      htmlWidth={'120'}
      link={{
        gridColumn: {
          xs: '1 / -1',
          lg: 'auto'
        },
        display: 'flex',
        justifyContent: 'center'
      }}
    />
    <Grid
      as="ul"
      gridTemplateColumns={{
        xs: 'repeat(3, 32vw)',
        lg: 'repeat(4, auto)'
      }}
      columnGap={'10px'}
      rowGap={'1em'}
      alignItems={'center'}
      justifyItems={'center'}
    >
      <Heading fontSize={'xs'} gridColumn={{ xs: '1 / -1', lg: 'unset' }}>
        #FRACTALNASREDES
      </Heading>

      <ListItem>
        <Link
          isExternal
          href="https://www.instagram.com/fractalmusicwear/"
          title={'Nos siga no Instagram'}
        >
          <Image src={'/instagram.svg'} htmlWidth={'48'} htmlHeight={'48'} />
        </Link>
      </ListItem>

      <ListItem>
        <Link
          isExternal
          href="https://www.facebook.com/fractalmusicwear/"
          title={'Nos siga no Facebook!'}
        >
          <Image src={'/facebook.svg'} htmlWidth={'48'} htmlHeight={'48'} />
        </Link>
      </ListItem>

      <ListItem>
        <Link
          isExternal
          href="https://www.youtube.com/channel/UCzZe0jWKtNNO17V2aR9kMxQ"
          title={'Nos assista no Youtube!'}
        >
          <Image src={'/youtube.svg'} htmlWidth={'48'} htmlHeight={'48'} />
        </Link>
      </ListItem>
    </Grid>

    <SimpleGrid
      as="ul"
      fontSize={'xs'}
      minChildWidth={'100px'}
      alignItems={'center'}
      justifyItems={'center'}
      height={'100%'}
      fontWeight={'bold'}
    >
      {links.map(({ to, name }) => (
        <ListItem
          gridColumn={{
            xs: 'span 4',
            lg: 'auto'
          }}
        >
          <Link as={GatsbyLink as any} {...{ to }} height={'100%'}>
            {name}
          </Link>
        </ListItem>
      ))}
    </SimpleGrid>
  </Grid>
))
