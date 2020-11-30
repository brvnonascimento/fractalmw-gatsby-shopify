import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  Box,
  Flex,
  Grid,
  Heading,
  Img,
  Link,
  List,
  ListItem,
  Slide,
  Text,
  useBreakpointValue,
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
import { useResize } from '../hooks/useResize'
import { MouseZoom } from '../components/MouseZoom'
import { toSlug } from '../utils/toSlug'
import GatsbyLink from 'gatsby-link'
import { ShirtItem } from '../components/ShirtItem'

interface ShirtOptions {
  size: string
  model: string
  color: string
}

export default ({
  data: {
    shopifyProduct: shirt,
    shopifyCollection: { products: relatedProducts }
  },
  pageContext
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
    description,
    descriptionHtml
  } = shirt
  const { categoryTitle, categoryHandle } = pageContext

  const { onOpen, isOpen, onClose } = useDisclosure()
  const isSmartphone = useBreakpointValue({ base: true, md: false })

  const items = useShopifyCartItems()
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const addItemToCart = useAddItemToCart()
  const removeItemFromCart = useRemoveItemFromCart()
  const checkoutUrl = useCheckoutUrl()

  const [currentImage, setCurrentImage] = useState(images[0])
  const [isHoveringImage, setIsHoveringImage] = useState(false)
  const [canHoverImage, setCanHoverImage] = useState(false)

  useEffect(() => {
    if (!isSmartphone) {
      setTimeout(() => setCanHoverImage(true), 1500)
    }
  }, [])

  const breadcrumb = useRef<HTMLElement>(null)
  const onResize = useResize()
  const breadCrumbHeight = useMemo(() => breadcrumb.current?.clientHeight, [
    onResize
  ])

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
    <Grid rowGap={4} w={'100vw'}>
      <ProductSEO
        title={`${title} - Fractal Music Wear`}
        metaDescription={description}
        image={images[0].src}
        keywords={`${title.replace(' ', ',')}, ${descriptionHtml.replace(
          ' ',
          ','
        )}`}
        product={{
          brand: 'Fractal Music Wear',
          description: description,
          images: images.map(({ originalSrc }) => originalSrc),
          sku: toSlug(title),
          price: parseFloat(price).toFixed(2),
          name: title,
          url: `https://fractalmw.com.br/produto/${sku}`
        }}
      />

      <ShirtBreadcrumb
        ref={breadcrumb}
        shirt={{
          title,
          handle: toSlug(title)
        }}
        category={{
          title: categoryTitle,
          handle: categoryHandle
        }}
        gridArea={'1 / 1'}
        zIndex={1}
        w={{ md: 'max-content' }}
        maxW={{ md: '50vw' }}
        alignSelf={'start'}
        mb={2}
      />

      <Grid
        as="main"
        display={'grid'}
        gridArea={'1 / 1'}
        w={'100vw'}
        gridColumnGap={{ md: '20px' }}
        gridTemplateColumns={{ md: '50vw 1fr' }}
        position={'relative'}
        background={{ md: 'linear-gradient(to right, #f3f3f3 50%, white 50%)' }}
        h={{ md: 'calc(100vh - 92px)' }}
      >
        <Box
          as={Slide}
          direction={'left'}
          in={!isHoveringImage}
          style={{
            transitionDelay: '1',
            display: 'flex',
            flexDirection: 'column',
            gridArea: '1 / 1',
            position: 'absolute',
            top: `calc(${breadCrumbHeight ?? 58}px + 12px)`,
            zIndex: 1,
            height: 'max-content',
            width: isSmartphone ? '100%' : 'max-content'
          }}
        >
          <Heading
            as="h1"
            bg={'red.500'}
            w={'max-content'}
            maxW={{ base: '70%', md: '48vw' }}
            color={'white'}
            display={'flex'}
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
            w={'100px'}
            color={'white'}
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
        </Box>

        <Box
          onMouseOver={() => {
            if (canHoverImage) {
              setIsHoveringImage(true)
            }
          }}
          onMouseLeave={() => setIsHoveringImage(false)}
          gridArea={{ md: '1 / 1 / 3' }}
          alignSelf={'center'}
          justifySelf={{ md: 'center' }}
          mb={{
            base: '15vh',
            md: 'unset'
          }}
          top={!isHoveringImage ? { base: '15vh', md: '7vh' } : 'unset'}
          maxH={!isHoveringImage ? { md: '75vh' } : 'calc(100vh - 92px)'}
          h={!isHoveringImage ? 'unset' : 'calc(100vh - 92px)'}
          w={!isHoveringImage ? { base: '100vw', md: '100%' } : { md: '50vw' }}
          maxW={!isHoveringImage ? { md: '75vh' } : { md: '50vw' }}
          zIndex={!isHoveringImage ? 'unset' : 2}
          position={'relative'}
        >
          <GatsbyImage
            fluid={currentImage?.localFile?.childImageSharp?.fluid}
            alt={currentImage.altText}
            imgStyle={{
              mixBlendMode: 'multiply'
            }}
          />

          <MouseZoom
            scale={2}
            bgColor={'gray.50'}
            canZoom={canHoverImage}
            image={currentImage?.localFile?.childImageSharp?.fluid?.src}
          />
        </Box>

        <Flex
          direction={'column'}
          as={'section'}
          gridArea={{ md: '1 / 2 / 3' }}
          p={{ base: 4, md: 'unset' }}
        >
          <BuyForm
            colors={colors}
            models={models}
            sizes={sizes}
            mt={'15px'}
            maxW={{ md: '455px' }}
            isLoadingSubmit={isAddingToCart}
            handleBuySubmit={async ({
              color,
              model,
              quantity,
              size
            }: BuyFormFieldsProps) => {
              try {
                setIsAddingToCart(true)
                await addItemToCart(
                  getVariantId({ color, model, size }),
                  quantity
                )
                onOpen()
                setIsAddingToCart(false)
              } catch (err) {
                setIsAddingToCart(false)
              }
            }}
          />

          <ShirtDescription
            description={descriptionHtml}
            maxW={{ lg: '60%' }}
            minW={{ lg: '455px' }}
            py={4}
            fontWeight={'medium'}
          />
        </Flex>
      </Grid>

      <Flex as={'aside'} direction={'column'} w={'100vw'} overflowX={'scroll'}>
        <Heading mb={2}>Produtos Relacionados</Heading>
        <List
          d={'flex'}
          gridColumnGap={4}
          overflowX={'scroll'}
          overflowY={'hidden'}
          listStyleType={'none'}
          height={'340px'}
        >
          {relatedProducts.map(({ images: [image], title, priceRange }) => (
            <ListItem
              key={title}
              _hover={{ transform: 'scale(1.1)' }}
              transition={'all .2s ease-in-out'}
              background={'white'}
            >
              <Link
                as={GatsbyLink}
                to={`/produto/${toSlug(title)}`}
                title={title}
              >
                <ShirtItem
                  w={'300px'}
                  title={title}
                  image={image}
                  priceRange={priceRange}
                />
              </Link>
            </ListItem>
          ))}
        </List>
      </Flex>

      <Grid
        as="section"
        w={'100vw'}
        background={'gray.50'}
        alignItems={'center'}
        justifyItems={'center'}
        mb={2}
        p={{ base: '0', md: '2em' }}
      >
        <Flex
          as="article"
          direction={{ md: 'column' }}
          justifyContent={'space-around'}
          alignItems={{ base: 'center', md: 'start' }}
          width={'100%'}
          gridArea={{ base: '1', md: 'unset' }}
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

        <Img
          src="/measures.svg"
          gridArea={{
            base: '3',
            md: 'unset'
          }}
          p={'1em'}
          htmlWidth={'300'}
          htmlHeight={300}
        />

        <Table
          gridArea={{ base: '2', md: '1 / 3 / 3 / 3' }}
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
  query ProductPages($pageId: String!, $categoryHandle: String!) {
    shopifyProduct(id: { eq: $pageId }) {
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
        originalSrc
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
    shopifyCollection(handle: { eq: $categoryHandle }) {
      products {
        id
        title
        handle
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          altText
        }
      }
    }
  }
`
