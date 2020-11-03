import React from 'react'
import { BoxProps, Grid } from '@chakra-ui/core'
import { Navbar, NavbarProps } from './Navbar'
import { useCartCount } from 'gatsby-theme-shopify-manager'

interface HeaderProps extends BoxProps {
  withBackground?: boolean
  navbarStyles?: NavbarProps
}

const headerBackground: BoxProps = {
  backgroundRepeat: 'repeat-x, repeat',
  backgroundPosition: 'right center, left bottom',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='350px' viewBox='0 0 1300 180' filter='url(%23f1)'%3E%3Cdefs%3E%3Cfilter id='f1' x='0' y='0' width='1px' height='1px'%3E%3CfeColorMatrix result='matrixOut' type='matrix' values='0.78 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 ' /%3E%3CfeOffset result='offOut' in='SourceGraphic' dx='20' dy='20' /%3E%3CfeGaussianBlur result='blurOut' in='matrixOut' stdDeviation='7' /%3E%3CfeBlend in='SourceGraphic' in2='blurOut' mode='normal' /%3E%3C/filter%3E%3C/defs%3E%3Cpath fill='%23ffff' fill-opacity='1' d='M0,32L30,64C60,96,120,160,180,160C240,160,300,96,360,64C420,32,480,32,540,58.7C600,85,660,139,720,133.3C780,128,840,64,900,53.3C960,43,1020,85,1080,90.7C1140,96,1200,64,1260,53.3C1320,43,1380,53,1410,58.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z, 160C240,160,300,96,360,64C420,32,480,32,540,58.7C600,85,660,139,720,133.3C780,128,840,64,900,53.3C960,43,1020,85,1080,90.7C1140,96,1200,64,1260,53.3C1320,43,1380,53,1410,58.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z, 160C240,160,300,96,360,64C420,32,480,32,540,58.7C600,85,660,139,720,133.3C780,128,840,64,900,53.3C960,43,1020,85,1080,90.7C1140,96,1200,64,1260,53.3C1320,43,1380,53,1410,58.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z, 160C240,160,300,96,360,64C420,32,480,32,540,58.7C600,85,660,139,720,133.3C780,128,840,64,900,53.3C960,43,1020,85,1080,90.7C1140,96,1200,64,1260,53.3C1320,43,1380,53,1410,58.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z'%3E%3C/path%3E%3C/svg%3E"), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E")`
}

export const Header = ({
  children,
  withBackground,
  navbarStyles,
  ...props
}: HeaderProps) => {
  const cartCount = useCartCount()

  return (
    <Grid
      as="header"
      fontWeight={'bold'}
      fontSize={'xl'}
      justifyItems={'center'}
      alignItems={'center'}
      color={'white'}
      display={'grid'}
      gridTemplateColumns={{
        xs: '100px 1fr 100px',
        lg: '100px 0.5fr 0.25fr 0.25fr 100px'
      }}
      backgroundColor={'#000000'}
      backgroundImage={'linear-gradient(-300deg, #000000 0%, rgba(0, 0, 0, 0.1) 70%)'}
      boxShadow={'0.5px 0.5px 3px #000000'}
      p={{lg: '5px'}}
      // backgroundColor={'#373E4D'}
      // backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E")`}
      {...(withBackground ? headerBackground : null)}
      {...props}
    >
      <Navbar
        logoStyle={{
          gridArea: '1 / 1',
          alignSelf: 'center'
        }}
        navStyle={{
          gridArea: {
            sm: '1 / span 2',
            md: '1 / 2'
          }
        }}
        searchBarStyle={{
          width: {
            xs: '100%',
            lg: '100%'
          },
          gridArea: {
            xs: '2 / 1 / 2 / 4',
            lg: '1 / span 2'
          },
          justifySelf: 'start'
        }}
        cartButtonProps={{
          quantity: cartCount,
          gridArea: { xs: '1 / 3', lg: '1 / 5' }
        }}
        {...navbarStyles}
      />
      {children}
    </Grid>
  )
}
