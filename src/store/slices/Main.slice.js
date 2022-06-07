import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    SearchPage: false,
}
export const MainSlice = createSlice({
    name: "Main",
    initialState,
    reducers: {
        showSearchPage: (state) => {
            state.SearchPage = true ;
        },
        hideSearchPage: (state) => {
            state.SearchPage = false ;
        }
    }
});
export const {showSearchPage,hideSearchPage}  = MainSlice.actions;
export default MainSlice.reducer;