import React from 'react'
import { GatsbyBrowser } from 'gatsby'
import { CartContextProvider } from '../features/cart/hooks/useCart'
import { ApolloProvider } from '@apollo/client'
import { client } from '../services/apolloClient'

const root: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      <CartContextProvider>{element}</CartContextProvider>
    </ApolloProvider>
  )
}

export default root
