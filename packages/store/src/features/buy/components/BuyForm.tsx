import React from 'react'
import { Formik, Field } from 'formik'
import {
  Box,
  BoxProps,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Radio,
  RadioGroup,
  Select,
  useRadio
} from '@chakra-ui/react'
import { QuantityInput } from './QuantityInput'
import CartSvg from '../../../assets/cart.svg'

interface BuyFormProps extends BoxProps {
  onSubmit: (props: any) => void
  models: string[]
  colors: string[]
  sizes: string[]
}

export interface BuyFormFieldsProps {
  quantity: number
  model: string
  color: string
  size: string
}

export const BuyForm = ({
  onSubmit,
  models,
  colors,
  sizes,
  ...props
}: BuyFormProps) => {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  const validateFields = (value: string): string | undefined => {
    if (!value) {
      return 'Campo obrigatório.'
    }

    return undefined
  }

  return (
    <Formik
      initialValues={{
        quantity: 1,
        model: models[0],
        color: colors[0],
        size: null
      }}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <Box
          as="form"
          onSubmit={handleSubmit}
          display={'flex'}
          flexDirection={'column'}
          {...props}
        >
          <Flex direction="column">
            <Field
              name="model"
              validate={(value: string) => validateFields(value)}
            >
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.name && form.touched.name}
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
                    {...field}
                  >
                    {models.map((model) => (
                      <option key={model}>{model}</option>
                    ))}
                  </Select>
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field
              name="size"
              validate={(value: string) => validateFields(value)}
            >
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.size && form.touched.size}
                  display={'flex'}
                  flexDirection={'column'}
                  alignContent={'center'}
                  mb={'1em'}
                  id={'tamanho'}
                >
                  <FormLabel fontWeight={'bold'}>Tamanho</FormLabel>
                  <Box
                    as="label"
                    d={'flex'}
                    w={{ base: '100%', md: '70%' }}
                    justifyContent={{
                      base: 'space-around',
                      md: 'space-between'
                    }}
                  >
                    <input {...input} />
                    {sizes.map((size) => (
                      <Box
                        {...checkbox}
                        {...field}
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
                          bg: 'purple.800',
                          color: 'white',
                          borderColor: 'teal.600'
                        }}
                        _focus={{
                          boxShadow: 'outline'
                        }}
                        alignItems={'center'}
                        justifyContent={'center'}
                        textAlign={'center'}
                      >
                        {size?.toLocaleUpperCase()}
                      </Box>
                    ))}
                  </Box>
                  <FormErrorMessage>{form.errors.size}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field
              name="quantity"
              validate={(value: string) => parseInt(value) <= 0}
            >
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.quantity && form.touched.quantity}
                >
                  <FormLabel htmlFor="quantity" fontWeight={'bold'}>
                    Quantidade
                  </FormLabel>
                  <QuantityInput
                    onChange={(val) => form.setFieldValue(field.name, val)}
                    height={'60px'}
                    id={'quantity'}
                  />
                  <FormErrorMessage>{form.errors.quantity}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </Flex>

          <Button
            type="submit"
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
      )}
    </Formik>
  )
}
