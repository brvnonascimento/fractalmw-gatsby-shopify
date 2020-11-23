import React, { memo } from 'react'
import { Link } from 'gatsby'
import {
  BoxProps,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react'
import { toSlug } from '../../../utils/toSlug'
import { ChevronRightIcon } from '@chakra-ui/icons'

interface ShirtBreadcrumb extends BoxProps {
  category: string
  title: string
}

export const ShirtBreadcrumb = memo(
  ({ category, title, ...props }: ShirtBreadcrumb) => {
    return (
      <Breadcrumb
        separator={<ChevronRightIcon />}
        alignSelf={'center'}
        fontWeight={'bold'}
        bg={'purple.800'}
        color={'white'}
        maxW={'max-content'}
        p={3}
        textTransform={'uppercase'}
        {...props}
      >
        <BreadcrumbItem>
          <Link to="/">Fractal Music Wear</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to={`/categoria/camisetas/${toSlug(category)}/`}>
            {category}
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>{title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    )
  }
)
