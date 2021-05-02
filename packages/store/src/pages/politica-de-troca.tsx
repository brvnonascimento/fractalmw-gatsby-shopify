import React from 'react'
import { Box, Grid, Heading } from '@chakra-ui/react'
import { useStaticQuery, graphql } from 'gatsby'
import xss from 'xss'

const RefundPolicy = () => {
  const {
    allShopifyShopPolicy: {
      edges: [
        {
          node: { body }
        }
      ]
    }
  } = useStaticQuery(graphql`
    query RefundPolicy {
      allShopifyShopPolicy(filter: { type: { eq: "refundPolicy" } }) {
        edges {
          node {
            body
          }
        }
      }
    }
  `)

  const refundPolicy = xss(body.replace('<meta charset="UTF-8" />', ''))

  return (
    <Grid
      as="main"
      p={'1em'}
      maxWidth={'1200px'}
      justifySelf={'center'}
      h={'100%'}
      minH={'100vh'}
    >
      <Box as={'section'}>
        <Heading as="h1" my={2}>Política de Troca</Heading>
        <article dangerouslySetInnerHTML={{ __html: refundPolicy }} />
      </Box>
    </Grid>
  )
}

export default RefundPolicy