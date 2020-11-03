import { Box, BoxProps, Link, ListItem, SimpleGrid } from '@chakra-ui/core'
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

export const Footer = memo(({ ...props }: BoxProps) => (
  <Box
    as="footer"
    backgroundColor={'#000000'}
    color="white"
    py={'1em'}
    height={'100%'}
    {...props}
  >
    <SimpleGrid
      as="ul"
      minChildWidth={'150px'}
      alignItems={'center'}
      justifyItems={'center'}
      height={'100%'}
      fontWeight={'bold'}
    >
      <LogoLink
        width={'120px'}
        height={'120px'}
        htmlHeight={'120'}
        htmlWidth={'120'}
        link={{
          gridColumn: {
            xs: 'span 4',
            lg: 'auto'
          }
        }}
      />
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
  </Box>
))
