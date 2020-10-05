import React from 'react'
import { Box, BoxProps, List, ListItem } from '@chakra-ui/core'
import { Link } from 'gatsby'

export const Nav = ({ children, ...props }: BoxProps) => (
  <Box as="nav" {...props}>
    <List
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      width={'100%'}
    >
      <ListItem
        display="flex"
        justifyContent={'center'}
        width={'100%'}
        height={'100%'}
        borderRight={{xs: '1px', md: 0}}
      >
        <Link to="/camisetas">Camisetas</Link>
      </ListItem>
      <ListItem
        display="flex"
        justifyContent={'center'}
        width={'100%'}
        borderRight={{xs: '1px', md: 0}}
      >
        <Link to="/camisetas">Contato</Link>
      </ListItem>
      <ListItem
        display="flex"
        width={'100%'}
        justifyContent={'center'}
      >
        <Link to="/camisetas">Sobre</Link>
      </ListItem>
    </List>
  </Box>
)
