import {
  BoxProps,
  Icon,
  ImageProps,
  Link,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  useDisclosure
} from '@chakra-ui/react'
import { InfoOutlineIcon, PhoneIcon } from '@chakra-ui/icons'
import { ChevronDownIcon } from '@chakra-ui/icons'
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
import { groovyBorder } from '../../components/styles/groovyBorder'
import GatsbyLink from 'gatsby-link'
import { toSlug } from '../../utils/toSlug'
import { useStaticCategories } from '../../features/catalog/hooks/useStaticCategories'

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
  const categories = useStaticCategories()

  return (
    <>
      <LogoLink {...logoStyle} />

      <NavLinks
        {...navStyle}
        zIndex={10}
        fontSize={'lg'}
        maxWidth={{ lg: '420px' }}
        links={[
          {
            title: '',
            to: '/camisetas/',
            style: {
              d: 'flex',
              justifyContent: 'space-around',
            },
            icon: (
              <Menu>
                <Link
                  as={GatsbyLink}
                  to={'/camisetas'}
                  d={'flex'}
                  alignItems={'center'}
                  justifyContent={'space-around'}
                >
                  <ShirtIcon width={'20px'} height={'20px'} pr={2} />
                  Camisetas
                </Link>
                <MenuButton
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'space-around'}
                  transition="all 0.2s"
                >
                  <ChevronDownIcon size={'30px'} />
                </MenuButton>

                <MenuList color={'black'} zIndex={10} {...groovyBorder}>
                  <MenuOptionGroup title="Categorias" type="checkbox">
                    {categories.map((category) => (
                      <MenuItemOption key={category}>
                        <Link
                          as={GatsbyLink as any}
                          {...{
                            to: `/categoria/camisetas/${toSlug(category)}`
                          }}
                        >
                          {category}
                        </Link>
                      </MenuItemOption>
                    ))}
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            )
          },
          {
            title: 'Contato',
            to: '/contato',
            icon: <PhoneIcon />,
            style: {
              opacity: 0.8
            }
          },
          {
            title: 'Sobre',
            to: '/sobre',
            icon: <InfoOutlineIcon />,
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
