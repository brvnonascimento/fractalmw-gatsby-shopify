import React from 'react'
import {
  NumberInput,
  NumberDecrementStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberInputProps,
  PseudoBoxProps, NumberInputStepper
} from '@chakra-ui/core'

interface QuantityInputProps extends NumberInputProps {
  decrementerProps?: PseudoBoxProps
  incrementerProps?: PseudoBoxProps
}

export const QuantityInput = ({
  onChange,
  decrementerProps,
  incrementerProps,
  ...props
}: QuantityInputProps) => {
  return (
    <NumberInput size="sm" defaultValue={1} min={1} width={'100px'} onChange={onChange} height={'100%'} {...props}>
      <NumberInputField focusBorderColor="red.200" height={'100%'} />
      <NumberInputStepper>
        <NumberIncrementStepper
          bg="green.200"
          _active={{ bg: 'green.300' }}
          children="+"
        />
        <NumberDecrementStepper
          bg="pink.200"
          _active={{ bg: 'pink.300' }}
          children="-"
        />
      </NumberInputStepper>
    </NumberInput>
  )
}
