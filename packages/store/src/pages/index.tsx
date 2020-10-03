import React from 'react'
import Link from 'gatsby-link'

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export default ({ data }: IndexPageProps) => {
  return (
    <>
      <header></header>

      <main></main>

      <footer></footer>
    </>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    allShopifyProduct {
      nodes {
        title
        description
        images {
          originalSrc
        }
      }
    }
  }
`
