import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  userList: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadgetUsers: (state, action) => {
      state.userList = action.payload;
    },
    deleteUserAndRefresh: (state, action) => {
      state.userList = state.userList.filter(
        (user) => user._id !== action.payload
      );
    },
  },
});

export const { loadgetUsers, deleteUserAndRefresh } = userSlice.actions;

export default userSlice.reducer;
