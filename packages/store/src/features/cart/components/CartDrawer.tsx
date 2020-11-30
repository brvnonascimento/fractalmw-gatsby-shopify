import React from 'react'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Link
} from '@chakra-ui/react'
import { CartItem } from '../hooks/useCart'
import { CartItems } from './CartItems'
import { CheckIcon } from '@chakra-ui/icons'

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
        <DrawerHeader d={'flex'} w={'100%'} justifyContent={'space-between'}>
          <Heading>{header}</Heading>
          <DrawerCloseButton mr={'12px'} />
        </DrawerHeader>

        <DrawerBody
          display={'flex'}
          flexDirection={'column'}
          justifyContent={{ base: 'space-between', lg: 'flex-start' }}
          overflowY={'scroll'}
        >
          <CartItems items={items} onDeleteItem={onDeleteItem} />
        </DrawerBody>
        <DrawerFooter>
          {items.length !== 0 && (
            <Flex bottom={'100px'} width={'100%'} justifyContent={'center'}>
              <Link
                href={
                  process.env.GATSBY_CHECKOUT_SUBDOMAIN &&
                  process.env.GATSBY_SHOPIFY_SHOPNAME
                    ? checkoutUrl.replace(
                        `${process.env.GATSBY_SHOPIFY_SHOPNAME}.myshopify.com`,
                        process.env.GATSBY_CHECKOUT_SUBDOMAIN
                      )
                    : checkoutUrl
                }
                title={'Checkout'}
                variant={'ghost'}
                w={'48%'}
                bg={'black'}
                color={'white'}
                d={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                fontWeight={'bold'}
              >
                <CheckIcon mr={2} />
                Finalizar Compra!
              </Link>

              <Button width={'48%'} ml={'3px'} onClick={onClose}>
                Continuar Comprando
              </Button>
            </Flex>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
