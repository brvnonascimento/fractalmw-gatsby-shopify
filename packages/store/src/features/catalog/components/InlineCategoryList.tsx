import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { css, Grid, Link, List, ListItem, ListProps } from '@chakra-ui/react'
import { groovyBorder } from '../../../components/styles/groovyBorder'
import { toSlug } from '../../../utils/toSlug'

interface CategoryListProps extends ListProps {
  categories: string[]
  title?: string
}

export const CategoryList = ({
  categories,
  title = 'Categorias',
  ...props
}: CategoryListProps) => (
  <List {...props}>
    <ListItem fontWeight={'bold'} fontSize={'2xl'}>
      {title}
    </ListItem>
    <Grid
      as="ul"
      css={css`
        li:nth-child(3n + 1) {
          grid-column: span 2;
        }
      `}
      listStyleType="none"
      display={'grid'}
      gridTemplateColumns={'repeat(auto-fill, minmax(150px, 1fr))'}
      rowGap={'10px'}
      paddingTop={'10px'}
    >
      {categories.map((category) => (
        <ListItem display={'flex'} key={category}>
          <Link
            as={GatsbyLink as any}
            {...{ to: `/categoria/camisetas/${toSlug(category)}/` }}
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
  </List>
)