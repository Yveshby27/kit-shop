import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  kitsArray: [
    { url: "/milan_kit.jpg", name: "AC Milan" },
    { url: "/rma_kit.webp", name: "Real Madrid" },
    { url: "/roma_kit.jpg", name: "AS Roma" },
    { url: "/spurs_kit.jpg", name: "Tottenham Hotspur" },
    { url: "/bayern_kit.avif", name: "Bayern Munich" },
    { url: "/chelsea_kit.jpg", name: "Chelsea" },
    { url: "/bvb_kit.webp", name: "Borussia Dortmund" },
    { url: "/psg_kit.jpg", name: "Paris Saint Germain" },
  ],
  retroKitsArray: [
    { url: "/retro_milan_kit.webp", name: "AC Milan 1995-1996" },
    { url: "/retro_barca_kit.jpg", name: "FC Barcelona 1998-1999" },
    { url: "/retro_manutd_kit.avif", name: "Manchester United 1993-1994" },
    { url: "/retro_juventus_kit.jpg", name: "Juventus 1984-1985" },
  ],
  showFirstKitBatch: true,
};
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    switchKitBatch: (state) => {
      state.showFirstKitBatch = !state.showFirstKitBatch;
    },
  },
});

const homeReducer = homeSlice.reducer;
const homeActions = homeSlice.actions;

export default homeReducer;
export { homeActions };
