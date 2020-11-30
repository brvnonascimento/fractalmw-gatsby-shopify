import React from 'react'
import {
  BoxProps,
  Grid,
  Link,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  useDisclosure
} from '@chakra-ui/react'
import {
  useCartCount,
  useCheckoutUrl,
  useRemoveItemFromCart
} from 'gatsby-theme-shopify-manager'
import GatsbyLink from 'gatsby-link'
import { LogoIcon } from '../../components/icons/LogoIcon'
import { NavLinks } from './NavLinks'
import { ShirtIcon } from '../../components/icons/ShirtIcon'
import { ChevronDownIcon, InfoOutlineIcon, PhoneIcon } from '@chakra-ui/icons'
import { SearchBar } from '../../features/search/components/SearchBar'
import { CartButton } from '../../features/cart/components/CartButton'
import { CartDrawer } from '../../features/cart/components/CartDrawer'
import { useShopifyCartItems } from '../../features/cart/hooks/useShopifyCart'
import { useSearch } from '../../features/search/hooks/useSearch'
import { useStaticCategories } from '../../features/catalog/hooks/useStaticCategories'
import { toSlug } from '../../utils/toSlug'

export const Header = (props: BoxProps) => {
  const cartCount = useCartCount()
  const { isOpen, onClose, onToggle } = useDisclosure()
  const items = useShopifyCartItems()
  const checkoutUrl = useCheckoutUrl()
  const removeItemFromcart = useRemoveItemFromCart()
  const [handleSearch, { searchResults, loading, error }] = useSearch()
  const categories = useStaticCategories()

  return (
    <Grid
      as="header"
      fontWeight={'bold'}
      fontSize={'xl'}
      justifyItems={'center'}
      width={'100vw'}
      alignItems={'center'}
      display={'grid'}
      gridTemplateColumns={{
        base: '100px 1fr 100px',
        lg: '100px 0.5fr 0.25fr 0.25fr 100px'
      }}
      background={'black'}
      color={'white'}
      px={{ lg: '5px' }}
      py={'10px'}
      {...props}
    >
      <Link
        as={GatsbyLink}
        to={'/'}
        gridArea={'1 / 1'}
        alignSelf={'center'}
        title={'Home | Fractal Music Wear'}
      >
        <LogoIcon
          width={'72px'}
          height={'72px'}
          aria-label={'Fractal Music Wear Logo'}
        />
      </Link>

      <NavLinks
        zIndex={10}
        gridArea={{
          sm: '1 / span 2',
          md: '1 / 2'
        }}
        fontSize={{ base: 'sm', md: 'md' }}
        maxWidth={{ lg: '420px' }}
        links={[
          {
            title: '',
            to: '/camisetas/',
            style: {
              d: 'flex',
              justifyContent: 'center',
              px: '10px'
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
                  <ShirtIcon width={'1rem'} height={'1rem'} mr={2} />
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

                <MenuList color={'black'} zIndex={10}>
                  <MenuOptionGroup title="Categorias" type="checkbox">
                    {categories.map((category) => (
                      <MenuItemOption key={category}>
                        <Link
                          as={GatsbyLink}
                          to={`/camisetas/categoria/${toSlug(category)}`}
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
        loading={loading}
        my={'10px'}
        error={error}
        handleSearch={(search) => {
          handleSearch(5, search)
        }}
        searchResults={searchResults}
        width={{
          base: '100%',
          lg: '100%'
        }}
        gridArea={{
          base: '2 / 1 / 2 / 4',
          lg: '1 / span 2'
        }}
        justifySelf={'start'}
      >
        <></>
      </SearchBar>

      <CartButton
        gridArea={{ base: '1 / 3', lg: '1 / 5' }}
        count={cartCount}
        onClick={onToggle}
      />
      <CartDrawer
        items={items}
        onDeleteItem={removeItemFromcart}
        checkoutUrl={checkoutUrl ?? ''}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Grid>
  )
}
