import React from 'react'
import { Image, ImageProps } from '@chakra-ui/react'
import { groovyBorder } from './styles/groovyBorder'

export interface ShirtImageProps extends ImageProps {}

export const ShirtImage = ({ ...props }: ShirtImageProps) => (
  <Image loading={'lazy'} {...props} {...groovyBorder} />
)
