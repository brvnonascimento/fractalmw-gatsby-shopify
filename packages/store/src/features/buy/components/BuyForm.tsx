import React from 'react'
import { Formik, Field } from 'formik'
import {
  Box,
  BoxProps,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Radio,
  RadioGroup,
  Select
} from '@chakra-ui/core'
import { QuantityInput } from './QuantityInput'

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
  const validateFields = (value: string): string | undefined => {
    console.log(value)
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
          gridColumn={'2'}
          gridRow={'span 2'}
          display={'flex'}
          flexDirection={'column'}
          {...props}
        >
          <Field
            name="model"
            validate={(value: string) => validateFields(value)}
          >
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="model" fontWeight={'bold'}>
                  Modelo
                </FormLabel>
                <Select display={'flex'} width={'50%'} id="model">
                  {models.map((model) => (
                    <option {...field} key={model}>
                      {model}
                    </option>
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
              >
                <FormLabel htmlFor="size" fontWeight={'bold'}>
                  Tamanho
                </FormLabel>
                <RadioGroup
                  isInline
                  spacing={4}
                  display={'flex'}
                  alignItems={'center'}
                  name="size"
                  onChange={form.handleChange}
                >
                  {sizes.map((size) => (
                    <Radio {...field} value={size} size="lg" key={size}>
                      {size?.toLocaleUpperCase()}
                    </Radio>
                  ))}
                  <FormErrorMessage
                    alignSelf={'center'}
                    marginTop={0}
                    height={'100%'}
                  >
                    {form.errors.size}
                  </FormErrorMessage>
                </RadioGroup>
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

          <Button
            type="submit"
            mt={'15px'}
            alignSelf={'center'}
            justifySelf={'center'}
            minHeight={'50px'}
            width={'100%'}
            background={'rgba(0, 256, 0, 0.7)'}
            color={'black'}
          >
            Adicionar ao Carrinho!
          </Button>
        </Box>
      )}
    </Formik>
  )
}
