import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  AllMyBook: [],
  MyBooks: {
    Currently: [],
    Want: [],
    Read: [],
  },
  Book: [],
  loading: false,
  success: false,
  failed: false,
};
export const ApiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    loading: (state) => {
      state.loading = true;
      state.success = false;
      state.failed = false;
    },
    success: (state) => {
      state.success = true;
      state.loading = false;
      state.failed = false;
    },
    failed: (state) => {
      state.success = false;
      state.loading = false;
      state.failed = true;
    },
    Currently: (state, action) => {
      state.MyBooks.Currently = action.payload;
    },
    Want: (state, action) => {
      state.MyBooks.Want = action.payload;
    },
    Read: (state, action) => {
      state.MyBooks.Read = action.payload;
    },
    AllMyBook: (state , action) => {
      state.AllMyBook = action.payload;
    } , 
 
  },
});
export const { loading, success, failed, Currently, Want, Read  ,AllMyBook } =
  ApiSlice.actions;
export default ApiSlice.reducer;
