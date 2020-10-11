import { BoxProps, Image, ImageProps } from '@chakra-ui/core'
import React from 'react'
import { CartButton, CartButtonProps } from './CartButton'
import { Nav } from './Nav'
import { SearchBar } from './SearchBar'

<<<<<<< HEAD
export interface NavbarProps {
=======
interface NavbarProps {
>>>>>>> 0e100fee3ba849eb71507b81c537823817c6b5b1
  logoStyle?: ImageProps
  navStyle?: BoxProps
  searchBarStyle?: BoxProps
  cartButtonStyle?: CartButtonProps
}

export const Navbar = ({
  cartButtonStyle,
  logoStyle,
  navStyle,
  searchBarStyle
}: NavbarProps) => (
  <>
    <Image role="logo" src={'/logo.png'} width="72px" {...logoStyle} />

    <Nav {...navStyle} />

    <SearchBar width={'90%'} {...searchBarStyle}>
      <></>
    </SearchBar>

    <CartButton {...cartButtonStyle} />
  </>
)
