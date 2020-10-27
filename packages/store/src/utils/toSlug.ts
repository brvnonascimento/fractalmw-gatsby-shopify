import slugify from 'slugify'

export const toSlug = (value: string) =>
  slugify(value, {
    lower: true
  })
