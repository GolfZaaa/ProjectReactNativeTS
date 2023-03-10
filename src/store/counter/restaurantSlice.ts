import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { mocks ,mockImages } from '../../services/restaurants/mock';
import camelize from "camelize-ts";
import { restaurantsRequest ,restaurantsTransform } from '../../services/restaurants/restaurants.service';

interface CounterState {

  restaurants:[],
  isLoading:Boolean,
  error:any,
  isToggled:any,
}

const initialState: CounterState = {

  restaurants:[],
  isLoading:false,
  error:null,
  isToggled:false,
}




export const restaurantSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setIsLoading: (state,action) => {
      state.isLoading = action.payload
    },
    setRestaurants:(state,action) =>{
      state.restaurants = action.payload
    },
    setError:(state,action) =>{
      state.error = action.payload
    },
    setIsToggled:(state,action) =>{
      state.isToggled = action.payload
    },
  },
})

export const { setIsLoading ,setRestaurants ,setError,setIsToggled} = restaurantSlice.actions

export const selectCount = (state: RootState) => state.restaurant

export default restaurantSlice.reducer