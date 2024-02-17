import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
 cartItems: [],
 amount: 0,
 number: 0,
};

const cartslice = createSlice({
 name: 'cart',
 initialState: initialstate,
 reducers: {
  removeItem: (state, action) => {
   console.log("remove")
  },
  addtoBag: (state, action) => {
   console.log("add")
  },
 }
})

const Cartslice = () => {
 return <h1>cart</h1>
}
export const { removeItem, addtoBag } = cartslice.actions;
export default cartslice.reducer;