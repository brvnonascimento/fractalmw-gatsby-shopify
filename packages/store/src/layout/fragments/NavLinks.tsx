import React, { ReactNode } from 'react'
import { Box, BoxProps, List, ListItem } from '@chakra-ui/core'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

interface NavLinksProps extends BoxProps {
  links: {
    title: string
    to: string
    icon?: ReactNode
    style?: BoxProps
  }[]
}

export const NavLinks = ({ children, links, ...props }: NavLinksProps) => (
  <Box
    as="nav"
    position={{
      xs: 'fixed',
      lg: 'relative'
    }}
    display={'flex'}
    bottom={0}
    background={{
      xs: 'rgba(0, 0, 0.5)',
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
    width={'100%'}
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
            i + 1 !== links.length ? { xs: '1px', md: 0 } : undefined
          }
          {...style}
        >
          {icon}
          <StyledLink to={to}>{title}</StyledLink>
        </ListItem>
      ))}
    </List>
  </Box>
)

const StyledLink = styled(Link)({
  paddingLeft: '5px'
})
