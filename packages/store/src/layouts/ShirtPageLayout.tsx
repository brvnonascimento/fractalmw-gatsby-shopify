import React from 'react'
import { Grid, GridProps } from '@chakra-ui/core'
import { baseLayoutProps } from './baseLayoutProps'

export const ShirtPageLayout = ({ ...props }: GridProps) => (
  <Grid
    gridTemplateRows={
      '100px repeat(12, 50px) 1fr 800px 200px'
    }
    gridTemplateColumns={'100px 0.5fr 0.5fr 100px'}
    {...baseLayoutProps}
    {...props}
  />
)
