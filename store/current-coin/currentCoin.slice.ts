import { IStoreCurrentCoin } from '@/types/coin';
import { createSlice } from '@reduxjs/toolkit';
import { getCurrentCoin } from './currentCoin.action';

const initialState: IStoreCurrentCoin = {
  coin: {
    id: '',
    priceUsd: '',
    symbol: '',
    name: '',
    supply: '',
    maxSupply: '',
    rank: '',
    marketCapUsd: '',
    changePercent24Hr: '',
    volumeUsd24Hr: '',
  },
  isLoading: false,
  error: '',
};

export const CurrentCoinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentCoin.pending, (state, _) => {
        (state.isLoading = true), (state.error = '');
      })
      .addCase(getCurrentCoin.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          const err = action.payload as string;
          state.error = err;
        }
      })
      .addCase(getCurrentCoin.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.coin = action.payload;
          state.error = '';
        } else state.error = 'no-data';
      });
  },
});

export default CurrentCoinsSlice.reducer;
