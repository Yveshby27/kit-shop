import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../slices/homeSlice";
import contactUsReducer from "../slices/contactUsSlice";
const store = configureStore({
  reducer: {
    home: homeReducer,
    contactUs: contactUsReducer,
  },
});
export default store;
