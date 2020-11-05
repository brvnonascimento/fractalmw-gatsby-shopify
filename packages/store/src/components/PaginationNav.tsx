import React, { memo } from 'react'
import { BoxProps, Breadcrumb, BreadcrumbItem, Link, Text } from '@chakra-ui/core'
import { groovyBorder } from './styles/groovyBorder'
import GatsbyLink from 'gatsby-link'

interface PaginationNav extends BoxProps {
  lastPage: number
  path: string
}

export const PaginationNav = memo(({ lastPage, path, ...props }: PaginationNav) => {
  const pages = [...Array(lastPage).keys()]
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
          {...{ to: `${path}/${page !== 0 ? page + 1 : ''}` }}
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
            <Text as='span'>{page + 1}</Text>
          </BreadcrumbItem>
        </Link>
      ))}
    </Breadcrumb>
  )
})
