import React from 'react'
import { FmwButton } from '.'
import { ThemeProvider } from '@chakra-ui/core'

export default {
  title: 'Button',
  component: FmwButton
}

export const Success = () => (
  <ThemeProvider>
    <FmwButton width="300px">Continuar</FmwButton>
  </ThemeProvider>
)

export const SuccessDisabled = () => (
  <ThemeProvider>
    <FmwButton width="300px" isDisabled>
      Continuar
    </FmwButton>
  </ThemeProvider>
)
