import { configureStore } from '@reduxjs/toolkit'

import apiSlice from './material'
import classSlice from './class'


export const store = configureStore({
  reducer: {
    materialSlice: apiSlice,
    classSlice: classSlice
  },
})

