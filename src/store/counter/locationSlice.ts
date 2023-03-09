import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface locationSlice {

  keyword:any,
  location:any,
  isLoading:Boolean,
  error:any,
}

const initialState: locationSlice = {

  keyword:"san francisco",
  location:null,
  isLoading:false,
  error:null,
}

export const locationSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setKeyword: (state,action) => {
      state.keyword = action.payload
    },
    setLocation: (state,action) => {
        state.location = action.payload
      },
      setIsLoading: (state,action) => {
        state.isLoading = action.payload
      },
      setError: (state,action) => {
        state.error = action.payload
      },
  },
})

export const { setKeyword, setLocation , setIsLoading ,setError } = locationSlice.actions

export const selectCount = (state: RootState) => state.location

export default locationSlice.reducer