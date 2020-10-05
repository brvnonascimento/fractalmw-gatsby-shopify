import React from 'react'
import CartSvg from '../assets/cart.svg'
import { PseudoBox, PseudoBoxProps } from '@chakra-ui/core'

interface CartButtonProps extends PseudoBoxProps {
  iconWidth?: string
  fill?: string
}

export const CartButton = ({
  iconWidth = '64px',
  fill = 'white',
  ...props
}: CartButtonProps) => (
  <PseudoBox as="button" {...props}>
    <CartSvg width={'48px'} fill="white" />
  </PseudoBox>
)
