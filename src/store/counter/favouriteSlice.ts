import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface favouriteSlice {

    favourites:[],
}

const initialState: favouriteSlice = {

    favourites:[],
}

export const favouriteSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setFavourites: (state,action) => {
      state.favourites = action.payload
    },
  },
})

export const { setFavourites } = favouriteSlice.actions

export const selectCount = (state: RootState) => state.location

export default favouriteSlice.reducer