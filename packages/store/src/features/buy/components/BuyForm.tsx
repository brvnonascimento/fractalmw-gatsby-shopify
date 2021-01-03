import React from 'react'
import { useFormik } from 'formik'
import {
  Box,
  BoxProps,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  useRadioGroup
} from '@chakra-ui/react'
import { QuantityInput } from './QuantityInput'
import CartSvg from '../../../assets/cart.svg'
import { RadioButton } from '../../../components/RadioButton'
import { CheckIcon } from '@chakra-ui/icons'

export interface BuyFormFieldsProps {
  quantity: number
  model: string
  color: string
  size: string
}

interface BuyFormProps extends BoxProps {
  handleBuySubmit: (props: BuyFormFieldsProps) => void | Promise<void>
  isLoadingSubmit?: boolean
  models: string[]
  colors: string[]
  sizes: string[]
}

export const BuyForm = ({
  handleBuySubmit,
  isLoadingSubmit,
  models,
  colors,
  sizes,
  ...props
}: BuyFormProps) => {
  const {
    handleSubmit,
    errors,
    touched,
    setFieldValue,
    values: { color: currentColor }
  } = useFormik({
    initialValues: {
      quantity: '1',
      model: models[0],
      color: colors[0],
      size: ''
    },
    onSubmit: ({ quantity, ...values }) =>
      handleBuySubmit({ ...values, quantity: parseInt(quantity) }),
    validate: (values) => {
      if (values.size.length === 0) {
        return {
          size: 'Por favor, escolha um tamanho.'
        }
      }
    }
  })

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'size',
    onChange: (val) => setFieldValue('size', val)
  })
  const sizesRadioGroup = getRootProps()

  const {
    getRootProps: getColorRootProps,
    getRadioProps: getColorRadioProps
  } = useRadioGroup({
    name: 'size',
    onChange: (val) => setFieldValue('color', val)
  })
  const colorsRadioGroup = getColorRootProps()

  return (
    <Box
      as="form"
      display={'flex'}
      flexDirection={'column'}
      onSubmit={handleSubmit}
      {...props}
    >
      <Flex direction="column">
        <FormControl
          isInvalid={!!(errors.model && touched.model)}
          mb={'1em'}
          id={'model'}
        >
          <FormLabel htmlFor="model" fontWeight={'bold'}>
            Modelo
          </FormLabel>
          <Select
            display={'flex'}
            width={{ base: '100%', md: '50%' }}
            id="model"
            borderBottom={'2px'}
            border={0}
            borderRadius={0}
            fontWeight={'medium'}
          >
            {models.map((model) => (
              <option key={model}>{model}</option>
            ))}
          </Select>
          <FormErrorMessage>{errors.model}</FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={!!(errors.size && touched.size)}
          display={'flex'}
          flexDirection={'column'}
          alignContent={'center'}
          mb={'1em'}
          id={'tamanho'}
        >
          <FormLabel fontWeight={'bold'}>Tamanho</FormLabel>
          <Flex {...sizesRadioGroup}>
            {sizes.map((size) => (
              <RadioButton
                {...getRadioProps({ value: size })}
                containerProps={{
                  w: { base: '100%', md: '70%' },
                  justifyContent: {
                    base: 'space-around',
                    md: 'space-between'
                  }
                }}
                cursor="pointer"
                w={'50px'}
                h={'50px'}
                py={3}
                mr={2}
                borderColor={'black'}
                borderWidth={'2px'}
                color={'black'}
                fontWeight={'medium'}
                borderRadius={'md'}
                _checked={{
                  bg: 'black',
                  color: 'white',
                  border: 0
                }}
                _focus={{
                  boxShadow: 'outline'
                }}
                alignItems={'center'}
                justifyContent={'center'}
                textAlign={'center'}
              >
                {size.toLocaleUpperCase()}
              </RadioButton>
            ))}
          </Flex>
          <FormErrorMessage>{errors.size}</FormErrorMessage>
        </FormControl>

        <FormControl
          id={'cor'}
          isInvalid={!!(errors.color && touched.color)}
          d={'flex'}
          flexDirection={'column'}
          alignContent={'center'}
          mb={'1em'}
        >
          <FormLabel fontWeight={'bold'}>Cor</FormLabel>
          <Flex {...colorsRadioGroup}>
            {colors.map((color) => (
              <RadioButton
                {...getColorRadioProps({ value: color })}
                containerProps={{
                  justifyContent: 'space-around',
                  pr: '10px'
                }}
                position={'relative'}
                opacity={currentColor === color ? 0.8 : undefined}
                bg={color.toLowerCase()}
                w={'50px'}
                h={'50px'}
                rounded={'100%'}
                border={'1px'}
              >
                {currentColor === color && (
                  <CheckIcon
                    position={'absolute'}
                    w={'25px'}
                    h={'25px'}
                    top={'28%'}
                    left={'25%'}
                    color={
                      currentColor.toLowerCase() !== 'white' ? 'white' : 'black'
                    }
                  />
                )}
              </RadioButton>
            ))}
          </Flex>
          <FormErrorMessage>{errors.color}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!(errors.quantity && touched.quantity)}>
          <FormLabel htmlFor="quantity" fontWeight={'bold'}>
            Quantidade
          </FormLabel>
          <QuantityInput
            onChange={(val) => setFieldValue('quantity', val)}
            h={'60px'}
            w={{ md: '100px' }}
            id={'quantity'}
          />
          <FormErrorMessage>{errors.quantity}</FormErrorMessage>
        </FormControl>
      </Flex>

      <Button
        type="submit"
        isLoading={isLoadingSubmit}
        leftIcon={
          <CartSvg
            width={'24px'}
            height={'24px'}
            fill="white"
            style={{ marginRight: '1em' }}
          />
        }
        variant={'outline'}
        bg={'black'}
        borderRadius={0}
        _hover={{
          bg: 'gray.700'
        }}
        color={'white'}
        borderWidth={'2px'}
        mt={'15px'}
        alignSelf={'center'}
        justifySelf={'center'}
        minHeight={'50px'}
        width={'100%'}
      >
        Adicionar ao Carrinho!
      </Button>
    </Box>
  )
}
