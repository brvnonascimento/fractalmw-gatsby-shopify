import React, { memo } from 'react'
import {
  BoxProps,
  Breadcrumb,
  BreadcrumbItem,
  Link,
  Text
} from '@chakra-ui/react'
import GatsbyLink from 'gatsby-link'

interface PaginationNav extends BoxProps {
  lastPage: number
  currentPage: number
  path: string
}

export const PaginationNav = memo(
  ({ lastPage, path, currentPage, ...props }: PaginationNav) => {
    const pages = [...Array(lastPage).keys()]
    return (
      <Breadcrumb
        separator=""
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        fontWeight={'medium'}
        py={'10px'}
        height={'100%'}
        {...props}
      >
        {pages.map((page, i) => (
          <Link
            as={GatsbyLink as any}
            {...{ to: `${path}/${page !== 0 ? page + 1 : ''}` }}
            key={page}
            title={`Ir para página ${page}`}
          >
            <BreadcrumbItem
              borderBottom={currentPage === i + 1 ? '2px solid' : ''}
              borderRadius={0}
              width={'30px'}
              height={'30px'}
              mx={'5px'}
              pl={'7px'}
              color={'black'}
            >
              <Text as="span">{page + 1}</Text>
            </BreadcrumbItem>
          </Link>
        ))}
      </Breadcrumb>
    )
  }
)
