import {
  Box,
  IconButton,
  Link,
  Text,
  Tooltip,
  useClipboard,
  useDisclosure
} from '@chakra-ui/react'
import { GatsbyBrowser } from 'gatsby'
import React, { useEffect } from 'react'
import { Header } from './fragments/Header'
import { Footer } from './fragments/Footer'
import { WhatsappIcon } from '../components/icons/WhatsappIcon'
import { CopyIcon } from '@chakra-ui/icons'
import { DiscountCouponTooltip } from '../components/DiscountCouponTooltip'
import { COUPON_CODE } from '../constants/coupon'

const page: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return (
    <Box minHeight={'100vh'} maxW={'100vw'} w={'100vw'} >
      <InfoBar />

      <Header />

      {element}

      <Link
        as="a"
        title={'Fale conosco no Whatsapp!'}
        isExternal
        href={'https://wa.me/+5519984311890'}
        position={'fixed'}
        width={{
          base: '48px',
          md: '64px'
        }}
        bottom={{ base: '80px', lg: '33px' }}
        right={{ base: '8px', lg: '31px' }}
        zIndex={3}
        transition={'all .2s ease-in-out'}
        bg={'white'}
        p="5px"
        rounded={'100%'}
        _hover={{
          transform: 'scale(1.3)'
        }}
        _focus={{
          transform: 'scale(1.3)'
        }}
        boxShadow={'md'}
      >
        <WhatsappIcon />
      </Link>

      <Footer position={'relative'} zIndex={4} />
    </Box>
  )
}


const InfoBar = () => {
  const { onCopy, hasCopied } = useClipboard(COUPON_CODE)

  // const { isOpen,  } = useDisclosure({ defaultIsOpen: true })

  // useEffect(() => {
  //   const wasInfoBarDismissed = localStorage.getItem('wasInfoBarDismissed_1')
  // }, [])

  return (
    <Box
      pos={{md: 'sticky'}}
      top={0}
      left={0}
      zIndex={'banner'}
      w={'100vw'}
      d={'flex'}
      flexDir={{
        base: 'column',
        md: 'row'
      }}
      justifyContent={'center'}
      alignItems={'center'}
      textAlign={'left'}
      bg={'black'}
      color={'white'}
      fontWeight={'bold'}
      bg={'red.500'}
      textAlign={'center'}
      letterSpacing={1}
    >
      CUPOM{' '}
      <DiscountCouponTooltip hasCopied={hasCopied}>
        <Text
          as={'span'}
          d={'flex'}
          w={'110px'}
          h={'20px'}
          alignItems={'center'}
          bg={'black'}
          color={'white'}
          mx={2}
          p={1}
          cursor={'pointer'}
          onClick={(e) => {
            e.preventDefault()
            onCopy()
          }}
        >
          {COUPON_CODE}
          <IconButton
            variant={'unstyled'}
            aria-label={'Copiar código do cupom'}
            icon={<CopyIcon />}
            pos={'relative'}
            bottom={'1px'}
          />
        </Text>
      </DiscountCouponTooltip>{' '}
      R$20.00 OFF EM PRODUTOS FRACTAL
    </Box>
  )
}

export default page
