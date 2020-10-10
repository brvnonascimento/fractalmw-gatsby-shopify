import React, { ReactNode, RefObject } from 'react'
import { Button, ButtonProps } from '@chakra-ui/core'
import { forwardRef } from 'react'

interface RadioButtonProps extends ButtonProps {
  isChecked?: boolean
  isDisabled?: boolean
  value?: ReactNode
  ref?: RefObject<ReactNode>
}

export const RadioButton = forwardRef(
  ({ isChecked, isDisabled, value, ref, ...props }: RadioButtonProps) => (
    <Button
      ref={ref}
      variantColor={isChecked ? 'red' : 'gray'}
      aria-checked={isChecked}
      role="radio"
      isDisabled={isDisabled}
      {...props}
    />
  )
)
