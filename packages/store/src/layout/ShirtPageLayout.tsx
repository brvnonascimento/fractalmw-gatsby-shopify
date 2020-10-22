import React from 'react'
import { Grid, GridProps } from '@chakra-ui/core'
import { baseLayoutProps } from './baseLayoutProps'

export const ShirtPageLayout = ({ ...props }: GridProps) => (
  <Grid
    gridTemplateRows={{
      xs: 'repeat(2 , 160px) repeat(4, auto) 200px',
      lg: 'repeat(2 , 160px) auto auto 200px'
    }}
    gridTemplateColumns={{
      xs: '10px 0.5fr 0.5fr 10px',
      lg: '10vw 0.5fr 0.5fr 10vw'
    }}
    {...baseLayoutProps}
    {...props}
  />
)
