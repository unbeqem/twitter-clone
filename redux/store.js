import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './modalSlice.js'
import userSlice from './userSlice.jsx'

export const store = configureStore({
  reducer: {
    modals: modalSlice,
    user: userSlice
  },
})
