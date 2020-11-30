import { Box, BoxProps, Button } from '@chakra-ui/react'
import React from 'react'

export interface CheckoutButtonProps extends BoxProps {
  checkoutUrl: string
}

export const CheckoutButton = ({
  children,
  checkoutUrl,
  ...props
}: CheckoutButtonProps) => (
  <Box
    as="a"
    variant={'ghost'}
    bg={'black'}
    color={'white'}
    d={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
    fontWeight={'bold'}
    href={checkoutUrl}
    {...props}
  >
    {children}
  </Box>
)
