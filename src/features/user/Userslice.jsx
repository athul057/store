import { createSlice } from "@reduxjs/toolkit"
import { Cart } from "../../Pages";



const themes = {
 light: 'light',
 dark: 'dark',
}
const getLocalStorageTheme = () => {

 const theme = localStorage.getItem('theme') || themes.light;
 const temp = document.documentElement;

 temp.setAttribute('data-theme', theme);
 return theme;

}

const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem('user')) || null;

const initialState = {
 user: getUserFromLocalStorage(),
 theme: getLocalStorageTheme(),
}


const userSlice = createSlice({
 name: 'user',
 initialState,
 reducers: {
  loginUser: (state, action) => {
   const user = { ...action.payload.user, token: action.payload.jwt };
   state.user = user;
   localStorage.setItem('user', JSON.stringify(user));
  },
  logoutUser: (state, action) => {
   state.user = null;
   localStorage.removeItem('user');
  },
  toggleTheme: (state, action) => {
   const { light, dark } = themes;
   state.theme === light ? state.theme = dark : state.theme = light;
   localStorage.setItem('theme', state.theme);
   document.documentElement.setAttribute('data-theme', state.theme);

  }
 }
})


export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;