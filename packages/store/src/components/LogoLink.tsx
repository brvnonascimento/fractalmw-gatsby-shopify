import React from 'react'
import { Image, ImageProps, Link, LinkProps } from '@chakra-ui/core'
import GatsbyLink from 'gatsby-link'

export interface LogoLink {
  link: LinkProps
  image: ImageProps
}

export const LogoLink = ({ link, ...image }: LogoLink) => (
  <Link as={GatsbyLink as any} {...{ to: '/' }} aria-label="Fractal Music Wear" {...link}>
    <Image
      role="logo"
      alt="Fractal Music Wear Logo"
      src={'/logo.svg'}
      color={'red'}
      width="72px"
      height="72px"
      htmlHeight="72"
      htmlWidth="72"
      {...image}
    />
  </Link>
)
