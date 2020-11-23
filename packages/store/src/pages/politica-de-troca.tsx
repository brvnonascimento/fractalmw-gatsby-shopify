import React from 'react'
import { Grid, Heading } from '@chakra-ui/react'
import { useStaticQuery, graphql } from 'gatsby'
import xss from 'xss'

export default () => {
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
    <Grid as="main" p={'1em'} maxWidth={'1200px'} justifySelf={'center'}>
      <Heading as="h1">Política de Troca</Heading>
      <article dangerouslySetInnerHTML={{ __html: refundPolicy }} />
    </Grid>
  )
}
