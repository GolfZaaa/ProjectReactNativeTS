import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { mocks } from '../../services/restaurants/mock';

interface CounterState {
  value: number[],
  loading:any,
}

const initialState: CounterState = {
  value: [1,2,3,4,5,6,7,8],
  loading:"",
}


export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  console.log(location)
  return null
};


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    listres: (state,action) => {
      state.value == action.payload
    },
    setloading: (state,action)=> {
      restaurantsRequest()
    },
    
  },
})

export const { listres, setloading } = counterSlice.actions

export const selectCount = (state: RootState) => state.posts

export default counterSlice.reducer