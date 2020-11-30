import React from 'react'
import { ButtonProps, IconButton } from '@chakra-ui/react'
import { CartIcon } from '../../../components/icons'

export interface CartButtonProps extends ButtonProps {
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
  <IconButton
    icon={<CartIcon h={'100%'} w={'100%'} />}
    variant={'ghost'}
    aria-label={'Carrinho'}
    _after={{
      content: `"${count}"`,
      background: 'rgba(256, 0, 0, 0.7)',
      position: 'absolute',
      fontWeight: 'medium',
      fontSize: 'lg',
      height: '25px',
      textAlign: 'center',
      width: '25px',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      lineHeight: '16px',
      top: '-5px',
      right: '-10px',
      padding: '5px',
      rounded: 'lg',
      color: 'white'
    }}
    _hover={{
      bg: 'none'
    }}
    _active={{
      bg: 'none'
    }}
    {...props}
  />
)
