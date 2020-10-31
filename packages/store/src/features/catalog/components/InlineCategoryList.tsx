import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { BoxProps, Grid, Link, ListItem } from '@chakra-ui/core'
import { groovyBorder } from '../../../components/styles/groovyBorder'
import { toSlug } from '../../../utils/toSlug'

interface InlineCategoryListProps extends BoxProps {
  categories: string[]
}

export const InlineCategoryList = ({
  categories,
  ...props
}: InlineCategoryListProps) => (
  <Grid
    as="ul"
    listStyleType="none"
    display={'grid'}
    gridTemplateColumns={'repeat(auto-fill, minmax(150px, 1fr))'}
    rowGap={'10px'}
    paddingTop={'10px'}
    {...props}
  >
    {categories.map((category) => (
      <ListItem display={'flex'} key={category}>
        <Link
          as={GatsbyLink as any}
          {...{ to: `/camisetas/categoria/${toSlug(category)}/1` }}
          display={'flex'}
          background={'rgba(256, 256, 256, 0.8)'}
          _hover={{ transform: 'scale(1.1)' }}
          transition={'all .2s ease-in-out'}
          fontWeight={'bold'}
          width={'100%'}
          height={'100%'}
          my={'5px'}
          padding={'10px'}
          alignSelf={'center'}
          alignItems={'center'}
          justifyContent={'center'}
          textAlign={'center'}
          justifySelf={'center'}
          color={'gray'}
          marginRight={'10px'}
          {...groovyBorder}
        >
          {category}
        </Link>
      </ListItem>
    ))}
  </Grid>
)
