import { Grid } from '@chakra-ui/core'
import React, { ReactNode } from 'react'

interface HomePageLayoutProps {
  children: ReactNode
}

export const HomePageLayout = ({ children }: HomePageLayoutProps) => (
  <Grid
    gridTemplateRows={'600px 1fr 100px'}
    minHeight={'100vh'}
    maxWidth={'100vw'}
    overflowX={'hidden'}
    padding={0}
    margin={0}
  >
    {children}
  </Grid>
)
