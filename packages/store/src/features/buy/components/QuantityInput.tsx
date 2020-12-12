import React from 'react'
import {
  NumberInput,
  NumberDecrementStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberInputProps,
  BoxProps,
  NumberInputStepper
} from '@chakra-ui/react'
import { MinusIcon, PlusSquareIcon, SmallAddIcon } from '@chakra-ui/icons'

interface QuantityInputProps extends NumberInputProps {
  decrementerProps?: BoxProps
  incrementerProps?: BoxProps
}

export const QuantityInput = ({
  onChange,
  decrementerProps,
  incrementerProps,
  ...props
}: QuantityInputProps) => {
  return (
    <NumberInput
      size="sm"
      defaultValue={1}
      min={1}
      onChange={onChange}
      fontWeight={'medium'}
      height={'100%'}
      _after={{
        content: '""',
        position: 'absolute',
        bottom: '5px',
        left: 0,
        width: { base: '85%', md: '68%' },
        borderBottom: '2px solid'
      }}
      {...props}
    >
      <NumberInputField
        focusBorderColor="red.200"
        fontWeight={'medium'}
        height={'100%'}
        border={0}
        borderRadius={0}
      />
      <NumberInputStepper color={'white'} top={'-3px'}>
        <NumberIncrementStepper
          border={'2px solid black'}
          children={<SmallAddIcon color={'black'} w={'36px'} height={'20px'} />}
          fontWeight={'bold'}
          mb={1}
        />
        <NumberDecrementStepper
          border={'2px solid black'}
          children={<MinusIcon color={'black'} w={'36px'} h={'10px'} />}
          fontWeight={'bold'}
        />
      </NumberInputStepper>
    </NumberInput>
  )
}
