import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { BoxProps, Link, List, ListItem } from '@chakra-ui/core'
import { groovyBorder } from '../../../components/styles/groovyBorder'


interface InlineCategoryListProps extends BoxProps {
  categories: string[]
}

export const InlineCategoryList = ({ categories, ...props }: InlineCategoryListProps) => (
  <List
    display={'grid'}
    gridTemplateColumns={'repeat(auto-fill, minmax(230px, 1fr))'}
    paddingTop={'10px'}
    {...props}
  >
    {categories.map((category) => (
      <ListItem display={'flex'} key={category}>
        <Link
          as={GatsbyLink as any}
          {...{to: '/'}}
          background={'rgba(256, 256, 256, 0.8)'}
          fontWeight={'bold'}
          width={'100%'}
          my={'5px'}
          padding={'10px'}
          alignSelf={'center'}
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
  </List>
)
