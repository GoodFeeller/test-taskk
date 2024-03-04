import { CoinsService } from '@/service/coins.service';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getPriceHistory = createAsyncThunk(
  'getPriceHistory',
  async (info: { id: string; interval: string }, thunkApi) => {
    try {
      const data = await CoinsService.getPriceHistory(info.id, info.interval);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue('Connection error!');
    }
  }
);
