import React, { ReactEventHandler, useEffect, useState } from 'react'
import {
  Box,
  BoxProps,
  Divider,
  Flex,
  Icon,
  Image,
  Input,
  InputLeftElement,
  Text
} from '@chakra-ui/core'
import { groovyBorder } from '../../../components/styles/groovyBorder'
import { Link } from 'gatsby'

export interface SearchResult {
  title: string
  image: {
    alt: string
    src: string
    fallbackSrc: string
  }
  handle: string
}

interface SearchBarProps extends BoxProps {
  searchResults: SearchResult[]
  handleSearch: (search: string) => void
  loading: boolean
  error: any
}

export const SearchBar = ({
  searchResults = [],
  handleSearch,
  loading, 
  error,
  ...props
}: SearchBarProps) => {
  const [search, setSearch] = useState('')

  const isSearching = search.trim().length !== 0

  useEffect(() => {
    if (isSearching) {
      handleSearch(search)
    }
  }, [search])

  return (
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
        left={'18px'}
        children={<Icon name="search" color="gray.300" />}
      />
      <Input
        borderRadius={0}
        paddingLeft={'40px'}
        background="#FFFF"
        type="search"
        placeholder="Pesquisar"
        onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(target.value)
        }
        {...groovyBorder}
      />
      {isSearching && (
        <Flex
          width={'100%'}
          height={'auto'}
          flexDirection={'column'}
          position={'absolute'}
          zIndex={4}
          background={'white'}
          top={'50px'}
          {...groovyBorder}
        >
          {searchResults.map(
            ({ title, image: { alt, src, fallbackSrc }, handle }) => (
              <Link to={`/produto/${handle}`}>
                <Flex>
                  <Image
                    width={'100px'}
                    alt={alt}
                    src={src}
                    fallbackSrc={fallbackSrc}
                    mx="10px"
                  />
                  <Text fontSize={'bold'} color="black" fontSize={'md'}>
                    {title}
                  </Text>
                  <Divider />
                </Flex>
              </Link>
            )
          )}
        </Flex>
      )}
    </Box>
  )
}
