import React, {
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
  createContext,
  useEffect, useRef
} from 'react'

export interface CartItem {
  id: string
  title: string
  sku: string
  image: {
    src: string
    fallbackSrc: string
    alt: string
  }
  quantity: number
  price: number
  color: string
  size: string
  model: string
}

export interface UseCartProps {
  onAddCart?: () => void
}

type IUseCart = [
  CartItem[],
  {
    cartQuantity: number
    totalPrice: number
    addItemToCart: (item: CartItem) => void
    removeItemFromCart: (id: string) => void
    updateItemFromCart: (id: string) => void
    saveCartItemToLocalStorage: () => void
    getCartItemsFromLocalStorage: () => CartItem[] | null
  }
]

type CartState = [CartItem[], React.Dispatch<React.SetStateAction<CartItem[]>>]
export const CartContext = createContext<null | CartState>(null)
export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([])

  return (
    <CartContext.Provider value={[items, setItems]}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = (props?: UseCartProps): IUseCart => {
  const cart = useContext(CartContext)
  if (!cart) {
    throw new Error('An instance of the Cart Provider must be given.')
  }
  const [items, setItems] = cart

  const isAddingItem = useRef(false)

  useEffect(() => {
    const items = getCartItemsFromLocalStorage()

    if (items) {
      setItems(items)
    }
  }, [])

  useEffect(() => {
    if(isAddingItem.current && props?.onAddCart) {
      props.onAddCart()
      isAddingItem.current = false
    }
  }, [items])

  const cartQuantity = useMemo((): number => items.length, [items])

  const totalPrice = useMemo(
    (): number => items.reduce((total, { price }) => (total += price), 0),
    [items]
  )

  const getCartItemsFromLocalStorage = (): CartItem[] | null => {
    const localStorageItems = localStorage.getItem('cart')
    if (!localStorageItems) {
      return null
    }

    const items = JSON.parse(localStorageItems)
    return items as CartItem[]
  }

  const saveCartItemToLocalStorage = useCallback(
    () => localStorage.setItem('cart', JSON.stringify(items)),
    [items]
  )

  const addItemToCart = (newItem: any): void => {
    isAddingItem.current = true    
    setItems([...items, newItem])
  }

  const removeItemFromCart = (id: string): void =>
    setItems(items.filter((item) => item.id === id))

  const updateItemFromCart = (id: string): void => {
    const index = items.findIndex((item) => item.id === id)

    setItems([
      ...items.slice(0, index),
      items[index],
      ...items.slice(index + 1)
    ])
  }

  return [
    items,
    {
      cartQuantity,
      totalPrice,
      addItemToCart,
      removeItemFromCart,
      updateItemFromCart,
      saveCartItemToLocalStorage,
      getCartItemsFromLocalStorage
    }
  ]
}
