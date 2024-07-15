import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { trialData as initialState } from '../rootStore/initialState';

const slice = createSlice({
  name: 'trial_redux',
  initialState,
  reducers: {
    setTrialRedux: (state, action: PayloadAction<boolean>) => {
      state.booly = action.payload;
    }
  }
});

export const { setTrialRedux } = slice.actions;
export default slice.reducer;
