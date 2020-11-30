import React from 'react'
import { Box, RadioProps, useRadio } from '@chakra-ui/react'

export const RadioButton = ({ children, ...props }: RadioProps) => {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box
      as="label"
      w={{ base: '100%', md: '70%' }}
      justifyContent={{
        base: 'space-around',
        md: 'space-between'
      }}
      {...props}
    >
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        w={'50px'}
        h={'50px'}
        py={3}
        mr={2}
        borderColor={'black'}
        borderWidth={'2px'}
        color={'black'}
        fontWeight={'medium'}
        borderRadius={'md'}
        _checked={{
          bg: 'black',
          color: 'white',
          border: 0
        }}
        _focus={{
          boxShadow: 'outline'
        }}
        alignItems={'center'}
        justifyContent={'center'}
        textAlign={'center'}
      >
        {children}
      </Box>
    </Box>
  )
}
