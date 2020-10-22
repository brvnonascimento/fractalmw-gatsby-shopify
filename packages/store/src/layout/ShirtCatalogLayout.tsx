import { Grid, GridProps } from '@chakra-ui/core'
import React from 'react'
import { baseLayoutProps } from './baseLayoutProps'

export const ShirtCatalogLayout = ({ children }: GridProps) => (
  <Grid
    gridTemplateRows={'100px 60px 40px 120px auto 60px 200px'}
    gridTemplateColumns={'5% 1fr 5%'}
    {...baseLayoutProps}
  >
    {children}
  </Grid>
)
