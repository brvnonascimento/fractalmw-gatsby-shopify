import React from 'react'
import '../layout/ShirtPageLayout.tsx'
import {
  Box,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/core'
import { ShirtPageLayout } from '../layout/ShirtPageLayout'
import { Header } from '../layout/fragments/Header'
import { ShirtBreadcrumb } from '../features/buy/components/ShirtBreadcrumb'
import { ShirtImageProps } from '../features/catalog/components/ShirtGrid'
import { numberToBRL } from '../utils/price'
import { groovyBorder } from '../components/styles/groovyBorder'
import { BuyForm, BuyFormFieldsProps } from '../features/buy/components/BuyForm'
import { ShirtImage } from '../components/ShirtImage'
import { CartDrawer } from '../features/cart/components/CartDrawer'
import { Table } from '../components/Table'
import {
  useAddItemToCart,
  useCheckoutUrl,
  useRemoveItemFromCart
} from 'gatsby-theme-shopify-manager'
import { useShopifyCartItems } from '../features/cart/hooks/useShopifyCart'
import { SEO } from '../components/SEO'

export interface ShirtTemplate {
  id: string
  variants: any[]
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
  const { onOpen, isOpen, onClose } = useDisclosure()

  const items = useShopifyCartItems()
  const addItemToCart = useAddItemToCart()
  const removeItemFromCart = useRemoveItemFromCart()
  const checkoutUrl = useCheckoutUrl()

  if (!shirt) {
    return null
  }

  const getVariantId = ({ color, model, size }: ShirtOptions) => {
    const variant = shirt.variants.find(
      ({ title }) =>
        title.includes(color) && title.includes(model) && title.includes(size)
    )

    console.log(variant.id)

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
    description
  } = shirt

  return (
    <ShirtPageLayout>
      <SEO
        title={`${title} - Fractal Music Wear`}
        metaDescription={description}
        image={images[0].src}
        keywords={`${title.replace(' ', ',')}, ${description.replace(
          ' ',
          ','
        )}`}
      />
      <Header gridArea={'1 / 1 / 3 / 5'} withBackground color={'white'} />

      <Box
        as="main"
        display={'grid'}
        // gridArea={{ xs: '2 / 2 / 4 / 4', lg: '2 / 2 / 4 / 4' }}
        gridArea={{ xs: '2 / 2 / 4 / 4', lg: '2 / 2 / 4 / 4' }}
        gridTemplateColumns={{ xs: '1fr', lg: 'repeat(2, 0.5fr)' }}
        gridTemplateRows={{ lg: '40px 100px 20px auto 150px 150px' }}
      >
        <ShirtBreadcrumb
          category={category}
          title={title}
          gridColumn={{ lg: '1 / 3' }}
          background={'white'}
          padding={'5px'}
          {...groovyBorder}
        />
        <Heading as="h1" gridColumn={{ lg: '2' }} marginTop={'4px'}>
          {title}
        </Heading>

        <Heading gridColumn={{ lg: '2' }} fontSize={'lg'}>
          {numberToBRL(price)}
        </Heading>

        <ShirtImage
          gridArea={{ lg: '2 / 1 / 5 / 1' }}
          marginTop={'10px'}
          width={'95%'}
          alignSelf={'center'}
          maxHeight={'530px'}
          src={images[0].src}
          fallbackSrc={images[0].fallbackSrc}
          alt={images[0].alt}
        />
        <Stack
          isInline
          gridArea={{ lg: '5 / 1' }}
          my={'10px'}
          height={'110px'}
          width={'95%'}
          padding={'5px'}
          {...groovyBorder}
        >
          {images.map(({ src, fallbackSrc, alt }, i) => (
            <Box key={i} as="picture" display={'flex'} alignContent={'center'}>
              <Image
                width={'100px'}
                height={'100px'}
                padding={'5px'}
                src={src}
                fallbackSrc={fallbackSrc}
                alt={alt}
              />

              {i + 1 !== images.length && (
                <Divider orientation={'vertical'} height={'90px'} />
              )}
            </Box>
          ))}
        </Stack>

        <BuyForm
          gridColumn={{ xs: '1' }}
          gridArea={{lg: '4 / 2 '}}
          colors={colors}
          models={models}
          sizes={sizes}
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
            } catch (err) {
              console.log(err)
            }
          }}
        />

        <Text
          gridArea={{lg: '5 / 2 / 6'}}
          textAlign={'left'}
          alignSelf={'center'}
          paddingRight={'1.5em'}
          mb='100px'
        >
          {description}
        </Text>
      </Box>

      <Table
        gridArea={'4 / 2 / 4 / 4'}
        padding={'1em'}
        title={'Guia de Medidas'}
        {...groovyBorder}
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
            width: '54cm'
          },
          {
            size: 'GG',
            height: '76cm',
            width: '56cm'
          },
          {
            size: 'XG',
            height: '80cm',
            width: '65cm'
          }
        ]}
      />

      <CartDrawer
        checkoutUrl={checkoutUrl ?? ''}
        onDeleteItem={removeItemFromCart}
        items={items}
        isOpen={isOpen}
        onClose={onClose}
      />
    </ShirtPageLayout>
  )
}
