import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

export const Main = ({ children, ...props }: BoxProps) => (
  <Box as="main" {...props}>
    {children}
  </Box>
)
