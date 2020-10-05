import React from 'react'
import { Box, BoxProps } from '@chakra-ui/core'

export const Main = ({ children, ...props }: BoxProps) => (
  <Box as="main" {...props}>
    {children}
  </Box>
)
