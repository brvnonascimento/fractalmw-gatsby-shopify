import React from 'react'
import { Link } from 'gatsby'
import { BoxProps, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon } from '@chakra-ui/core'

interface ShirtBreadcrumb extends BoxProps {
  category: string
  title: string
}

export const ShirtBreadcrumb = ({ category, title, ...props }: ShirtBreadcrumb) => {
  return (
    <Breadcrumb
      separator={<Icon color="gray.300" name="chevron-right" />}
      alignSelf={'center'}
      fontWeight={'bold'}
      {...props}
    >
      <BreadcrumbItem>
        <Link to="/">Fractal Music Wear</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink>{category}</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink>{title}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
