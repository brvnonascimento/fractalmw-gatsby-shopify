import React, { memo } from 'react'
import { Link } from 'gatsby'
import { BoxProps, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon } from '@chakra-ui/core'
import { toSlug } from '../../../utils/toSlug'

interface ShirtBreadcrumb extends BoxProps {
  category: string
  title: string
}

export const ShirtBreadcrumb = memo(({ category, title, ...props }: ShirtBreadcrumb) => {
  return (
    <Breadcrumb
      separator={<Icon color="gray.300" name="chevron-right" />}
      alignSelf={'center'}
      fontWeight={'bold'}
      pl={'10px'}
      {...props}
    >
      <BreadcrumbItem>
        <Link to="/">Fractal Music Wear</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link to={`/categoria/camisetas/${toSlug(category)}/`}>{category}</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink>{title}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
})
