import { renderHook, act } from '@testing-library/react-hooks'
import { useCart } from './useCart'

describe('Cart Custom Hook', () => {
  it('Should add a cart item successfuly', () => {
    const { result } = renderHook(() => useCart())

    act(() => {
      result.current[1].addItem()
    })

    expect(result.current[0].length).toBe(1)
  })
})
