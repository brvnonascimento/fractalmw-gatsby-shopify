import validator from 'validator'

interface isLengthArgs {
  value: string
  min?: number
  max?: number
}
type locale = validator.MobilePhoneLocale | validator.MobilePhoneLocale

interface ValidatorProps {
  isEmail: (email: string) => boolean
  isEmpty: (value: string) => boolean
  isURL: (url: string) => boolean
  isHexColor: (color: string) => boolean
  isLength: (args: isLengthArgs) => boolean
  isMobilePhone: (phone: string, locale?: locale) => boolean
  isAlphanumeric: (value: string) => boolean
  isNumeric: (value: string) => boolean
}

export const isEmail = (email: string) => validator.isEmail(email)

export const isEmpty = (value: string): boolean =>
  !validator.isLength(value.trim(), { min: 1 })

export const isLength = ({ value, min, max }: isLengthArgs) =>
  validator.isLength(value, { min, max })

export const isMobilePhone = (phone: string, locale: locale = 'pt-BR') =>
  validator.isMobilePhone(phone, locale)

export const isAlphanumeric = (value: string) => validator.isAlphanumeric(value)
export const isNumeric = (value: string) => validator.isNumeric(value)
export const isURL = (url: string) => validator.isURL(url)
export const isHexColor = (color: string) => validator.isHexColor(color)

export const fieldValidator: ValidatorProps = {
  isEmail,
  isEmpty,
  isHexColor,
  isLength,
  isMobilePhone,
  isURL,
  isAlphanumeric,
  isNumeric
}
