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
  },
});

export const { loadgetUsers } = userSlice.actions;

export default userSlice.reducer;
