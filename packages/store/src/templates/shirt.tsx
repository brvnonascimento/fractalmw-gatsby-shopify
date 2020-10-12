import { Link } from 'gatsby'
import React from 'react'
import '../layouts/ShirtPageLayout.tsx'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Heading,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  RadioButtonGroup,
  Select,
  Stack,
  Text
} from '@chakra-ui/core'
import { ShirtPageLayout } from '../layouts/ShirtPageLayout'
import { RadioButton } from '../components/RadioButton'
import { Header } from '../components/Header'
import { SitePageContext } from '../../graphql-types'

interface ShirtTemplateProps {
  pageContext: SitePageContext
}

export default ({ pageContext }: ShirtTemplateProps) => {
  const shirt = pageContext.shirt

  if(!shirt) {
    return null
  }
  
  return (
    <ShirtPageLayout>
      <Header gridArea={'1 / 1 / 1 / 5'} background={'black'} />
      <Breadcrumb
        gridArea={'2 / 2 / 2 / 4'}
        separator=">"
        alignSelf={'center'}
        fontWeight={'bold'}
      >
        <BreadcrumbItem>
          <Link to="/">Fractal Music Wear</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>{shirt.productType}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>{shirt.title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Heading as="h1" gridArea={'3 / 3 / 4'}>
        {shirt.title}
      </Heading>

      <Text gridArea={'5 / 3'} fontSize={'xl'} alignSelf={'center'}>
        R$ 68.90
      </Text>

      <Image
        gridArea={'3 / 2 / 4 / 2'}
        src={shirt.images[0]?.localFile?.childImageSharp?.fluid?.srcWebp}
        fallbackSrc={shirt.images[0]?.localFile?.childImageSharp?.fluid?.src}
        alt={shirt.images[0]?.altText}
      />

      <Text gridArea={'6 / 3'} textAlign={'left'}>
        {shirt.descriptionHtml}
      </Text>

      <Select display={'flex'} width={'50%'} rootProps={{ gridArea: '9 / 3' }}>
        {shirt.options
          .find(({ name }) => name === 'model')
          ?.values.map((model) => (
            <option>{model}</option>
          ))}
      </Select>

      <RadioButtonGroup
        gridArea={{ gridArea: '10 / 3' }}
        alignSelf={'center'}
        display={'flex'}
      >
        {shirt.options
          .find(({ name }) => name === 'size')
          ?.values.map((size) => (
            <RadioButton value={size} marginX={'5px'}>
              {size?.toLocaleUpperCase()}
            </RadioButton>
          ))}
      </RadioButtonGroup>

      <Stack isInline gridArea={'11 / 2 / 13 / 2'}>
        {shirt.images?.map(({ localFile, altText }) => (
          <Image
            width={'100px'}
            src={localFile?.childImageSharp?.fluid?.srcWebp}
            fallbackSrc={localFile?.fluid?.src}
            alt={altText}
          />
        ))}
      </Stack>

      <NumberInput
        size="sm"
        defaultValue={15}
        min={10}
        gridArea={'11 / 3'}
        width={'150px'}
        fontWeight={'bold'}
      >
        <NumberDecrementStepper
          bg="pink.200"
          _active={{ bg: 'pink.300' }}
          children="-"
        />
        <NumberInputField
          focusBorderColor="red.200"
          width={'50px'}
          height={'100%'}
        />
        <NumberIncrementStepper
          bg="green.200"
          _active={{ bg: 'green.300' }}
          children="+"
        />
      </NumberInput>

      <Button
        gridArea={'12 / 3 / 14 / 3'}
        alignSelf={'center'}
        justifySelf={'center'}
        width={'100%'}
      >
        Adicionar ao Carrinho!
      </Button>
    </ShirtPageLayout>
  )
}
