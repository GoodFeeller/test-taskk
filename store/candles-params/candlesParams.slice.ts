import { IStoreCandlesParams } from '@/types/exchanges';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IStoreCandlesParams = {
  exchange: '',
  coin: '',
};

export const CandlesParamsSlice = createSlice({
  name: 'candlesParams',
  initialState,
  reducers: {
    setCoinId: (state, action) => {
      if (action.payload) {
        state.coin = action.payload;
      }
    },
    setExchangeId: (state, action) => {
      if (action.payload) {
        state.exchange = action.payload;
      }
    },
  },
});

export default CandlesParamsSlice.reducer;
export const { setCoinId, setExchangeId } = CandlesParamsSlice.actions;
