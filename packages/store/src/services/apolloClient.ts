import { setContext } from '@apollo/client/link/context'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import fetch from 'isomorphic-fetch'

const uri = `https://${process.env.GATSBY_SHOPIFY_SHOPNAME}.myshopify.com/api/2020-07/graphql.json`

const httpLink = createHttpLink({ uri, fetch })

const middlewareLink = setContext(() => ({
  headers: {
    'X-Shopify-Storefront-Access-Token': `${process.env.GATSBY_SHOPIFY_STOREFRONT_ACCESS_TOKEN}`,
    'Content-Type': 'application/json'
  }
}))

export const client = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache: new InMemoryCache()
})
