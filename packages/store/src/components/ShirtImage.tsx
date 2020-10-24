import React from 'react'
import { Image, ImageProps } from '@chakra-ui/core'
import { groovyBorder } from './styles/groovyBorder'

export interface ShirtImageProps extends ImageProps {
  width: string
  height: string
}

export const ShirtImage = ({ width, height, ...props }: ShirtImageProps) => (
  <Image
    htmlWidth={width.replace('px', '')}
    htmlHeight={height.replace('px', '')}
    loading={'lazy'}
    {...props}
    {...groovyBorder}
  />
)
