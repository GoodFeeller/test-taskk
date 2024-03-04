import { CoinsService } from '@/service/coins.service';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCurrentCoin = createAsyncThunk('getCurrentCoin', async (id: string, thunkApi) => {
  try {
    const data = await CoinsService.getCurrentCoin(id);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue('Connection error!');
  }
});
