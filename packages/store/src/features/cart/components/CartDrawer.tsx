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
        <DrawerHeader
          d={'flex'}
          w={'100%'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
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
        <DrawerFooter
          d={'flex'}
          flexDir={{ base: 'column', md: 'row' }}
          justifyContent={'space-around'}
          p={2}
        >
          {items.length !== 0 && (
            <>
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
                d={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                w={{ base: '100%', md: '48%' }}
                h={'100%'}
                my={1}
                title={'Checkout'}
                variant={'ghost'}
                minH={'45px'}
                bg={'black'}
                color={'white'}
                fontWeight={'bold'}
              >
                <CheckIcon mr={2} />
                Finalizar Compra!
              </Link>

              <Button
                w={{ base: '100%', md: '48%' }}
                my={1}
                minH={'45px'}
                h={'100%'}
                ml={'3px'}
                onClick={onClose}
              >
                Continuar Comprando
              </Button>
            </>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
