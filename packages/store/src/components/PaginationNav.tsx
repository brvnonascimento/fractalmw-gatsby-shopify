import React, { memo } from 'react'
import { BoxProps, Breadcrumb, BreadcrumbItem, Link, Text } from '@chakra-ui/core'
import { groovyBorder } from './styles/groovyBorder'
import GatsbyLink from 'gatsby-link'

interface PaginationNav extends BoxProps {
  lastPage: number
}

export const PaginationNav = memo(({ lastPage, ...props }: PaginationNav) => {
  const pages = [...Array(lastPage).keys()].slice(1)
  return (
    <Breadcrumb
      separator=""
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      fontWeight={'bold'}
      py={'10px'}
      height={'100%'}
      {...groovyBorder}
      {...props}
    >
      {pages.map((page) => (
        <Link
          as={GatsbyLink as any}
          {...{ to: `/camisetas/${page}` }}
          key={page}
          title={`Ir para página ${page}`}
        >
          <BreadcrumbItem
            rounded={'lg'}
            border={'1px'}
            width={'30px'}
            height={'30px'}
            mx={'5px'}
            pl={'7px'}
            color={'black'}
          >
            <Text as='span'>{page}</Text>
          </BreadcrumbItem>
        </Link>
      ))}
    </Breadcrumb>
  )
})
