import React, { memo } from 'react'
import { Box, BoxProps, Heading, Image } from '@chakra-ui/react'
import GatsbyImage from 'gatsby-image'
import { numberToBRL } from '../utils/price'

export const ShirtItem = memo(
  ({ title, image, priceRange, ...props }: BoxProps) => {
    return (
      <Box
        as="article"
        position={'relative'}
        h={'100%'}
        backgroundColor={'gray.50'}
        {...props}
      >
        {image?.localFile?.childImageSharp?.fluid ? (
          <Box
            as={GatsbyImage}
            loading="lazy"
            fluid={image.localFile.childImageSharp.fluid}
            alt={image.altText}
            imgStyle={{
              mixBlendMode: 'multiply'
            }}
          />
        ) : (
          <Image 
            src={image.src}
            alt={image.alt}
            fallbackSrc={image.fallbackSrc}
            mixBlendMode={'multiply'}
          />
        )}

        <Heading
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
          d={'inline-block'}
          position={'absolute'}
          p={2}
          top={0}
          right={0}
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
