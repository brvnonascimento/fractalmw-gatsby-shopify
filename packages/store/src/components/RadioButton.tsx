import React from 'react'
import { Box, BoxProps, RadioProps, useRadio } from '@chakra-ui/react'

interface RadioButtonProps extends RadioProps {
  containerProps?: BoxProps
}

export const RadioButton = ({ children, containerProps, ...props }: RadioButtonProps) => {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label" {...containerProps}>
      <input {...input} />
      <Box {...checkbox} {...props}>
        {children}
      </Box>
    </Box>
  )
}
