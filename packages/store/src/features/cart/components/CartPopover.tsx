import {
  Box,
  BoxProps,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger
} from '@chakra-ui/core'
import React from 'react'
import { CheckoutButton } from '../../buy/components/ CheckoutButton'
import { CartItem } from '../hooks/useCart'
import { CartItems } from './CartItems'

export interface CartPopoverStyle {
  items: CartItem[]
  checkoutUrl: string
  isOpen: boolean
  onClose: () => void
  rootStyle?: BoxProps
}

export const CartPopover = ({
  items,
  isOpen,
  checkoutUrl,
  onClose,
  rootStyle
}: CartPopoverStyle) => (
  <Popover
    isOpen={isOpen}
    onClose={onClose}
    closeOnBlur={process.env.NODE_ENV !== 'development'}
    closeOnEsc={true}
    usePortal
  >
    <PopoverTrigger>
      <Box {...rootStyle}></Box>
    </PopoverTrigger>
    <PopoverContent zIndex={2}  >
      <PopoverArrow />
      <PopoverCloseButton background={'rgba(256, 0, 0, 0.4)'} mt={'5px'} />
      <PopoverHeader color="black">Carrinho</PopoverHeader>
      <PopoverBody color="black" 
       width={'400px'} height={'200px'}
      >
        <CartItems items={items} />
        <CheckoutButton checkoutUrl={checkoutUrl}>Finalizar Compra!</CheckoutButton>
      </PopoverBody>
    </PopoverContent>
  </Popover>
)
