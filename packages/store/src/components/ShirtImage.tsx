import React from 'react'
import { Image, ImageProps } from '@chakra-ui/core'
import { groovyBorder } from './styles/groovyBorder'

export const ShirtImage = ({ ...props }: ImageProps) => <Image loading={'lazy'} {...props} {...groovyBorder} />
