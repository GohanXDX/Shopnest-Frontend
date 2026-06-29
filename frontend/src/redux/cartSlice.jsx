import { createSlice } from '@reduxjs/toolkit'

const getStorageKey = () => {
  try {
    const storedUser = localStorage.getItem('userInfo')
    const user = storedUser ? JSON.parse(storedUser) : null
    return user ? `cartItems_${user._id}` : 'cartItems_guest'
  } catch {
    return 'cartItems_guest'
  }
}

const loadCartItems = () => {
  const key = getStorageKey()
  const stored = localStorage.getItem(key)
  return stored ? JSON.parse(stored) : []
}

const saveCartItems = (items) => {
  localStorage.setItem(getStorageKey(), JSON.stringify(items))
}

const initialState = {
  cartItems: loadCartItems()
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      const existItem = state.cartItems.find((x) => x.productId === item.productId)
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.productId === item.productId ? item : x
        )
      } else {
        state.cartItems.push(item)
      }
      saveCartItems(state.cartItems)
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x.productId !== action.payload)
      saveCartItems(state.cartItems)
    },
    clearCart: (state) => {
      state.cartItems = []
      localStorage.removeItem(getStorageKey())
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload || []
      saveCartItems(state.cartItems)
    }
  }
})

export const { removeFromCart, clearCart, addToCart, setCartItems } = cartSlice.actions
export default cartSlice.reducer