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
    {...{ href: checkoutUrl, target: '_blank', rel: 'noopener noreferrer' }}
    {...props}
  >
    <Button
      width={'100%'}
      color={'black'}
      background={'rgba(0, 256, 0, 0.7)'}
    >
      {children}
    </Button>
  </Box>
)
