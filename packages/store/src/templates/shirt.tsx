import React, { useState } from 'react'
import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/core'
import { ShirtBreadcrumb } from '../features/buy/components/ShirtBreadcrumb'
import { ShirtImageProps } from '../features/catalog/components/ShirtGrid'
import { numberToBRL } from '../utils/price'
import { groovyBorder } from '../components/styles/groovyBorder'
import { BuyForm, BuyFormFieldsProps } from '../features/buy/components/BuyForm'
import { CartDrawer } from '../features/cart/components/CartDrawer'
import { Table } from '../components/Table'
import {
  useAddItemToCart,
  useCheckoutUrl,
  useRemoveItemFromCart
} from 'gatsby-theme-shopify-manager'
import { useShopifyCartItems } from '../features/cart/hooks/useShopifyCart'
import { ShirtDescription } from '../features/buy/components/ShirtDescription'
import { ProductSEO } from '../features/buy/components/ProductSEO'
import GatsbyImage from 'gatsby-image'
import Magnifier from 'react-magnifier'

export interface ShirtTemplate {
  id: string
  variants: any[]
  sku: string
  title: string
  category: string
  price: number
  images: ShirtImageProps[]
  description: string
  sizes: string[]
  models: string[]
  colors: string[]
}

interface ShirtOptions {
  size: string
  model: string
  color: string
}

export interface ShirtTemplateProps {
  pageContext: {
    shirt: ShirtTemplate
  }
}

