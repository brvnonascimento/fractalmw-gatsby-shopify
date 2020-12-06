import {
  Box,
  Grid,
  GridProps,
  Heading,
  Img,
  Link,
  List,
  ListItem,
  Tooltip
} from '@chakra-ui/react'
import GatsbyLink from 'gatsby-link'
import React, { memo } from 'react'
import { ShopifyIcon } from '../../components/icons'
import { InfoIcon } from '@chakra-ui/icons'
import { LogoIcon } from '../../components/icons/LogoIcon'
import { PagseguroIcon } from '../../components/icons/PagseguroIcon'
import { PaypalIcon } from '../../components/icons/PaypalIcon'

const links = [
  {
    to: '/sobre',
    name: 'Sobre'
  },
  {
    to: '/contato',
    name: 'Contato'
  },
  {
    to: '/politica-de-privacidade',
    name: 'Política de Privacidade'
  },
  {
    to: '/politica-de-troca',
    name: 'Política de Troca'
  }
]

export const Footer = memo(({ ...props }: GridProps) => (
  <Grid
    as="footer"
    gridTemplateColumns={{
      lg: 'repeat(auto-fit, minmax(150px, 1fr))'
    }}
    minChildWidth={'150px'}
    alignItems={'center'}
    gridRowGap={{
      base: 8,
      lg: 2
    }}
    py={2}
    mb={{
      base: '40px',
      lg: 'unset'
    }}
    columnGap={{ lg: '2em' }}
    backgroundColor={'#000000'}
    color="white"
    height={'100%'}
    minHeight={{
      base: '400px',
      lg: '150px'
    }}
    justifyItems={{
      base: 'center',
      lg: 'start'
    }}
    {...props}
  >
    <Link
      as={GatsbyLink}
      to={'/'}
      title={'Home | Fractal Music Wear'}
      alignSelf={'center'}
      justifySelf={'center'}
      gridArea={{ base: '1 / span 3', lg: '1 / 1' }}
    >
      <LogoIcon width="115px" height="115px" />
    </Link>

    <Box
      as="article"
      d={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      w={'200px'}
      justifySelf={'center'}
      gridColumn={{ base: 'span 3', lg: 'unset' }}
    >
      <Heading fontSize={'xs'} textAlign={'center'} mb={2}>
        #FRACTALNASREDES
      </Heading>

      <List d={'flex'} alignItems={'center'} justifyContent={'space-around'}>
        <ListItem>
          <Link
            isExternal
            href="https://www.instagram.com/fractalmusicwear/"
            title={'Nos siga no Instagram'}
          >
            <Img src={'/instagram.svg'} htmlWidth={'48'} htmlHeight={'48'} />
          </Link>
        </ListItem>

        <ListItem>
          <Link
            isExternal
            href="https://www.facebook.com/fractalmusicwear/"
            title={'Nos siga no Facebook!'}
          >
            <Img src={'/facebook.svg'} htmlWidth={'48'} htmlHeight={'48'} />
          </Link>
        </ListItem>

        <ListItem>
          <Link
            isExternal
            href="https://www.youtube.com/channel/UCzZe0jWKtNNO17V2aR9kMxQ"
            title={'Nos assista no Youtube!'}
          >
            <Img src={'/youtube.svg'} htmlWidth={'48'} htmlHeight={'48'} />
          </Link>
        </ListItem>
      </List>
    </Box>

    <List
      fontSize={'xs'}
      alignItems={'start'}
      gridColumn={{
        base: 'span 2',
        lg: 'auto'
      }}
    >
      <Heading fontSize={'sm'} mb={2}>
        Páginas
      </Heading>
      {links.map(({ to, name }) => (
        <ListItem fontWeight={'medium'}>
          <Link as={GatsbyLink} to={to} height={'100%'}>
            {name}
          </Link>
        </ListItem>
      ))}
    </List>

    <List as="ul" fontSize={'xs'} alignItems={'start'}>
      <Heading fontSize={'sm'}>Formas de Pagamento</Heading>
      <ListItem fontWeight={'medium'}>
        <Link
          isExternal
          href={
            'https://pagseguro.uol.com.br/selo/pci/index.html?_rnt=dd#rmclƒ'
          }
          title={'PagSeguro'}
          theight={'100%'}
          bg={'white'}
          p={2}
          rounded={'10px'}
        >
          <PagseguroIcon w={'100px'} h={'50px'} aria-label={'Pagseguro'} />
        </Link>
      </ListItem>
      <ListItem fontWeight={'medium'}>
        <Link
          isExternal
          href={'https://www.paypal.com/br/webapps/mpp/purchase-protection'}
          title={'Paypal'}
          height={'100%'}
          aria-label={'Paypal'}
          bg={'white'}
          p={2}
          rounded={'10px'}
        >
          <PaypalIcon w={'100px'} h={'50px'} />
        </Link>
      </ListItem>
    </List>

    <Tooltip
      label={
        <>
          Todos pagamentos e transações são assegurados pela gigante mundial do
          comércio <b>Shopify</b>. Mais segurança para você e para nós! Clique e
          saiba mais!
        </>
      }
      placement={'top-start'}
    >
      <Link
        href={
          'https://www.shopify.com/pci-compliant?utm_source=secure&amp;utm_medium=shop'
        }
        isExternal
        gridArea={{
          base: '2 / 1 / 2 / 4',
          lg: 'unset'
        }}
      >
        <Box d={'flex'} as="article" fontSize={'sm'} fontWeight={'medium'}>
          <ShopifyIcon h={'64px'} w={'64px'} fill={'gray.50'} mr={2} />
          Essa loja é<br />
          assegurada
          <br /> por Shopify
          <InfoIcon />
        </Box>
      </Link>
    </Tooltip>
  </Grid>
))
