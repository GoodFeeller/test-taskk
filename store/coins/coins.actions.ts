import { CoinsService } from '@/service/coins.service';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAssets = createAsyncThunk('getAssets', async (_, thunkApi) => {
  try {
    const data = await CoinsService.getAssets();
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue('Connection error!');
  }
});
