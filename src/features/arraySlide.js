import { createSlice } from "@reduxjs/toolkit";

const arraySlide = createSlice({
    name: "array",
    initialState: {
      array: [],
      isSorting: false,
    },
    reducers: {
      addArr: (state, action) => {
        state.array = action.payload; // Directly mutate the array
      },
      loadingInverse: (state, action) => {
        state.isSorting = action.payload; // Fix: Use `isSorting` instead of `loading`
      },
      updateArray: (state, action) => {
        const { start, end, returnArry } = action.payload;
        // Mutate the `state.array` property
        state.array = [
          ...state.array.slice(0, start),
          ...returnArry,
          ...state.array.slice(end),
        ];
      },
    },
  });

export const { addArr,loadingInverse,updateArray } = arraySlide.actions;
export default arraySlide.reducer;