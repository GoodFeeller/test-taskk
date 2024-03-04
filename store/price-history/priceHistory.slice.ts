import { IStorePriceHistory } from '@/types/priceHistory';
import { createSlice } from '@reduxjs/toolkit';
import { getPriceHistory } from './priceHistory.action';

const initialState: IStorePriceHistory = {
  history: [],
  isLoading: false,
  error: '',
};

export const PriceHistorySlice = createSlice({
  name: 'priceHistory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPriceHistory.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getPriceHistory.rejected, (state, action) => {
        const error = action.payload as string;
        state.error = error;
        state.isLoading = false;
      })
      .addCase(getPriceHistory.fulfilled, (state, action) => {
        if (action.payload) {
          state.history = action.payload;
          state.error = '';
          state.isLoading = false;
        }
      });
  },
});

export default PriceHistorySlice.reducer;
