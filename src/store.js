import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/Cartslice";
import userReducer from "./features/user/Userslice";



export const store = configureStore({
 reducer: {
  cartstate: cartReducer,
  userState: userReducer,
 }
})