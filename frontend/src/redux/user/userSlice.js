"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  userList: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    addToken: (state, action) => {
      state.token = action.payload;
    },
    loadgetUsers: (state, action) => {
      state.userList = action.payload;
    },
    deleteUserAndRefresh: (state, action) => {
      state.userList = state.userList.filter(
        (user) => user._id !== action.payload
      );
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const {
  loadgetUsers,
  deleteUserAndRefresh,
  signInSuccess,
  updateUserSuccess,
  addToken,
} = userSlice.actions;

export default userSlice.reducer;
