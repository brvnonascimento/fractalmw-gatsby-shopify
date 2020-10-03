import slugify from 'slugify'

export const toSlug = (value: string) =>
  slugify(value, {
    locale: 'pt-BR',
    lower: true,
    strict: true
  })
