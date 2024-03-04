import { IStoreInterval, TInterval } from '@/types/intervals';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IStoreInterval = {
  intrval: 'm1',
};

export const SortSlice = createSlice({
  name: 'interval',
  initialState,
  reducers: {
    setCurrInterval: (state, action) => {
      if (action.payload) {
        state.intrval = action.payload;
      }
    },
  },
});

export default SortSlice.reducer;
export const { setCurrInterval } = SortSlice.actions;
