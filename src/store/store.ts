import { configureStore } from '@reduxjs/toolkit'
import {restaurantSlice} from './counter/restaurantSlice'
import {locationSlice} from './counter/locationSlice'
import {favouriteSlice} from './counter/favouriteSlice'
// ...

export const store = configureStore({
  reducer: {
    restaurant: restaurantSlice.reducer,
    location:locationSlice.reducer,
    favourite:favouriteSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch