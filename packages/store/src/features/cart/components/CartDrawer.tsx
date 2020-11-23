import React from 'react'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading
} from '@chakra-ui/react'
import { CartItem } from '../hooks/useCart'
import { CartItems } from './CartItems'
import { CheckoutButton } from '../../buy/components/ CheckoutButton'
import { groovyBorder } from '../../../components/styles/groovyBorder'

interface CartDrawerProps {
  items: CartItem[]
  onDeleteItem: (id: string) => Promise<void>
  checkoutUrl: string
  isOpen: boolean
  header?: string
  onClose: () => void
}

export const CartDrawer = ({
  items,
  onDeleteItem,
  checkoutUrl,
  header = 'Carrinho',
  isOpen,
  onClose
}: CartDrawerProps) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={'md'}>
      <DrawerOverlay />
      <DrawerContent py={'20px'}>
        <DrawerCloseButton />
        <DrawerHeader>
          <Heading>{header}</Heading>
        </DrawerHeader>

        <DrawerBody
          display={'flex'}
          flexDirection={'column'}
          justifyContent={{ base: 'space-between', lg: 'flex-start' }}
          overflowY={'scroll'}
        >
          <CartItems items={items} onDeleteItem={onDeleteItem} />
          {items.length !== 0 && (
            <Flex bottom={'100px'} width={'100%'} justifyContent={'center'}>
              <CheckoutButton width={'48%'} checkoutUrl={checkoutUrl}>
                Finalizar Compra!
              </CheckoutButton>
              <Button width={'48%'} ml={'3px'} onClick={onClose}>
                Continuar Comprando
              </Button>
            </Flex>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
