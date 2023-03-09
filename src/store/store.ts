import { configureStore } from '@reduxjs/toolkit'
import {restaurantSlice} from './counter/restaurantSlice'
import {locationSlice} from './counter/locationSlice'
// ...

export const store = configureStore({
  reducer: {
    restaurant: restaurantSlice.reducer,
    location:locationSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch