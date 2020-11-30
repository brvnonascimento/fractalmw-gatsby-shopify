import React, { memo, useLayoutEffect, useRef, useState } from 'react'
import { Box, BoxProps, Heading } from '@chakra-ui/react'
import GatsbyImage from 'gatsby-image'
import { numberToBRL } from '../utils/price'

export const ShirtItem = memo(
  ({ title, image, priceRange, ...props }: BoxProps) => {
    const shirtTitle = useRef<HTMLHeadingElement | null>(null)
    const [shirtTitleHeight, setShirtTitleHeight] = useState<number | null>(
      null
    )

    useLayoutEffect(() => {
      const height = shirtTitle.current?.clientHeight
      if (height) {
        setShirtTitleHeight(height)
      }
    }, [shirtTitle])

    return (
      <Box
        as="article"
        position={'relative'}
        h={'100%'}
        backgroundColor={'gray.50'}
        {...props}
      >
        <Box
          as={GatsbyImage}
          // h={`calc(100% + ${shirtTitleHeight}px)`}
          loading="lazy"
          fluid={image.localFile.childImageSharp.fluid}
          alt={image.altText}
          imgStyle={{
            mixBlendMode: 'multiply'
          }}
        />

        <Heading
          ref={shirtTitle}
          d={'flex'}
          position={'absolute'}
          p={2}
          w={'max-content'}
          bottom={0}
          maxW={'90%'}
          justifyContent={'space-between'}
          bg={'red.600'}
          color={'white'}
          fontWeight={'bold'}
          fontSize={'sm'}
          px={'10px'}
          textTransform={'uppercase'}
          >
          {title}
        </Heading>
        <Heading
          position={'absolute'}
          p={2}
          top={0}
          right={0}
          w={'max-content'}
          variant={'outline'}
          bg={'red.600'}
          color={'white'}
          fontSize={'sm'}
        >
          {numberToBRL(parseFloat(priceRange.minVariantPrice.amount))}
        </Heading>
      </Box>
    )
  }
)
