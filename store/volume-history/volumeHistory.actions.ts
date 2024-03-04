import { CoinsService } from '@/service/coins.service';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getVolumeHistory = createAsyncThunk(
  'getVolumeeHistory',
  async (info: { id: string; interval: string; quote: string; exchange: string }, thunkApi) => {
    try {
      const data = await CoinsService.getVolumeHistory(
        info.id,
        info.interval,
        info.exchange,
        info.quote
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue('Connection');
    }
  }
);
