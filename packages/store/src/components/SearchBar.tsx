import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/core'
import React from 'react'

export const SearchBar = ({ ...props }) => (
  <InputGroup  borderWidth={0} color={'grey'} {...props}>
    <InputLeftElement children={<Icon name="search" color="gray.300" />} />
    <Input borderRadius={'20px'} background="#E2E8F0" type="phone" placeholder="Pesquisar" />
  </InputGroup>
)
