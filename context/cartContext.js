import { createContext, useContext, useState } from 'react'

const LocalStateContext = createContext()
const LocalStateProvider = LocalStateContext.Provider

function CartStateProvider({ children }) {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartProducts, setCartProducts] = useState([])

  function toggleCart() {
    setCartOpen(!cartOpen)
  }

  function openCart() {
    setCartOpen(true)
  }

  function closeCart() {
    setCartOpen(false)
  }

  function addToCart(item) {
    setCartProducts([...cartProducts, item])
    openCart()
  }

  function clearCart() {
    setCartProducts([])
    closeCart()
  }

  function getCartQuantity() {
    return cartProducts.length
  }

  return (
    <LocalStateProvider
      value={{
        cartOpen,
        toggleCart,
        openCart,
        closeCart,
        cartProducts,
        addToCart,
        clearCart,
        getCartQuantity,
      }}
    >
      {children}
    </LocalStateProvider>
  )
}

function useCart() {
  const all = useContext(LocalStateContext)
  return all
}

export { CartStateProvider, useCart }
