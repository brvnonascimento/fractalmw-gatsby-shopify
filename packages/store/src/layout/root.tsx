import React from 'react'
import { GatsbyBrowser } from 'gatsby'
import { ApolloProvider } from '@apollo/client'
import { client } from '../services/apolloClient'

const root: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return <ApolloProvider client={client}>{element}</ApolloProvider>
}

export default root
