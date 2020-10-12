import React from 'react'
import { Grid, GridProps } from '@chakra-ui/core'
import { baseLayoutProps } from './baseLayoutProps'

export const HomePageLayout = ({ ...props }: GridProps) => (
  <Grid
    gridTemplateRows={'530px auto 200px 1fr 300px'}
    {...baseLayoutProps}
    {...props}
  />
)
