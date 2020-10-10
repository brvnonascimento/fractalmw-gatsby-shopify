import { Box, BoxProps, Icon, Input, InputLeftElement } from '@chakra-ui/core'
import React from 'react'

export const SearchBar = ({ ...props }: BoxProps) => (
  <Box
    as="section"
    role="search"
    borderWidth={0}
    color={'grey'}
    position={'relative'}
    display={'flex'}
    alignItems={'center'}
    {...props}
  >
    <InputLeftElement
      top={'9px'}
      alignSelf={'center'}
      left={'10px'}
      children={<Icon name="search" color="gray.300" />}
    />
    <Input
      borderRadius={'20px'}
      paddingLeft={'40px'}
      background="#FFFF"
      type="phone"
      placeholder="Pesquisar"
    />
  </Box>
)
