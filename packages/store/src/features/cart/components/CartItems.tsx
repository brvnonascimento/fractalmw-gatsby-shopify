import React, { useState } from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import { Box, Flex, FlexProps, IconButton, Text } from '@chakra-ui/react'
import { ShirtImage } from '../../../components/ShirtImage'
import { numberToBRL } from '../../../utils/price'

export interface CartItem {
  id: string
  title: string
  sku: string
  image: {
    src: string
    fallbackSrc: string
    alt: string
  }
  quantity: number
  price: number
  color: string
  size: string
  model: string
}

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
  const [deletingItem, setDeletingItem] = useState(-1)
  const isItemsEmpty = items.length === 0

  return (
    <Flex direction={'column'} justifyContent={'center'} {...props}>
      {!isItemsEmpty ? (
        items.map(
          ({ image, title, price, quantity, id, size, model, color }, i) => (
            <Flex
              key={id}
              my="10px"
              width={'100%'}
              justifyContent={'space-around'}
            >
              <ShirtImage
                height={'140px'}
                width={'140px'}
                htmlHeight={'140'}
                htmlWidth={'140'}
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

                {size && (
                  <Text>
                    <Box as="b" mr={'4px'}>
                      Tamanho:
                    </Box>
                    {size.toUpperCase()}
                  </Text>
                )}

                {model && (
                  <Text>
                    <Box as="b" mr={'4px'}>
                      Modelo:
                    </Box>
                    {model}
                  </Text>
                )}

                {color && (
                  <Text>
                    <Box as="b" mr={'4px'}>
                      Cor:
                    </Box>
                    {color}
                  </Text>
                )}
              </Flex>
              <Flex>
                <IconButton
                  isLoading={deletingItem === i}
                  icon={<DeleteIcon />}
                  onClick={async () => {
                    setDeletingItem(i)
                    await onDeleteItem(id)
                    setDeletingItem(-1)
                  }}
                  width={'10px'}
                  padding={'-10px'}
                  background={'rgba(256, 0, 0, 0.6)'}
                  color={'white'}
                  aria-label="Excluir item do carrinho"
                />
              </Flex>
            </Flex>
          )
        )
      ) : (
        <Text as="span" fontWeight={'light'} my={'20px'}>
          {emptyCartMessage}
        </Text>
      )}
    </Flex>
  )
}
