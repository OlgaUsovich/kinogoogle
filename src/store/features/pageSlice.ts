import { createSlice } from "@reduxjs/toolkit";

const initialState: string = '1';


export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    getNextPage: (state) => {
        state = `${+state + 1}`
    }
  },
});

export default pageSlice.reducer;
