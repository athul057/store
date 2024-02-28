import { createSlice } from "@reduxjs/toolkit"



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


const initialState = {
 user: { username: 'athul' },
 theme: getLocalStorageTheme(),
}


const userSlice = createSlice({
 name: 'user',
 initialState,
 reducers: {
  loginUser: (state, action) => {
   console.log("login")
  },
  logoutUser: (state, action) => {
   console.log("logout")
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