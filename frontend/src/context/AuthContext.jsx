import React, { createContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart, setCartItems } from '../redux/cartSlice';

export const AuthContext = createContext();

const getUserCart = (userId) => {
  if (!userId) return []
  const userCartKey = `cartItems_${userId}`
  const stored = localStorage.getItem(userCartKey)
  return stored ? JSON.parse(stored) : []
}

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('userInfo')
    return stored ? JSON.parse(stored) : null
  });

  const login = (userData) => {
    setUser(userData)
    localStorage.setItem('userInfo', JSON.stringify(userData))
    if (userData?.token) {
      localStorage.setItem('token', userData.token)
    }
    dispatch(setCartItems(getUserCart(userData?._id)))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('userInfo')
    localStorage.removeItem('token')
    dispatch(clearCart())
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};