export default ({ pageContext: { shirt } }: ShirtTemplateProps) => {
  if (!shirt) {
    return null
  }

  const { onOpen, isOpen, onClose } = useDisclosure()

  const items = useShopifyCartItems()
  const addItemToCart = useAddItemToCart()
  const removeItemFromCart = useRemoveItemFromCart()
  const checkoutUrl = useCheckoutUrl()
  const [currentImage, setCurrentImage] = useState(shirt.images[0])

  const getVariantId = ({ color, model, size }: ShirtOptions) => {
    const variant = shirt.variants.find(
      ({ title }) =>
        title.includes(color) && title.includes(model) && title.includes(size)
    )
    return variant.id.split(`Shopify__ProductVariant__`)[1]
  }

  const {
    category,
    title,
    price,
    images,
    sizes,
    models,
    colors,
    sku,
    description
  } = shirt

  return (
    <Grid
      gridTemplateRows={'auto'}
      gridTemplateColumns={{
        lg: '10vw 0.5fr 0.5fr 10vw'
      }}
      px={{ xs: '1em', lg: 0 }}
      pr={{ xs: '3em', lg: 0 }}
    >
      <ProductSEO
        title={`${title} - Fractal Music Wear`}
        metaDescription={description}
        image={images[0].src}
        keywords={`${title.replace(' ', ',')}, ${description.replace(
          ' ',
          ','
        )}`}
        product={{
          brand: 'Fractal Music Wear',
          description,
          images: images.map(({ fallbackSrc }) => fallbackSrc),
          sku,
          price: price.toFixed(2),
          name: title,
          url: `https://fractalmw.com.br/produto/${sku}`
        }}
      />

      <Grid
        as="main"
        display={'grid'}
        // gridArea={{ xs: '2 / 2 / 4 / 4', lg: '2 / 2 / 4 / 4' }}
        gridArea={{ xs: '2 / 2 / 4 / 4', lg: '2 / 2 / 4 / 4' }}
        gridTemplateColumns={{ xs: '1fr', lg: 'repeat(2, 0.5fr)' }}
        gridTemplateRows={{ lg: '70px repeat(4, auto)' }}
        columnGap={'15px'}
        maxWidth={'1030px'}
        justifySelf={'center'}
      >
        <ShirtBreadcrumb
          category={category}
          title={title}
          gridColumn={{ lg: '1 / 3' }}
          background={'white'}
          padding={'5px'}
          mb={'10px'}
          {...groovyBorder}
        />

        <Flex direction="column">
          <Heading as="h1" gridColumn={{ lg: '2' }}>
            {title}
          </Heading>

          <Heading
            gridColumn={{ lg: '2' }}
            gridRow={'3'}
            fontSize={'lg'}
            my={'10px'}
            background={'red'}
            color="white"
            width={'100px'}
            textAlign={'center'}
            {...groovyBorder}
          >
            {numberToBRL(price)}
          </Heading>
        </Flex>

        <Flex
          direction={'column'}
          gridArea={{ lg: '2 / 1 / 6' }}
          justifySelf={'center'}
          alignContent={'center'}
          width={'100%'}
          minWidth={'300px'}
          maxWidth={'800px'}
        >
          <Box
            as={Magnifier}
            src={currentImage.src}
            p={'10px'}
            {...groovyBorder}
          />

          <Stack
            isInline
            alignSelf={'center'}
            mt={'10px'}
            height={'110px'}
            width={'100%'}
            padding={'5px'}
            {...groovyBorder}
          >
            {shirt.images.map((image) => {
              return (
                <Box
                  width={'100px'}
                  cursor="pointer"
                  mr={'10px'}
                  onClick={() => setCurrentImage(image)}
                >
                  <GatsbyImage fluid={image} alt={image.alt} />
                </Box>
              )
            })}
          </Stack>
        </Flex>

        <BuyForm
          gridColumn={{ xs: '1' }}
          gridArea={{ lg: '3 / 2 / 6' }}
          colors={colors}
          models={models}
          sizes={sizes}
          justifyContent={'space-between'}
          mt={'15px'}
          onSubmit={async ({
            color,
            model,
            quantity,
            size
          }: BuyFormFieldsProps) => {
            try {
              await addItemToCart(
                getVariantId({ color, model, size }),
                quantity
              )
              onOpen()
            } catch (err) {}
          }}
        />

        <ShirtDescription
          description={description}
          gridArea={{ lg: '6 / 1 / 6 / 3' }}
          textAlign={'left'}
          p={'2em'}
        />
      </Grid>

      <Grid
        as="section"
        gridArea={'4 / 2 / 4 / 4'}
        background={'#F3F3F3'}
        alignItems={'center'}
        justifyItems={'center'}
        p={{ xs: '0', lg: '2em' }}
      >
        <Flex
          as="article"
          direction={{ lg: 'column' }}
          justifyContent={'space-around'}
          alignItems={{ xs: 'center', lg: 'start' }}
          width={'100%'}
          gridArea={{ xs: '1', md: '1 / span 2', lg: 'unset' }}
          fontSize={{ xs: 'sm', lg: 'md' }}
        >
          <Text>
            <Box as="q">
              As camisetas
              <br />
              são estampadas
              <br />
              <b>uma a uma</b> na nossa loja em
              <br />
              Piracicaba...
            </Box>
            <br />
            <b>...pelo Sidão Fractal</b>
          </Text>

          <Flex direction="column" mt={'1em'}>
            <Heading>Camiseta</Heading>

            <Text>
              <b>
                100% Algodão
                <br />
                Fio Penteado 30.1
                <br />
                Pré Lavada e Amaciada
                <br />
              </b>
              com reforço na gola
              <br />
              Estampa em <b>Silk Screen</b>
              <br />
              <b>artesanal</b> e <b>digital</b>.
            </Text>
          </Flex>
        </Flex>

        <Image
          src="/measures.svg"
          gridArea={{
            xs: '3',
            md: '3 / 1',
            lg: 'unset'
          }}
          p={'1em'}
          htmlWidth={'300'}
          htmlHeight={300}
        />

        <Table
          gridArea={{ xs: '2', md: '3', lg: '1 / 3 / 3 / 3' }}
          padding={'1em'}
          justifySelf={'center'}
          maxWidth={'1030px'}
          title={'GUIA DE MEDIDAS'}
          mt="0.5em"
          columns={[
            {
              header: 'Tamanho',
              acessor: 'size'
            },
            {
              header: 'Altura',
              acessor: 'height'
            },
            {
              header: 'Largura',
              acessor: 'width'
            }
          ]}
          data={[
            {
              size: 'P',
              height: '70cm',
              width: '49cm'
            },
            {
              size: 'M',
              height: '72cm',
              width: '53cm'
            },
            {
              size: 'G',
              height: '74cm',
              width: '56cm'
            },
            {
              size: 'GG',
              height: '76cm',
              width: '59cm'
            },
            {
              size: 'XG',
              height: '80cm',
              width: '65cm'
            }
          ]}
        >
          <Text fontWeight={'lighter'} fontSize={'sm'} mb={'1em'}>
            *as medidas podem variar em até 3cm tanto na largura como na altura
          </Text>
        </Table>
      </Grid>
      <CartDrawer
        checkoutUrl={checkoutUrl ?? ''}
        onDeleteItem={removeItemFromCart}
        items={items}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Grid>
  )
}
