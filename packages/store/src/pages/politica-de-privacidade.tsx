import React from 'react'
import { Grid, Heading } from '@chakra-ui/core'
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
    query PrivacyPolicy {
      allShopifyShopPolicy(filter: { type: { eq: "privacyPolicy" } }) {
        edges {
          node {
            body
          }
        }
      }
    }
  `)

  const privacyPolicy = xss(body.replace('<meta charset="UTF-8" />', ''))

  return (
    <Grid as="main" px={'10px'}>
      <Heading as="h1">Política de Privacidade</Heading>
      <article
        dangerouslySetInnerHTML={{ __html: privacyPolicy }}
      />
    </Grid>
  )
}
