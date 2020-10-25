import {
  Box,
  BoxProps,
  Icon,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup
} from '@chakra-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import { groovyBorder } from '../../../components/styles/groovyBorder'

export interface FilterBarProps extends BoxProps {
  categories: string[]
  onChangeMenu: (query: ShirtMenuQuery) => void
}

interface ShirtMenuQuery {
  first: number,
  after?: string,
  query?: string,
  sortBy?: string,
  reverse?: boolean
}

export const ShirtMenuBar = ({ categories, onChangeMenu, ...props }: FilterBarProps) => {
  const isFiltered = useRef(false)
  const [currentQuery, setCurrentQuery] = useState<ShirtMenuQuery>({
    first: 9,
    after: undefined,
    query: undefined,
    sortBy: undefined
  })

  const handleCategoryFiltering = (categories: string[]) => {
    const filterEmptySpace = (category: string) => category.trim().length !== 0
    const OR_OPERATOR = ' OR '

    const nonEmptyCategories = categories.filter(filterEmptySpace)
    if(!nonEmptyCategories) {
      return
    }

    setCurrentQuery({
      ...currentQuery,
      query: nonEmptyCategories.join(OR_OPERATOR)
    })

    isFiltered.current = true
  }

  const handleShirtSorting = (e: any) => {
    setCurrentQuery({
      ...currentQuery,
      sortBy: 'PRICE',
      reverse: e === 'DOWN_PRICE'
    })

    isFiltered.current = true
  }

  useEffect(() => {
    if(isFiltered.current) {
      onChangeMenu(currentQuery)
    }
  }, [currentQuery])

  return (
    <Box
      as="menu"
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      background={'white'}
      height={'100%'}
      px={'10px'}
      {...groovyBorder}
      {...props}
    >
      <Menu closeOnSelect={false}>
        <MenuButton
          px={4}
          py={2}
          transition="all 0.2s"
          rounded="md"
          fontWeight={'bold'}
          borderWidth="1px"
          _hover={{ bg: 'gray.100' }}
          _expanded={{ bg: 'red.200' }}
          _focus={{ outline: 0, boxShadow: 'outline' }}
        >
          Filtrar por <Icon name="chevron-down" />
        </MenuButton>

        <MenuList>
          <MenuOptionGroup onChange={handleCategoryFiltering} title="Categorias" type="checkbox">
            {categories.map((category) => (
              <MenuItemOption
                key={category}
                value={category}
              >
                {category}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
      <Menu closeOnSelect={false}>
        <MenuButton
          ml={'5px'}
          px={4}
          py={2}
          transition="all 0.2s"
          rounded="md"
          fontWeight={'bold'}
          borderWidth="1px"
          _hover={{ bg: 'gray.100' }}
          _expanded={{ bg: 'red.200' }}
          _focus={{ outline: 0, boxShadow: 'outline' }}
        >
          Ordenar Por <Icon name="chevron-down" />
        </MenuButton>

        <MenuList>
          <MenuOptionGroup onChange={handleShirtSorting} title="Preço" type="radio">
            <MenuItemOption value={'UP_PRICE'}>Menor preço</MenuItemOption>
            <MenuItemOption value={'DOWN_PRICE'}>Maior preço</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Box>
  )
}
