import { BoxProps, Divider } from '@chakra-ui/react'
import React from 'react'

export const HeadingDivider = ({ ...props }: BoxProps) => (
  <Divider
    my={0}
    alignSelf={'center'}
    opacity={1}
    borderColor={'black'}
    background={'black'}
    borderWidth={'5px'}
    {...props}
  />
)
