// @ts-nocheck
import { useCartItems } from 'gatsby-theme-shopify-manager'
import { useMemo } from 'react'
import { CartItem } from './useCart'

export const useShopifyCartItems = () => {
  const cartItems = useCartItems()

  if (!cartItems) {
    return []
  }

  const items: CartItem[] = useMemo(
    (): CartItem[] =>
      cartItems.map(({ id, title, image, quantity, price, variant }) => {
        console.log(cartItems[0])
        console.log('variant', variant)
        return {
          id: variant.id,
          title,
          price: parseFloat(variant.price),
          quantity,
          image: {
            alt: variant.image.altText,
            src: variant.image.src,
            fallbackSrc: variant.image.src
          },
          size: variant.selectedOptions.find(({ name }) => name === 'size')
            .value,
          model: variant.selectedOptions.find(({ name }) => name === 'model')
            .value
        }
      }),
    [cartItems]
  )

  return items
}
