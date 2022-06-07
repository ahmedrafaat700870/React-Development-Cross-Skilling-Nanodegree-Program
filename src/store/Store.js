import { configureStore } from "@reduxjs/toolkit";
import MainSlices from "./slices/Main.slice";
import ApiSlice from "./slices/Api.Slice";
const Store = configureStore({
  reducer: {
    main: MainSlices,
    api: ApiSlice,
  },
});
export default Store;
