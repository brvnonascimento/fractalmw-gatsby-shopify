import React, { MutableRefObject, ReactNode } from 'react'
import {
  GridProps,
  ImageProps,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Spinner
} from '@chakra-ui/core'
import GatsbyLink from 'gatsby-link'
import { InfiniteLoadingSpinner } from '../../../components/InfiniteLoadingSpinner'
import { FigureOverlayed } from '../../../components/FigureOverlayed'
import { groovyBorder } from '../../../components/styles/groovyBorder'

export interface ShirtGridProps extends GridProps {
  shirts: {
    title: string
    sku: string
    images: ShirtImageProps[]
  }[]
  title?: string
  gatsbyImage?: boolean
  onInfiniteLoadingTriggered?: () => void
  loading?: boolean
  infiniteLoadingTrigger?: MutableRefObject<ReactNode>
  isInfiniteLoading?: boolean
  hasMoreShirts?: boolean
  shirtSize?: string
  shirtProps?: ImageProps
}

export interface ShirtImageProps {
  src: string
  fallbackSrc: string
  altText: string
}

export const ShirtGrid = ({
  shirts,
  title = 'Camisetas',
  loading = false,
  gatsbyImage = true,
  isInfiniteLoading = false,
  onInfiniteLoadingTriggered = () => {},
  hasMoreShirts,
  shirtSize = '300px',
  shirtProps,
  ...props
}: ShirtGridProps) => (
  <List {...props}>
    <ListItem fontWeight={'bold'} fontSize={'3xl'}>
      {title}
    </ListItem>

    <SimpleGrid
      as="ul"
      listStyleType={'none'}
      display={'grid'}
      spacing={2}
      minChildWidth={{ xs: '200px', lg: '250px' }}
      // gridTemplateColumns={`repeat(auto-fill, minmax(${shirtSize}, 1fr))`}
    >
      {loading ? (
        <Spinner
          size="xl"
          gridColumn={'1 / -1'}
          alignSelf={'center'}
          justifySelf={'center'}
        />
      ) : (
        shirts.map(({ images: [image], title, sku }) => (
          <ListItem
            key={sku}
            _hover={{ transform: 'scale(1.1)' }}
            transition={'all .2s ease-in-out'}
            background={'white'}
            >
            <Link
              as={GatsbyLink as any}
              {...{ to: `/produto/${sku}` }}
              display={'grid'}
              gridTemplateColumns={'1fr'}
              >
              <FigureOverlayed
                image={image}
                gatsbyImage={gatsbyImage}
                caption={{
                  children: title,
                  fontSize: '1rem',
                  alignSelf: 'end',
                  justifySelf: 'center',
                  background: 'rgba(240, 52, 52)',
                  m: '20px',
                  textAlign: 'center',
                  ...groovyBorder
                }}
              />
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
    </SimpleGrid>
  </List>
)
