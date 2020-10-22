import React from 'react'
import { Grid, GridProps } from '@chakra-ui/core'
import { baseLayoutProps } from './baseLayoutProps'

export const HomePageLayout = ({ ...props }: GridProps) => (
  <Grid
    gridTemplateRows={'repeat(3, 175px) auto 200px 200px auto 200px'}
    {...baseLayoutProps}
    {...props}
  />
)
