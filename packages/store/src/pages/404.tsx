import { Box, Grid, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Image404 from '../assets/Image404.svg'

const Page404 =  () => {
  return(
    <Grid as='main' justifyItems={'center'} p='2em' minHeight={'80vh'}>
      <Heading as='h1' >OPS...</Heading>
      <Heading>DEU RUIM!</Heading>
      <Text fontSize={'xl'}>Não encontramos nada por aqui.</Text>
      <Box as={Image404} width={'50vw'} />
    </Grid>
  )
}

export default Page404