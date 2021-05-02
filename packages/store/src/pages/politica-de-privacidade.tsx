import React from 'react'
import { Box, Grid, Heading } from '@chakra-ui/react'
import { useStaticQuery, graphql } from 'gatsby'
import xss from 'xss'

const PrivacyPolicy = () => {
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
      <Box as={'section'}>
        <Heading as="h1" my={2}>Política de Privacidade</Heading>
        <article dangerouslySetInnerHTML={{ __html: privacyPolicy }} />
      </Box>
    </Grid>
  )
}

export default PrivacyPolicy