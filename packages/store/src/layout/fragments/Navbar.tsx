import {
  BoxProps,
  Icon,
  ImageProps,
  useDisclosure
} from '@chakra-ui/core'
import React from 'react'
import {
  CartButton,
  CartButtonProps
} from '../../features/cart/components/CartButton'
import { NavLinks } from './NavLinks'
import { SearchBar } from '../../features/search/components/SearchBar'
import {
  useCartCount,
  useCheckoutUrl,
  useRemoveItemFromCart
} from 'gatsby-theme-shopify-manager'
import { useShopifyCartItems } from '../../features/cart/hooks/useShopifyCart'
import { CartDrawer } from '../../features/cart/components/CartDrawer'
import { useSearch } from '../../features/search/hooks/useSearch'
import { LogoLink } from '../../components/LogoLink'
import ShirtIcon from '../../assets/shirt.svg'

export interface NavbarProps {
  logoStyle?: ImageProps
  navStyle?: BoxProps
  cartRootProps?: BoxProps
  cartButtonProps: CartButtonProps
  searchBarStyle?: BoxProps
}

export const Navbar = ({
  cartButtonProps,
  logoStyle,
  navStyle,
  searchBarStyle
}: NavbarProps) => {
  const { isOpen, onClose, onToggle } = useDisclosure(false)
  const items = useShopifyCartItems()
  const cartCount = useCartCount()
  const checkoutUrl = useCheckoutUrl()
  const removeItemFromcart = useRemoveItemFromCart()
  const [handleSearch, { searchResults, loading, error }] = useSearch()

  return (
    <>
      <LogoLink {...logoStyle} />

      <NavLinks
        {...navStyle}
        zIndex={10}
        links={[
          {
            title: 'Camisetas',
            to: '/camisetas/',
            icon: <ShirtIcon width='20px' height='20px' />
          },
          {
            title: 'Contato',
            to: '/contato',
            icon: <Icon name="phone" />,
            style: {
              opacity: 0.8
            }
          },
          {
            title: 'Sobre',
            to: '/sobre',
            icon: <Icon name="info-outline" />,
            style: {
              opacity: 0.8
            }
          }
        ]}
      />

      <SearchBar
        width={'100%'}
        loading={loading}
        my={'10px'}
        error={error}
        handleSearch={(search) => {
          handleSearch(5, search)
        }}
        searchResults={searchResults}
        {...searchBarStyle}
      >
        <></>
      </SearchBar>

      <CartButton {...cartButtonProps} count={cartCount} onClick={onToggle} />
      <CartDrawer
        items={items}
        onDeleteItem={removeItemFromcart}
        checkoutUrl={checkoutUrl as string}
        isOpen={isOpen}
        onClose={onClose}
      />
      {/* <CartPopover
        checkoutUrl={checkoutUrl}
        items={items}
        isOpen={isOpen}
        onClose={onClose}
        rootStyle={cartButtonProps}
      /> */}
    </>
  )
}
