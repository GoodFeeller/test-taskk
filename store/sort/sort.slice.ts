import { ISort } from '@/types/sort';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ISort = {
  item: 'priceUsd',
  up: false,
};

export const SortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort: (state, action) => {
      if (action.payload) {
        if (state.item === action.payload) state.up = !state.up;
        else {
          state.item = action.payload;
          state.up = false;
        }
      }
    },
  },
});

export default SortSlice.reducer;
export const { setSort } = SortSlice.actions;
