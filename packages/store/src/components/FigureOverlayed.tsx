import React from 'react'
import { Box, BoxProps, Image, ImageProps, Text } from '@chakra-ui/core'
import { groovyBorder } from './styles/groovyBorder'

export interface FigureOverlayed {
  image: ImageProps
  caption: BoxProps
}

export const FigureOverlayed = ({
  image,
  caption,
  ...props
}: FigureOverlayed) => (
  <Box
    as="figure"
    my={'10px'}
    display={'grid'}
    gridTemplateColumns={'auto'}
    {...props}
  >
    <Image
      gridArea={'1 / 1'}
      justifySelf={'center'}
      loading="lazy"
      {...groovyBorder}
      {...image}
    />

    <Text
      as="figcaption"
      gridArea={'1 / 1'}
      fontWeight={'bold'}
      zIndex={2}
      fontSize={'4xl'}
      color={'white'}
      justifySelf={'center'}
      alignSelf={'center'}
      textShadow={'1px 1px 27px black'}
      {...caption}
    >
      {caption?.children}
    </Text>
  </Box>
)
