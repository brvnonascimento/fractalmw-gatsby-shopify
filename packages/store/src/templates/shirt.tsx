import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react'

import { numberToBRL } from '../utils/price'
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
import { graphql } from 'gatsby'
import { ShirtBreadcrumb } from '../features/buy/components/ShirtBreadcrumb'

interface ShirtOptions {
  size: string
  model: string
  color: string
}

export default ({
  data: {
    allShopifyProduct: {
      nodes: [shirt]
    }
  }
}) => {
  const {
    category,
    title,
    priceRange: {
      minVariantPrice: { amount: price }
    },
    images,
    options,
    sku,
    descriptionText,
    descriptionHtml
  } = shirt

  const { onOpen, isOpen, onClose } = useDisclosure()

  const items = useShopifyCartItems()
  const addItemToCart = useAddItemToCart()
  const removeItemFromCart = useRemoveItemFromCart()
  const checkoutUrl = useCheckoutUrl()
  const [currentImage, setCurrentImage] = useState(images[0])

  const shirtTitle = useRef<HTMLDivElement>()
  const [initialShirtTitleHeight, setInitialShirtTitleHeight] = useState<
    number | undefined
  >()
  const [canHoverShirt, setCanHoverShirt] = useState(false)
  const [isHoveringShirt, setIsHoveringShirt] = useState(false)
  const [isWrappingText, setIsWrappingText] = useState(true)
  useLayoutEffect(() => {
    setInitialShirtTitleHeight(shirtTitle.current?.clientHeight)

    setTimeout(() => {
      setCanHoverShirt(true)
    }, 500)
  }, [])

  useEffect(() => {
    if (!isHoveringShirt) {
      setTimeout(() => {
        setIsWrappingText(true)
      }, 1000)
    }
  }, [isHoveringShirt])

  const getVariantId = ({ color, model, size }: ShirtOptions) => {
    const variant = shirt.variants.find(
      ({ title }) =>
        title.includes(color) && title.includes(model) && title.includes(size)
    )
    return variant.id.split(`Shopify__ProductVariant__`)[1]
  }

  const getOptionsValueByName = (optionName: string) =>
    options.find(({ name }) => name === optionName).values

  const sizes = getOptionsValueByName('size')
  const models = getOptionsValueByName('model')
  const colors = getOptionsValueByName('color')

  return (
    <Grid gridTemplateRows={'auto'}>
      <ProductSEO
        title={`${title} - Fractal Music Wear`}
        metaDescription={descriptionText}
        image={images[0].src}
        keywords={`${title.replace(' ', ',')}, ${descriptionHtml.replace(
          ' ',
          ','
        )}`}
        product={{
          brand: 'Fractal Music Wear',
          descriptionText,
          images: images.map(({ src }) => src),
          sku,
          price: parseFloat(price).toFixed(2),
          name: title,
          url: `https://fractalmw.com.br/produto/${sku}`
        }}
      />

      <ShirtBreadcrumb category={'test'} title={title} my={2} />

      <Grid
        as="main"
        display={'grid'}
        gridTemplateColumns={{ md: '50vw 1fr' }}
        gridGap={2}
      >
        <Flex direction="column" gridArea={'1 / 1'}>
          <Heading
            as="h1"
            ref={shirtTitle}
            bg={'red.500'}
            w={!isHoveringShirt ? '500px' : '10px'}
            h={`${initialShirtTitleHeight}px`}
            color={!isWrappingText ? 'transparent' : 'white'}
            transition={'width .8s ease-in;'}
            display={'flex'}
            whiteSpace={!isWrappingText ? 'nowrap' : 'unset'}
            flexDirection={'column'}
            justifyContent={'center'}
            p={2}
            zIndex={2}
            textTransform={'uppercase'}
          >
            {title}
          </Heading>

          <Heading
            gridArea={{ md: '2' }}
            fontSize={'lg'}
            my={'10px'}
            background={'red'}
            w={!isHoveringShirt ? '100px' : '10px'}
            whiteSpace={!isWrappingText ? 'nowrap' : 'unset'}
            color={!isWrappingText ? 'transparent' : 'white'}
            transition={'width .8s ease-in'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            bg={'red.500'}
            p={2}
            zIndex={2}
          >
            {numberToBRL(parseFloat(price))}
          </Heading>
        </Flex>

        <Grid
          gridArea={{ base: '1 / 1', md: '1 / 1 / 6' }}
          mt={`calc(${shirtTitle.current?.clientHeight}px - 36px)`}
          onMouseEnter={() => {
            console.log('HOVERING SHIRT!@')
            if (canHoverShirt) {
              setIsWrappingText(false)
              setIsHoveringShirt(true)
            }
          }}
          onMouseLeave={() => {
            setIsHoveringShirt(false)
          }}
          height={'80vh'}
          gridTemplateColumns={'15% 1fr 15%'}
        >
          <Box
            gridColumn={2}
            as={GatsbyImage}
            height={{ md: '50vh' }}
            width={{ md: '50vh' }}
            fluid={currentImage.localFile.childImageSharp.fluid}
            alt={currentImage.altText}
          />

          <Stack
            gridColumn={'1 / -1'}
            isInline
            alignSelf={'center'}
            mt={'10px'}
            height={'110px'}
            width={'100%'}
            padding={'5px'}
          >
            {shirt.images.map(
              ({
                altText,
                localFile: {
                  childImageSharp: { fluid }
                }
              }) => {
                return (
                  <Box
                    width={'100px'}
                    cursor="pointer"
                    mr={'10px'}
                    onClick={() => setCurrentImage(fluid)}
                  >
                    <GatsbyImage
                      fluid={fluid}
                      alt={altText}
                      imgStyle={{ maxHeight: '99px' }}
                    />
                  </Box>
                )
              }
            )}
          </Stack>
        </Grid>

        <ShirtDescription
          description={descriptionHtml}
          gridArea={{ md: '1 / 2' }}
          fontWeight={'medium'}
          textAlign={'left'}
          maxW={{ md: '455px' }}
        />

        <BuyForm
          gridArea={{ md: '2 / 2' }}
          colors={colors}
          models={models}
          sizes={sizes}
          mt={'15px'}
          maxW={'455px'}
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
          description={descriptionText}
          gridArea={{ lg: '6 / 1 / 6 / 3' }}
          textAlign={'left'}
          p={'2em'}
        />
      </Grid>

      <Grid
        as="section"
        // gridArea={{'4 / 2 / 4 / 4'}}
        background={'#F3F3F3'}
        alignItems={'center'}
        justifyItems={'center'}
        p={{ base: '0', md: '2em' }}
      >
        <Flex
          as="article"
          direction={{ md: 'column' }}
          justifyContent={'space-around'}
          alignItems={{ base: 'center', md: 'start' }}
          width={'100%'}
          gridArea={{ base: '1', md: '1 / span 2', md: 'unset' }}
          fontSize={{ base: 'sm', md: 'md' }}
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
                100% Amdodão
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
            base: '3',
            md: '3 / 1',
            md: 'unset'
          }}
          p={'1em'}
          htmlWidth={'300'}
          htmlHeight={300}
        />

        <Table
          gridArea={{ base: '2', md: '3', md: '1 / 3 / 3 / 3' }}
          // padding={'1em'}
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
          <Text fontWeight={'lighter'} mb={'1em'}>
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

export const ShirtPageQuery = graphql`
  query ProductPages($pageId: String!) {
    allShopifyProduct(filter: { id: { eq: $pageId } }) {
      nodes {
        id
        title
        handle
        priceRange {
          minVariantPrice {
            amount
          }
        }
        productType
        images {
          altText
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        options {
          values
        }
        variants {
          id
          title
          price
          sku
        }
        description
        descriptionHtml
        options {
          name
          values
        }
      }
    }
  }
`
