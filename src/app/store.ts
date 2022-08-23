import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import drumPadReducer from '../features/drumpad/drumpadSlice'

export const store = configureStore({
  reducer: {
    drumPad: drumPadReducer,
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
