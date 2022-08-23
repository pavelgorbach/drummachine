import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { fetchBank } from './drumpadAPI'
import { Bank } from './types';

export type DrumPadState = {
  bank: Bank | null;
  status: 'idle' | 'loading' | 'failed'
}

const initialState: DrumPadState = {
  bank: null,
  status: 'loading'
};

export const fetchBankAsync = createAsyncThunk(
  'bank/fetchBank',
  async () => {
    const response = await fetchBank()
    return response.data
  }
)

export const drumPadSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBankAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchBankAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.bank = action.payload
      })
      .addCase(fetchBankAsync.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export const selectDrumPad = (state: RootState) => state.drumPad

export default drumPadSlice.reducer
