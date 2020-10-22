import React, { memo } from 'react'
import { Link } from 'gatsby'
import { BoxProps, Breadcrumb, BreadcrumbItem } from '@chakra-ui/core'
import { groovyBorder } from './styles/groovyBorder'
import styled from '@emotion/styled'

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
      height={'100%'}
      {...groovyBorder}
      {...props}
    >
      {pages.map((page) => (
        <BreadcrumbItem
          key={page}
          rounded={'lg'}
          border={'1px'}
          width={'30px'}
          height={'30px'}
          mx={'5px'}
          pl={'7px'}
        >
          <Link to={`/camisetas/${page}`}>{page}</Link>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  )
})
