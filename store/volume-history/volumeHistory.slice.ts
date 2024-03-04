import { createSlice } from '@reduxjs/toolkit';
import { IStoreVolumeHistory } from '@/types/volumeHistory';
import { getVolumeHistory } from './volumeHistory.actions';

const initialState: IStoreVolumeHistory = {
  history: [],
  isLoading: false,
  error: '',
};

export const VolumeHistorySlice = createSlice({
  name: 'volumeHistory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVolumeHistory.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getVolumeHistory.rejected, (state, action) => {
        const error = action.payload as string;
        state.error = error;
        state.isLoading = false;
      })
      .addCase(getVolumeHistory.fulfilled, (state, action) => {
        if (action.payload) {
          state.history = action.payload;
          state.error = '';
          state.isLoading = false;
        }
      });
  },
});

export default VolumeHistorySlice.reducer;
