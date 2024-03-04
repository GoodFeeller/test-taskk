import { IStoreCoins } from '@/types/coin';
import { createSlice } from '@reduxjs/toolkit';
import { getAssets } from './coins.actions';

const initialState: IStoreCoins = {
  coins: [],
  isLoading: false,
  error: '',
};

export const CoinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAssets.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getAssets.rejected, (state, action) => {
        const error = action.payload as string;
        state.error = error;
        state.isLoading = false;
      })
      .addCase(getAssets.fulfilled, (state, action) => {
        if (action.payload) {
          state.coins = action.payload;
          state.error = '';
          state.isLoading = false;
        }
      });
  },
});

export default CoinsSlice.reducer;
