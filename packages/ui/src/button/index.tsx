import React, { ReactNode } from 'react'
import { Button, IButton } from '@chakra-ui/core'

export interface FractalButtonProps {
  type?: IButton['type']
  background?: string
  color?: string
  borderRadius?: string
  variant?: 'success' | 'primary'
  children: ReactNode
  isDisabled?: boolean
  width?: string
  margin?: string
}

export const FractalButton = ({
  children,
  isDisabled = false,
  color = 'white',
  width = '100%',
  borderRadius,
  type,
  margin
}: FractalButtonProps) => {
  return (
    <Button
      fontWeight="500"
      isDisabled={isDisabled}
      color={color}
      type={type}
      width={width}
      border={0}
      borderRadius={borderRadius}
      margin={margin}
    >
      {children}
    </Button>
  )
}
