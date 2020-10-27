import React, { MutableRefObject, ReactNode } from 'react'
import {
  FormLabel,
  Grid,
  GridProps,
  ImageProps,
  Link,
  ListItem,
  Spinner
} from '@chakra-ui/core'
import GatsbyLink from 'gatsby-link'
import { ShirtImage } from '../../../components/ShirtImage'
import { InfiniteLoadingSpinner } from '../../../components/InfiniteLoadingSpinner'

export interface ShirtGridProps extends GridProps {
  shirts: {
    title: string
    sku: string
    images: ShirtImageProps[]
  }[]
  onInfiniteLoadingTriggered?: () => void
  loading?: boolean
  infiniteLoadingTrigger?: MutableRefObject<ReactNode>
  isInfiniteLoading?: boolean
  hasMoreShirts?: boolean
  isInline?: boolean
  shirtSize?: string
  shirtProps?: ImageProps
}

export interface ShirtImageProps {
  src: string
  fallbackSrc: string
  alt: string
}

export const ShirtGrid = ({
  shirts,
  loading = false,
  isInfiniteLoading = false,
  onInfiniteLoadingTriggered = () => {},
  isInline = false,
  hasMoreShirts,
  shirtSize = '300px',
  shirtProps,
  ...props
}: ShirtGridProps) => (
  <Grid
    as="ul"
    listStyleType={'none'}
    display={'grid'}
    gridTemplateColumns={`repeat(auto-fill, minmax(${shirtSize}, 1fr))`}
    justifyItems={'center'}
    {...props}
  >
    {loading ? (
      <Spinner
        size="xl"
        gridColumn={'1 / -1'}
        alignSelf={'center'}
        justifySelf={'center'}
      />
    ) : (
      shirts.map(({ images, title, sku }, i) => (
        <ListItem key={sku} gridColumn={isInline ? `${i + 1}` : undefined}>
          <Link
            as={GatsbyLink as any}
            {...{ to: `/produto/${sku}` }}
            display={'grid'}
            gridTemplateColumns={'1fr'}
            gridTemplateRows={'repeat(10, 0.1fr)'}
            width={shirtSize}
          >
            <ShirtImage
              id={title}
              justifySelf={'center'}
              gridArea={'1 / 1 / 4 / 3'}
              src={images[0].src}
              fallbackSrc={images[0].fallbackSrc}
              alt={images[0].alt}
              {...shirtProps}
            />
            <FormLabel
              as="label"
              gridArea={'8'}
              zIndex={2}
              alignSelf={'center'}
              marginBottom={'2em'}
              justifySelf={'center'}
              width={'200px'}
              htmlFor={title}
              justifyContent={'center'}
              transform={'skewX(-20deg)'}
              background={'rgba(240, 52, 52)'}
              textAlign={'center'}
              fontWeight={'bold'}
              color={'white'}
            >
              {title}
            </FormLabel>
          </Link>
        </ListItem>
      ))
    )}
    {isInfiniteLoading && !loading && hasMoreShirts && (
      <InfiniteLoadingSpinner
        size="xl"
        gridColumn={'1 / -1'}
        alignSelf={'end'}
        justifySelf={'center'}
        canInfiniteLoad={
          (isInfiniteLoading && !loading && hasMoreShirts) ?? false
        }
        onInfiniteLoadingTriggered={onInfiniteLoadingTriggered}
      />
    )}
  </Grid>
)
