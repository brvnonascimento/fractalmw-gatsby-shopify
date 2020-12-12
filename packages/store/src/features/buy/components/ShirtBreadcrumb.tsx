import React, { forwardRef, memo } from 'react'
import { Link } from 'gatsby'
import { BoxProps, Breadcrumb, BreadcrumbItem, useBreakpointValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { CATEGORY_URL_PREFIX, PRODUCT_URL_PREFIX } from '../../../constants/url'

interface BreadcrumbLinkItem {
  title: string
  handle: string
}

interface ShirtBreadcrumbProps extends BoxProps {
  category: BreadcrumbLinkItem
  shirt: BreadcrumbLinkItem
}

export const ShirtBreadcrumb = memo(
  forwardRef<HTMLElement, ShirtBreadcrumbProps>(
    ({ category, shirt, ...props }: ShirtBreadcrumbProps, ref) => {
      return (
        <Breadcrumb
          ref={ref}
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
            <Link to={`${CATEGORY_URL_PREFIX}/${category.handle}`}>
              {category.title}
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to={`${PRODUCT_URL_PREFIX}/${shirt.handle}`}>{shirt.title.slice(0, 100)}</Link>
          </BreadcrumbItem>
        </Breadcrumb>
      )
    }
  )
)
