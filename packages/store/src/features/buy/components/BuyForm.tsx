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
  const { handleSubmit, values, errors, touched, setFieldValue } = useFormik({
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
            {sizes.map((size) => {
              const sizeRadio = getRadioProps({ value: size })
              return (
                <RadioButton {...sizeRadio}>
                  {size.toLocaleUpperCase()}
                </RadioButton>
              )
            })}
          </Flex>
          <FormErrorMessage>{errors.size}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!(errors.quantity && touched.quantity)}>
          <FormLabel htmlFor="quantity" fontWeight={'bold'}>
            Quantidade
          </FormLabel>
          <QuantityInput
            onChange={(val) => setFieldValue('quantity', val)}
            height={'60px'}
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
