import React from 'react'
import { FractalButton } from '.'
import { ThemeProvider } from '@chakra-ui/core'

export default {
  title: 'Button',
  component: FractalButton
}

export const Success = () => (
  <ThemeProvider>
    <FractalButton width="300px">Continuar</FractalButton>
  </ThemeProvider>
)

export const SuccessDisabled = () => (
  <ThemeProvider>
    <FractalButton width="300px" isDisabled>
      Continuar
    </FractalButton>
  </ThemeProvider>
)
