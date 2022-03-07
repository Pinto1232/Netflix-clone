/**
   Author: Pinto Manuel
   Title: Redux Store
   function: Store all the user into a global store
*/
import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user: null,
  },

  //Create actions
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    }
  },
});

export const {login, logout} = userSlice.actions;


// Store the actions into the global store
export const selectUser = state => state.user.user;


export default userSlice.reducer;
