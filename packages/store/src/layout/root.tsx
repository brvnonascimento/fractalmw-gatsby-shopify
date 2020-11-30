import React from 'react'
import { GatsbyBrowser } from 'gatsby'
import { ApolloProvider } from '@apollo/client'
import { client } from '../services/apolloClient'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import theme from '../@chakra-ui/gatsby-plugin/theme'

const root: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <ApolloProvider client={client}>{element}</ApolloProvider>
    </ChakraProvider>
  )
}

export default root
