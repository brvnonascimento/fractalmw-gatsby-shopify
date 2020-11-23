import React, { ReactNode } from 'react'
import { Box, BoxProps, List, ListItem, Link, ListItemProps } from '@chakra-ui/react'
import GatsbyLink from 'gatsby-link'

interface NavLinksProps extends BoxProps {
  links: {
    title: string
    to: string
    icon?: ReactNode
    style?: ListItemProps
  }[]
}

export const NavLinks = ({ children, links, ...props }: NavLinksProps) => (
  <Box
    as="nav"
    position={{
      base: 'fixed',
      lg: 'relative'
    }}
    display={'flex'}
    bottom={0}
    left={0}
    background={{
      base: 'rgba(0, 0, 0.5)',
      lg: 'transparent'
    }}
    backgroundImage={'url(watermark.png)'}
    backgroundSize={'800px'}
    height={{
      base: '70px',
      lg: 'auto'
    }}
    justifyContent={'center'}
    alignItems={'center'}
    width={'100%'}
    fontWeight={'medium'}
    {...props}
  >
    <List
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      width={'100%'}
    >
      {links.map(({ title, to, icon, style }, i) => (
        <ListItem
          key={title}
          display="flex"
          justifyContent={'center'}
          alignItems={'center'}
          width={'100%'}
          height={'100%'}
          borderRight={
            i + 1 !== links.length ? { base: '1px', md: 0 } : undefined
          }
          {...style}
        >
          {icon}
          <Link as={GatsbyLink} to={to} pl={'5px'}>{title}</Link>
        </ListItem>
      ))}
    </List>
  </Box>
)