import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

export const BoxContainer = ({ children, ...props }: BoxProps) => (
  <Box as={'section'} maxW={'1250px'} w={'100%'} {...props}>
    {children}
  </Box>
)
