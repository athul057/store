import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/Cartslice";



export const store = configureStore({
 reducer: {
  cartstate: cartReducer,
 }
})