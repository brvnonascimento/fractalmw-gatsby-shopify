import React from 'react'
import { Box, BoxProps, List, ListItem } from '@chakra-ui/core'
import { Link } from 'gatsby'

export const Nav = ({ children, ...props }: BoxProps) => (
  <Box
    as="nav"
    position={{
      xs: 'fixed',
      lg: 'relative'
    }}
    display={'flex'}
    padding={'10px'}
    bottom={{
      xs: '10px',
      lg: 0
    }}
    borderRadius={'10px'}
    background={{
      xs: 'rgba(73,79,94,1)',
      lg: 'transparent'
    }}
    backgroundImage={{
      xs: 'url(watermark.png)',
      lg: undefined
    }}
    backgroundSize={'800px'}
    height={{
      xs: '70px',
      lg: 'auto'
    }}
    alignItems={'center'}
    width={{
      xs: '95%',
      lg: '100%'
    }}
    {...props}
  >
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
        borderRight={{ xs: '1px', md: 0 }}
      >
        <Link to="/camisetas">Camisetas</Link>
      </ListItem>
      <ListItem
        display="flex"
        justifyContent={'center'}
        width={'100%'}
        borderRight={{ xs: '1px', md: 0 }}
      >
        <Link to="/camisetas">Contato</Link>
      </ListItem>
      <ListItem display="flex" width={'100%'} justifyContent={'center'}>
        <Link to="/camisetas">Sobre</Link>
      </ListItem>
    </List>
  </Box>
)
