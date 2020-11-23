import React from 'react'
import { Box, BoxProps, Image, Text } from '@chakra-ui/react'
import { groovyBorder } from './styles/groovyBorder'
import GatsbyImage, { GatsbyImageFluidProps } from 'gatsby-image'

export interface FigureOverlayed {
  image: GatsbyImageFluidProps['fluid']
  gatsbyImage?: boolean
  caption: BoxProps
}

export const FigureOverlayed = ({
  image,
  gatsbyImage = true,
  caption,
  ...props
}: FigureOverlayed) => (
  <Box
    as="figure"
    my={'10px'}
    display={'grid'}
    gridTemplateColumns={'auto'}
    pr="10px"
    {...props}
  >
    {gatsbyImage ? (
      <Box
        as={GatsbyImage}
        gridArea={'1 / 1'}
        loading="lazy"
        fluid={image}
        alt={image.alt}
      />
    ) : (
      <Image
        loading="lazy"
        gridArea={'1 / 1'}
        {...groovyBorder}
        alt={image.alt}
        src={image.src}
      />
    )}

    <Text
      as="figcaption"
      gridArea={'1 / 1'}
      fontWeight={'bold'}
      zIndex={2}
      fontSize={'4xl'}
      px={'10px'}
      color={'white'}
      justifySelf={'center'}
      alignSelf={'center'}
      textAlign={'center'}
      textShadow={'1px 1px 27px black'}
      {...caption}
    >
      {caption?.children}
    </Text>
  </Box>
)
