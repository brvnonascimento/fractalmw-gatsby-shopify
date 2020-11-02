import React from 'react'
import { Image, ImageProps, Link } from '@chakra-ui/core'
import GatsbyLink from 'gatsby-link'

export const LogoLink = ({ ...props }: ImageProps) => (
  <Link as={GatsbyLink as any} {...{ to: '/' }} aria-label="Fractal Music Wear">
    <Image
      role="logo"
      alt="Fractal Music Wear Logo"
      src={'/logo.svg'}
      color={'red'}
      width="72px"
      height="72px"
      htmlHeight="72"
      htmlWidth="72"
      {...props}
    />
  </Link>
)
