import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../Redox/slice/createSlice'


export const store = configureStore({
  reducer:{
    counterReducer:counterSlice

  }
})