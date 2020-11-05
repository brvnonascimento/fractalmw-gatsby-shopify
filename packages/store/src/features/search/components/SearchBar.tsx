import React, { useEffect, useRef, useState } from 'react'
import {
  Box,
  BoxProps,
  Divider,
  Flex,
  Icon,
  Image,
  Input,
  InputLeftElement,
  Spinner,
  Text
} from '@chakra-ui/core'
import { groovyBorder } from '../../../components/styles/groovyBorder'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import useOnClickOutside from 'use-onclickoutside'

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
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false)
  const ref = useRef(null)
  useOnClickOutside(ref, () => setIsSearchBoxOpen(false))

  const isSearching = search.trim().length !== 0

  useEffect(() => {
    if (isSearching) {
      setIsSearchBoxOpen(true)
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
      ref={ref}
      {...props}
    >
      <InputLeftElement
        top={'9px'}
        alignSelf={'center'}
        left={'18px'}
        children={<Icon name="search" color="gray.300" />}
      />
      <Input
        paddingLeft={'40px'}
        background="#FFFF"
        type="search"
        placeholder="Pesquisar"
        onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(target.value)
        }
        onFocus={() => setIsSearchBoxOpen(true)}
        {...groovyBorder}
      />
      {isSearching && isSearchBoxOpen && (
        <Flex
          width={'100%'}
          minHeight={'300px'}
          height={'auto'}
          flexDirection={'column'}
          position={'absolute'}
          zIndex={4}
          background={'white'}
          top={'50px'}
          {...(loading && {
            justifyContent: 'center',
            alignItems: 'center'
          })}
          {...groovyBorder}
        >
          {loading && <Spinner size={'lg'} />}
          {searchResults.map(
            ({ title, image: { alt, src, fallbackSrc }, handle }, i) => (
              <>
                <StyledLink
                  to={`/produto/${handle}`}
                  onClick={() => setIsSearchBoxOpen(false)}
                >
                  <Flex>
                    <Image
                      width={'100px'}
                      height={'100px'}
                      htmlWidth={'100'}
                      htmlHeight={'100'}
                      alt={alt}
                      src={src}
                      fallbackSrc={fallbackSrc}
                      alignSelf={'center'}
                      mx="10px"
                      {...groovyBorder}
                    />
                    <Text fontWeight={'bold'} color="black" fontSize={'sm'}>
                      {title}
                    </Text>
                  </Flex>
                </StyledLink>
                {i + 1 !== searchResults.length && (
                  <Divider borderColor={'black'} />
                )}
              </>
            )
          )}
        </Flex>
      )}
    </Box>
  )
}

const StyledLink = styled(Link)`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
`
