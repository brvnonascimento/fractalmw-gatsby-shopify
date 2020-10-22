import {
  Box,
  Flex,
  FlexProps,
  IconButton,
  Spinner,
  Text
} from '@chakra-ui/core'
import React, { useState } from 'react'
import { ShirtImage } from '../../../components/ShirtImage'
import { numberToBRL } from '../../../utils/price'
import { CartItem } from '../hooks/useCart'

export interface CartItemsProps extends FlexProps {
  items: CartItem[]
  onDeleteItem: (id: string) => Promise<void>
  emptyCartMessage?: string
}

export const CartItems = ({
  items,
  onDeleteItem,
  emptyCartMessage = 'Não há itens no carrinho.',
  ...props
}: CartItemsProps) => {
  const [isDeletingItem, setIsDeletingItem] = useState(false)
  const isItemsEmpty = items.length === 0

  return (
    <Flex direction={'column'} justifyContent={'center'} {...props}>
      {!isItemsEmpty ? (
        items.map(({ image, title, price, quantity, id }) => (
          <Flex
            key={id}
            my="10px"
            width={'100%'}
            justifyContent={'space-around'}
          >
            <ShirtImage
              width={'30%'}
              src={image.src}
              fallbackSrc={image.fallbackSrc}
              alt={image.alt}
            />
            <Flex direction={'column'} width={'70%'} marginLeft={'10px'}>
              <Text fontWeight={'bold'} fontSize={'lg'}>
                {title}
              </Text>
              <Text fontWeight={'ligther'} fontSize={'lg'}>
                {numberToBRL(price * quantity)}
              </Text>
              <Text>
                <Box as="b" mr={'4px'}>
                  Quantidade:
                </Box>
                {quantity}
              </Text>
            </Flex>
            {!isDeletingItem ? (
              <IconButton
                onClick={async () => {
                  setIsDeletingItem(true)
                  await onDeleteItem(id)
                  setIsDeletingItem(false)
                }}
                width={'10px'}
                padding={'-10px'}
                background={'rgba(256, 0, 0, 0.6)'}
                color={'white'}
                variantColor="white"
                aria-label="Excluir item do carrinho"
                icon="delete"
              />
            ) : (
              <Spinner size='md' mx='10px' color="red.500" />
            )}
          </Flex>
        ))
      ) : (
        <Text as="span" fontWeight={'light'} my={'20px'}>
          {emptyCartMessage}
        </Text>
      )}
    </Flex>
  )
}