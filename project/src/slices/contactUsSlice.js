import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  isSubmitted: false,
};

const contactUsSlice = createSlice({
  name: "contactUs",
  initialState,
  reducers: {
    switchIsSubmitted: (state) => {
      state.isSubmitted = !state.isSubmitted;
    },
    saveName: (state, action) => {
      state.name = action.payload;
    },
  },
});

const contactUsReducer = contactUsSlice.reducer;
const contactUsActions = contactUsSlice.actions;

export default contactUsReducer;
export { contactUsActions };
