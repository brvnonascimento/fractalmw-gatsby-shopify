import React from 'react'
import {
  BoxProps,
  FormLabel,
  Link,
  List,
  ListItem,
  Spinner
} from '@chakra-ui/core'
import GatsbyLink from 'gatsby-link'
import { ShirtImage } from '../../../components/ShirtImage'

export interface ShirtGridProps extends BoxProps {
  loading?: boolean
  shirts: {
    title: string
    sku: string
    images: ShirtImageProps[]
  }[]
  isInline?: boolean
}

export interface ShirtImageProps {
  src: string
  fallbackSrc: string
  alt: string
}

const inlineStyleProps: BoxProps = {
  overflowX: 'scroll',
  style: {
    scrollbarWidth: 'none',
    gap: '0'
  }
}

export const ShirtGrid = ({
  shirts,
  loading = false,
  isInline = false,
  ...props
}: ShirtGridProps) => (
  <List
    display={'grid'}
    gridTemplateColumns={
      !isInline
        ? `repeat(auto-fit, minmax(300px, 1fr))`
        : `repeat(${shirts.length}, 300px)`
    }
    alignSelf={'center'}
    gridRowGap={'1em'}
    paddingBottom={'20px'}
    height={'100%'}
    width={'100%'}
    {...(isInline ? inlineStyleProps : undefined)}
    {...props}
  >
    {loading ? (
      <Spinner
        size="xl"
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
            gridTemplateColumns={'10% 1fr 10%'}
            gridTemplateRows={'repeat(8, 0.125fr)'}
          >
            <ShirtImage
              role="listitem"
              id={title}
              gridArea={'1 / 1 / 4 / 3'}
              loading={'lazy'}
              padding={'10px'}
              src={images[0].src}
              fallbackSrc={images[0].fallbackSrc}
              alt={images[0].alt}
              // height={'310px'}
            />
            <FormLabel
              as="label"
              gridArea={'7 / 2 / 9 / 2'}
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
  </List>
)
