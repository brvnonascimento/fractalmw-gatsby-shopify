import React from 'react'
import { Heading, HeadingProps } from '@chakra-ui/react'

interface CompanyHeadingProps extends HeadingProps {
  name: string
}

export const CompanyHeading = ({ name, ...props }: CompanyHeadingProps) => (
  <Heading as="h1" fontSize={{ base: '2rem', lg: '3.3rem' }} {...props}>
    {name}
  </Heading>
)
