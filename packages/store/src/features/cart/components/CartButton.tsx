import React from 'react'
import CartSvg from '../../../assets/cart.svg'
import { PseudoBox, PseudoBoxProps, Text } from '@chakra-ui/core'

export interface CartButtonProps extends PseudoBoxProps {
  iconWidth?: string
  fill?: string
  count: number
}

export const CartButton = ({
  iconWidth = '64px',
  fill = 'white',
  count,
  ...props
}: CartButtonProps) => (
  <PseudoBox as="button" {...props}>
    <CartSvg width={'48px'} height={'48px'} fill="white" />
    <Text
      as="span"
      color="white"
      background={'rgba(256, 0, 0, 0.7)'}
      position={'absolute'}
      height={'25px'}
      textAlign={'center'}
      width={'25px'}
      display={'flex'}
      justifyContent={'center'}
      alignContent={'center'}
      lineHeight={'16px'}
      top={'12px'}
      right={'22px'}
      padding={'5px'}
      rounded={'lg'}
    >
      {count}
    </Text>
  </PseudoBox>
)
